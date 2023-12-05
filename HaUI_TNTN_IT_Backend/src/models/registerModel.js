import mongoose from "mongoose";

const register = mongoose.Schema(
    {
        fullName: {
            type: String,
            trim: true,
            required: true
        },
        schoolYear: {
            type: String,
            default: '',
        },
        className: {
            type: String,
            default: '',
        },
        phoneNumber: {
            type: String,
            trim: true,
            require: true,
            unique: true
        },
        isPay: {
            type: Boolean,
            default: false
        },
    },
    { timestamps: true }
);

export const registerModel = mongoose.model("Register", register);