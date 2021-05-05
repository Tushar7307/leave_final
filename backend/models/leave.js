const mongoose = require('mongoose');

const leaveSchema = new mongoose.Schema({
    reason:{
        type:String
    },
    from:{
        type:Date,
        required:true
    },
    to:{
        type:Date,
        required:true
    }
});

const Leave = mongoose.model('Leave',leaveSchema);

module.exports = Leave;