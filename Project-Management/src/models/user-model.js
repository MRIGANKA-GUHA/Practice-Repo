import mongoose, { Schema } from "mongoose";

const userSchema= new Schema({
    avatar: {
        type: {
            url: String,
            localPath: String,
        },
        default: {
            url: `https://placehold.co/200x200`,
            localPath: ``
        }
    },
    username: {
        type: String,
        required: true,
        unique: true,
        lowercase: true,
        trim: true,
        index: true
    },
    email:{
        type: String,
        required: true,
        unique: true,
        lowercase: true,
        trim: true
    },
    fullName:{
        type: String,
        required: [true,"Name is required"],
        trim: true
    },
    password:{
        type: String,
        required: [true, "Password is required"],               //If somebody doesnt give pass then the warning will be shown
    },
    isEmailVerified:{
        type: Boolean,
        default: false
    },
    refreshToken:{
        type: String
    },
    forgotPasswordToken:{
        type: String
    },
    forgotPasswordExpiry:{
        type: Date
    },
    emailVerificationToken:{
        type: String
    },
    emailVErificationExpiry:{
        type: Date
    }
},{
    timestamps: true
}
)

export const user= mongoose.model("user", userSchema)