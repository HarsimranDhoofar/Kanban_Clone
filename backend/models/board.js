const mongoose =require('mongoose');
//const column = require('../../src/app/models/column.model')
const columnSchema= mongoose.Schema({
    _id: String,
    name: String,
    columns: [{
        taskName: String,
        desc: String,
        history: Array,
        _id: String
    }]
});
module.exports=mongoose.model('Board', columnSchema);
