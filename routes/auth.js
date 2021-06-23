const router = require('express').Router();
const User = require('../model/User');
const expressAsyncHandler = require('express-async-handler');
const {registerValidation,loginValidation} = require('../validation');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const verify = require('./verifyToken');



router.get('/register',(req,res)=>
{

    console.log("register get calıstı");
    res.send("register get calısıyor..")
    console.log(req);
});



router.post('/register', async (req,res)=>
{
    //lets validate data before we a user
    const {error} = registerValidation(req.body);
   if(error) return res.status(400).send(error.details[0].message);
    
   // checking email 
   const emailExist = await User.findOne({email:req.body.email});
    if(emailExist) return res.status(400).send('Email alredy exists');

    //Hash passwords
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(req.body.password,salt);

    const user = new User({
       name:req.body.name,
       email:req.body.email,
       password:hashedPassword

   });
   console.log(req.body)
   try {
       const savedUser = await user.save();
       res.send(savedUser);
   } catch (err) {
       res.status(400).send(err);
   }
});

router.post('/login', async (req,res)=>
{
 //lets validate data before we a user
 const {error} = loginValidation(req.body);
 console.log(req.body);
 if(error) return res.status(400).send(error.details[0].message);
   // checking email 
   const user = await User.findOne({email:req.body.email});
    if(!user) return res.status(400).send('Email is not found');
    console.log(user);
    //Password is correct
    const validPass = await bcrypt.compare(req.body.password,user.password);
    if(!validPass) return res.status(400).send('Invalid password');
    //create and assign a token
    const token = jwt.sign({_id: user._id},process.env.TOKEN_SECRET);
    res.header('auth-token',token).send(token);
    console.log('Logged in');
});

router.post('/loggout',verify,(req,res)=>
{
    var token = req.header('auth-token');
    token = '';
    res.send('Loggout');
});


module.exports = router;