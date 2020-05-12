const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const passport = require('passport')
const keys = require('../../config/keys')
//Load User Modal
const User = require('../../models/User')
const validateRegisterInput = require('../../validation/register');
const validateLoginInput = require('../../validation/login');
// @route   GET api/users/test
// @desc    Tests users route
// @access  Public
router.get('/test', (req, res) => res.json({ msg: 'Users Works' }));

// @route   GET api/users/register
// @desc    Register a User
// @access  Public
router.post('/register', (req,res)=>{
    const { errors, isValid } = validateRegisterInput(req.body);

    // Check Validation
    if (!isValid) {
      return res.status(400).json(errors);
    }

User.findOne({email:req.body.email})
.then(user => {
    if(user){
        return res.status(400).json({email:"email already exists"});
    } else {
        const newUser = new User({
            name: req.body.name,
            email:req.body.email,
            password: req.body.password
        });
        bcrypt.genSalt(10,(err,salt)=>{
            bcrypt.hash(newUser.password,salt, (err,hash)=>{
                if (err) throw err;
                newUser.password = hash;
                newUser.save()
                .then(user=>res.json(user))
                .catch(err => console.log(err))
            })
        })
    }
})


})
// @route   GET api/users/login
// @desc    Login User returning token
// @access  Public
router.post('/login', (req,res)=>{

    const { errors, isValid } = validateLoginInput(req.body);

    // Check Validation
    if (!isValid) {
      return res.status(400).json(errors);
    }


                const email = req.body.email;
                const password = req.body.password;

   //find user by email 
        User.findOne({email})
        .then(user =>{
            if(!user){
                return res.status(404).json({email:'email not found'})
            }
            //check password
            bcrypt.compare(password, user.password)
            .then(isMatch=>{
                if(isMatch) {
                        //User Matched

                const payload= {
                    id: user.id,
                    name: user.name,
                    email:user.email,
                }
                        //Sign Token
                   jwt.sign(payload,keys.secretOrkey, {expiresIn: 3600}, (err,token)=>{
                            res.json({
                                success:true,
                                token:'Bearer '+token
                            })
                   })
                } else {
                    return res.status(400).json({password : 'incorrect password'})
                }
            });
        });
});
// @route   GET api/users/current
// @desc    Return current user
// @access  private
router.get('/current', passport.authenticate('jwt', {session:false}), (req,res)=>{
res.json({
    id: req.user.id,
    name:req.user.name,
    email:req.user.email
})
});
module.exports = router;