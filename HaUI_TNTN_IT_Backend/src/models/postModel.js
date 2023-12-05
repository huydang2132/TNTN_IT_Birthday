import mongoose from "mongoose";

const post = mongoose.Schema(
    {
        fullName: {
            type: String,
            trim: true,
            default: '',
            required: true
        },
        email: {
            type: String,
            default: ''
        },
        content: {
            type: String,
            default: '',
            required: true,
            trim: true
        },
        isLike: {
            type: Boolean,
            default: false
        }
    },
    { timestamps: true }
);

export const postModel = mongoose.model("Post", post);