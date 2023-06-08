const fs = require('fs')
const express = require('express')
const cors = require('cors')
const multer = require('multer')

const handleFile = require('./handleFile')

const app = express()

var storage = multer.diskStorage({
    destination: function (req, file, cb) {
    cb(null, 'public')
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + '-' +file.originalname )
  }
})

var upload = multer({ storage: storage }).single('file')

app.listen(8080, console.log('App listening on port 8080'))

app.use(cors())
// app.use(fileupload())

app.get('/', (req, res) => {
    res.json({mssg: "listening on port 8080"})
})

app.post('/fileupload',function(req, res) {
     
    upload(req, res, function (err) {
        console.log('Inoming post request')
        console.log(req)
           if (err instanceof multer.MulterError) {
               return res.status(500).json(err)
           } else if (err) {
               return res.status(500).json(err)
           }
      return res.status(200).send(req.file)

    })

});

app.get('/data', async (req, res) => {
    await handleFile.getData()
})