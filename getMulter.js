const multer = require('multer')

// SET STORAGE
const storage = multer.diskStorage({
  destination: function(req, file, cb) {
    cb(null, './uploads')
  },
  filename: function(req, file, cb) {
    console.log(file)
    cb(null, file.originalname + '-' + Date.now())
  }
})

module.exports = multer({ storage })
