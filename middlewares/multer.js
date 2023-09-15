const path = require("path");
const multer = require("multer");

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        const carpetaDestinoImg = path.join( __dirname, '..', 'public', 'img', 'users');
        cb(null, carpetaDestinoImg);
    },
    filename: (req, file, cb) => {
        const nombreImgCargada = "avatar-" + Date.now() + path.extname(file.originalname);
        cb(null, nombreImgCargada);
    }
});

const upload = multer({ storage })
module.exports = upload;