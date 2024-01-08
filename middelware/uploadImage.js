import { error } from 'console';
import express from 'express'
import multer from 'multer';
import path from 'path'
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const router = express.Router();

router.use(express.static('public'))

// Convert the current module's URL to a file path
const __filename = fileURLToPath(import.meta.url);
// Get the directory name from the file path
const __dirname = dirname(__filename);


const imageUpload = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, path.join(__dirname, "../public/images"), function (error, success) {
            if (error) throw error
        })
    },
    filename: function (req, file, cb) {
        const imageName = Date.now() + "-" + file.originalname;
        cb(null, imageName, function (error1, success1) {
            if (error1) throw error1
        })
    }
})

const Upload = multer({ storage: imageUpload })

export default Upload
