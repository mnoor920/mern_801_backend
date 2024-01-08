import BlogPost from "../modal/blog-post-modal.js";

export const CreateBlogPost = async (request, response) => {
    try {
        //     // const hashedPassword = await bcrypt.hash(request.body.password, 10)
        // const user = request.body
        const newBlog = new BlogPost(request.body)
        await newBlog.save()
        response.status(200).json({ msg: 'Blog Create Successfully' })
    } catch (error) {
        response.status(500).json(error)
    }
}


export const getBlogPosts = async (request, response) => {
    // let username = request.query.username;
    let posts;
    try {
        posts = await BlogPost.find({})
        response.status(200).json(posts)
    } catch (error) {
        response.status(500).json(error)
    }
}


export const getBlogPost = async (request, response) => {
    try {
        const post = await BlogPost.findById(request.params.id)
        response.status(200).json(post)
    } catch (error) {
        response.status(500).json(error)
    }
}