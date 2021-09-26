const multer = require ('multer');

const MIME_TYPES = {
    'image/gif': 'gif',
    'image/jpeg': 'jpeg',
    'image/jpg': 'jpg'
}

const storage = multer.diskStorage({
    destination: (req, file, callback) => {
        callback(null, 'images')
    },

    filename:(req, file, callback) => {
        const name = file.originalname.split(' ').join('_');
        console.log('CHECK NAME',name);
        const extension = MIME_TYPES[file.mimetype];
        callback(null, name + Date.now() + '.' + extension);  
    }
});

module.exports = multer({ storage: storage}).single('image');
