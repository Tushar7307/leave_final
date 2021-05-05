const cors = require('cors');
const users = require('./routes/users');
const auth = require('./routes/auth');
const leaves = require('./routes/leaves');
const mongoose = require('mongoose');
const express = require('express');
const app = express();

mongoose.connect('mongodb://localhost/leave',{useNewUrlParser:true,useUnifiedTopology:true})
.then(()=>console.log("mongodb is connected to server"))
.catch(err=>console.log("mongodb could not connected to server",err))

app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(cors());
app.use('/api/auth',auth);
app.use('/api/users',users);
app.use('/api/leaves',leaves);

app.listen(3000,(req,res)=>{
    console.log('server is connected to 3000...');
});