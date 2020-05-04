const express = require('express');
const router = express.Router();
const Board = require('../models/board');

router.post('', (req, res, next) => {
    const board = new Board({
        _id: req.body._id,
        name: req.body.name,
        columns: [{
            _id: req.body._id,
            taskName:"",
            desc: "",
            history:[""]
        }
        ]
    });
    board.save().then(result => {
        res.status(201).json({
            message: "Post added successfully",
            postId: result.id
        });
    });

});

router.put('', (req, res, next) => {
    const board = new Board({
        _id: req.body._id,
        name: req.body.name,
        columns: req.body.columns
    });
    Board.updateOne({
        _id: req.body._id
    },board).then(result => {
        res.status(200).json({
            message: "updated successfully",
             postId: result.id
        });
    });

});
router.put('/edit/:taskId', (req, res, next) => {

    Board.findByIdAndUpdate({ columns : {taskName: req.params.taskId.toString()}}).then(result => {
        res.status(203).json({
            message: "Task Name Updated",
             postId: result.id
        });
    });

});

// router.put('', (req, res, next) => {
//     const post = new Post({
//         name: req.body.name,
//         column: req.body.column
//     });
//     Post.updateOne({
//         _id: req.params.id
//     }, post).then(result => {
//         console.log(result);
//         res.status(200).json({
//             message: "Update successful!"
//         })
//     });
// });

router.delete('/:_id', (req, res, next) => {
    Board.deleteOne({
        _id: req.params._id
    }).then(result => {
        console.log(result);
        res.status(200).json({
            message: "Post deleted"
        })
    })

});

router.delete('/clearEveryThing/All/E', (req, res, next) => {
    console.log("we are in nodejs")
    Board.remove().then(result => {
        console.log(result);
        res.status(202).json({
            message: "Everything Deleted"
        })
        })

});
router.delete('/:colId/:taskName', (req, res, next) => {
    Board.updateOne({$pull:{ columns : {taskName: req.params.taskName.toString()}}}).then(board=>{
        
        const col = board['columns'];
        for(let i =0; i<=Object.keys(col).length -1; i++){
           const len = col[i];
           const tName = len['_id'];
           if(req.params.taskId == tName){
               console.log("reached here")
               
          }
        }

    })

});
// router.get('/:id', (req, res, next) => {
//   Post.findById(req.params.id).then(post=>{
//       if(post){
//           res.status(200).json(post);
//       }
//       else{
//           res.status(404).json({message:'Post not found!'})
//       }
//   });
// });


router.get('', (req, res, next) => {
    //res.send("hello from express!");
    Board.find()
        .then(documents => {
            console.log(documents);
            res.status(200).json({
                message: 'Post fetched succesfully!',
                boards: documents
            });
        });
});

module.exports =router;