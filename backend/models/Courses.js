const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const CourseSchema = new Schema(
    {
        author : {
            type:Schema.Types.ObjectId,
            ref: 'users'
        },
        authorName : {
            type:String,
           required:true
        },
        title : {
            type:String,
            required: true
        },
        description : {
            type:String,
            required: true
        },
        level : {
            type:String,
            required: true
        },
        learners : {
            type:Number,
            default: 0
        },
        nbChapters : {
            type:Number,
           required:true
        },

    }

);
module.exports = Courses = mongoose.model('courses', CourseSchema);