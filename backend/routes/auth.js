const config = require('config');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const _ = require('lodash');
const {User} = require('../models/user');
const mongoose = require('mongoose');
const Joi = require('joi');
const express = require('express');
const router = express.Router();

router.get('/',async(req,res)=>{
    const user = await User.find();
    res.send(user);
    
});
router.post('/',async(req,res)=>{
    const result = validate(req.query);
    if(result.error)res.status(400).send({"message":result.error.details[0].message});

    let user = await User.findOne({email:req.query.email});
    if(!user) return res.status(400).send({"error":'Invalid email or password'});


    const validpassword = await bcrypt.compare(req.query.password, user.password);
    if(!validpassword)return res.status(400).send({"error":'Invalid email or password'});

    // res.sendFile(__dirname+'/leave.html');
    res.send({"success":user});
    


    
    // const token = user.generateAuthToken();
    // res.send(token); 
});
function validate(req) {
    const schema = Joi.object({
        email:Joi.string().min(5).max(255).required().email(),
        password:Joi.string().min(6).max(1024).required()
    });
    return schema.validate(req);
}
module.exports = router;