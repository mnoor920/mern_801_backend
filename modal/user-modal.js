import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
    {
        role: {
            type: String,
            required: true,
        },
        first_name: {
            type: String,
            required: true,
        },
        last_name: {
            type: String,
            required: true,
        },
        email: {
            type: String,
            required: true,
            unique: true
        },
        password: {
            type: String,
            required: true
        },
        image: {
            type: String,
            required: true
        },
        facebook_link: {
            type: String,
        },
        whatsapp_link: {
            type: String,
        }
    }
)

const User = mongoose.model('user', userSchema)
export default User;