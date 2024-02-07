import User from "../modal/user-modal.js";


export const SignUp = async (request, response) => {
    let userMatch = await User.findOne({ email: request.body.email })
    if (!userMatch) {
        try {
            //     // const hashedPassword = await bcrypt.hash(request.body.password, 10)
            // const user = request.body
            const newUser = new User({
                first_name: request.body.first_name,
                last_name: request.body.last_name,
                email: request.body.email,
                password: request.body.password,
                image: request.file.filename,
            })
            await newUser.save()
            response.status(200).json({ msg: 'User Sign Up Successfully' })
        } catch (error) {
            response.status(500).json(error)
        }
    }
    else {
        return response.status(400).json({ msg: "User email already Exist" })
    }

}


// export const LoginUser = async (request, response) => {
//     // const ACCESS_SECRET_KEY = 'cb5102032ab78cf23cee2b1af7c7c8a9f26b4848598730982fd32a755c1b38391ea6f2441c84a898faf347b9343a3c5454a24d3d8f75367a7c8fdd8f7cee56b4'
//     // const REFRESH_SECERT_KEY = 'ca198186d00c6355dc5a3270d1543201648ba4e08417a8b34cc573b659f3e3e525df1373aba24a7c188b3a2c186a5ce0dd38135686b8f10e056f894b313b0d96'
//     let user = await User.findOne({ user: request.body.user })
//     if (!user) {
//         return response.status(400).json({ msg: 'user not found' })
//     }
//     try {
//         let match = await bcrypt.compare(request.body.password, user.password)
//         if (match == true) {
//             const accessToken = jwt.sign(user.toJSON(), ACCESS_SECRET_KEY, { expiresIn: '15m' })
//             const refreshToken = jwt.sign(user.toJSON(), REFRESH_SECERT_KEY)
//             const newToken = new Token({ token: refreshToken })
//             await newToken.save();
//             return response.status(200).json(
//                 {
//                     accessToken: accessToken,
//                     refreshToken: refreshToken,
//                     userData: user
//                 }
//             )
//         } else {
//             return response.status(400).json({
//                 msg: 'Password not matched'
//             })
//         }
//     } catch (error) {
//         return response.status(500).json({
//             msg: 'Error while login'
//         })
//     }
// }



export const Login = async (request, response) => {
    const userMatch = await User.findOne({ email: request.body.email })
    if (!userMatch) {
        return response.status(200).json({ msg: 'User Email not found' })
    }
    try {
        if (request.body.password == userMatch.password) {
            return response.status(200).json(
                {
                    msg: "User Sign Up Successfully",
                    userData: userMatch
                }
            )
        } else {
            return response.status(200).json({
                msg: 'Password not matched'
            })
        }
    } catch (error) {
        response.status(500).json(error)
    }
}


export const getAllUser = async (request, response) => {
    let allUser;
    try {
        allUser = await User.find({})
        response.status(200).json(allUser)
    } catch (error) {
        response.status(500).json(error)
    }
}


