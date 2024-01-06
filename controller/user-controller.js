import User from "../modal/user-modal.js";


export const SignUp = async (request, response) => {
    try {
        //     // const hashedPassword = await bcrypt.hash(request.body.password, 10)
        // const user = request.body
        const newUser = new User(request.body)
        await newUser.save()
        response.status(200).json({ msg: 'User Sign Up Successfully' })
    } catch (error) {
        response.status(500).json(error)
    }
}