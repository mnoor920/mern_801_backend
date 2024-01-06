import express from 'express'
import { SignUp } from '../controller/user-controller.js';
import { CreateBlogPost } from '../controller/blog-post-controller.js';



const router = express.Router();


router.post('/', (req, res) => {
    res.send("App Config Succefully")
})
router.post('/create_user', SignUp)
router.post('/create_blog', CreateBlogPost)




export default router