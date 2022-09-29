const express = require('express');
const router = express.Router();
const multer = require('multer');


const { Video } = require("../models/Video");


let storage = multer.diskStorage({
    destination:  (req, file, callback) => {
        callback(null, 'uploads')
    },
    filename:  (req, file, callback) => {
        callback(null, `${Date.now()}_${file.originalname}`)
    },
    fileFilter: (req, file, callback) => {
        const ext = path.extname(file.originalname)
        if (ext !== '.mp4') {
            return callback(res.status(400).end('only mp4 is allowed'), false);
        }
        callback(null, true)
    }
})

let upload = multer({ storage: storage }).single("file")


router.post("/uploadfiles", (req, res) => {

    upload(req, res, err => {
        if (err) {
            return res.json({ success: false, err })
        }
        return res.json({ success: true, filePath: res.req.file.path, fileName: res.req.file.filename })
    })

});

router.post("/uploadVideo", (req, res) => {

    const video = new Video(req.body)

    video.save((err, video) => {
        if(err) return res.status(400).json({ success: false, err })
        return res.status(200).json({
            success: true 
        })
    })

});


module.exports = router;