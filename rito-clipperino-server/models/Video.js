const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const videoSchema = mongoose.Schema({
    author: {
        type:String,
    },
    title: {
        type:String,
        maxlength:50,
    },
    description: {
        type: String,
    },
    filePath : {
        type: String,
    },
    duration :{
        type: String
    },
}, { timestamps: true })


const Video = mongoose.model('Video', videoSchema);

module.exports = { Video }