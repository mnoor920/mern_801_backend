import express from 'express'
import { SignUp } from '../controller/user-controller.js';
import { CreateBlogPost, getBlogPosts } from '../controller/blog-post-controller.js';



const router = express.Router();

// normal
router.get('/', (req, res) => {
    res.send("App Config Succefully")
})


// user authentication routes
router.post('/create_user', SignUp)

// blogs post routes
router.post('/create_blog', CreateBlogPost)
router.get('/get_blogs', getBlogPosts)




export default router