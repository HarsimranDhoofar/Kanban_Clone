const express = require('express');
const router = express.Router();
const Board = require('../models/board');

router.post('', (req, res, next) => {
    const board = new Board({
        _id: req.body._id,
        name: req.body.name,
        column: [{
            _id: req.body._id,
            taskName:"",
            desc: "",
            history:[""]
        }]
    });
    board.save().then(result => {
        res.status(201).json({
            message: "Post added successfully",
            postId: result.id
        });
    });

});

router.patch('', (req, res, next) => {
    const board = new Board({
        name: req.body.name,
        column: req.body.column
    });
    board.save().then(result => {
        res.status(201).json({
            message: "Post updated successfully",
           // postId: result.id
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

// router.delete('/:id', (req, res, next) => {
//     Post.deleteOne({
//         _id: req.params.id
//     }).then(result => {
//         console.log(result);
//         res.status(200).json({
//             message: "Post deleted"
//         })
//     })

// });
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