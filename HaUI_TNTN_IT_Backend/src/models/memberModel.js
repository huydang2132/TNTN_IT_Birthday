import mongoose from "mongoose";

const viceLeaderSchema = new mongoose.Schema({
    fullName: {
        type: String,
        default: ''
    },
    img: {
        type: String,
        default: ''
    }
});

const viceLeader = mongoose.model("viceLeader", viceLeaderSchema);

const member = mongoose.Schema(
    {
        years: {
            type: Number,
            default: ''
        },
        leaderFullName: {
            type: String,
            default: ''
        },
        leaderImg: {
            type: String,
            default: '',
        },
        viceLeaders: [{
            type: Object,
            ref: 'viceLeader'
        }]
    },
    { timestamps: true }
);

export const memberModel = mongoose.model("Member", member);
