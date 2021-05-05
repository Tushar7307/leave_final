const Leave = require('../models/leave');
const mongoose = require('mongoose');
const express = require('express');
const router = express.Router();

router.get('/',(req,res)=>{
    
    res.sendFile(__dirname+'/leave.html');
})
router.post('/',async(req,res)=>{
    const leave = new Leave({
        from:req.query.from,
        to:req.query.to,
        reason:req.query.reason
    });
    await leave.save();
    res.send({"success":leave});
})

module.exports = router;