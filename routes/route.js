import express from 'express'
import { SignUp, getAllUser, Login } from '../controller/user-controller.js';
import { CreateBlogPost, getBlogPosts, getBlogPost } from '../controller/blog-post-controller.js';
import Upload from '../middelware/uploadImage.js';



const router = express.Router();

// normal
router.get('/', (req, res) => {
    res.send("App Config Succefully")
})


// user authentication routes
router.post('/create_user', Upload.single('image'), SignUp)
router.post('/login_user', Login)
router.get('/get_users', getAllUser)

// blogs post routes
router.post('/create_blog', CreateBlogPost)
router.get('/get_blogs', getBlogPosts)
router.get('/get_blog/:id', getBlogPost)




export default router