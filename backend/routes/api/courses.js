const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const passport = require('passport');


const Course = require('../../models/Courses')
// @route   GET api/users/test
// @desc    Tests users route
// @access  Public
router.get('/test', (req, res) => res.json({ msg: 'courses Works' }));

// @route   GET api/posts
// @desc    Tests users route
// @access  private needs validator
router.post('/', passport.authenticate('jwt', {session:false}), (req,res)=>{
   const newCourse = new Course({
       author: req.user.id,
       authorName:req.user.name,
       title: req.body.title,
       description: req.body.description,
       level: req.body.level,
       nbChapters:req.body.nbChapters,
   })
   
   newCourse.save().then(course=>
    res.json(course));
});
// @route   GET api/courses
// @desc    fetchg courses
// @access  public

router.get('/', (req, res) => {
    Course.find()
    .then(courses=>res.json(courses))
    .catch(err => res.status(404))
});
// @route   GET api/courses/:id
// @desc    fetch course
// @access  private
router.get('/:id', passport.authenticate('jwt', {session:false}), (req, res) => {
    Course.findById(req.params.id)
    .then(course=>res.json(course))
    .catch(err => res.status(404))
});

module.exports = router;