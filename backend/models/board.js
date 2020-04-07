const mongoose =require('mongoose');
//const column = require('../../src/app/models/column.model')
const boardSchema= mongoose.Schema({
    name: {type:String, required:true},
    columns: {type:Array, required:true}
});
module.exports=mongoose.model('Board', boardSchema);
