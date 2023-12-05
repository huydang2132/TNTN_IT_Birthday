import { memberModel } from "../models/memberModel.js";

export const getMembers = async (req, res) => {
    try {
        const members = await memberModel.find().sort({ years: -1 });
        res.status(200).json(members);
    } catch (error) {
        console.log(`Error: ${error}`.red.bold);
        res.status(500).json({ error: error });
    }
}

export const insertMember = async (req, res) => {
    try {
        const newMember = req.body;
        if (newMember) {
            const member = new memberModel(newMember);
            await member.save();
            res.status(201).json(member);
        }
        else {
            res.status(400).json({
                devmsg: 'Bad request'
            });
        }
    } catch (error) {
        console.log(`Error: ${error}`.red.bold);
        res.status(500).json({ error: error });
    }
}

export const deleteMember = async (req, res) => {
    try {
        const id = req.query.id;
        const member = await memberModel.findById(id);
        if (member) {
            await memberModel.deleteOne(
                { _id: id },
            );
            res.status(200).json({
                devmsg: 'Delete Success!'
            });
        }
        else {
            res.status(404).json({
                devmsg: 'Member not found!'
            })
        }
    } catch (error) {
        console.log(`Error: ${error}`.red.bold);
        res.status(500).json({ error: error })
    }
}

export const updateMember = async (req, res) => {
    try {
        const id = req.query.id;
        const member = await memberModel.findById(id);
        const newMember = req.body;
        delete newMember.id;

        if (member) {
            await memberModel.updateOne({ _id: id }, { $set: newMember })
            res.status(200).json({
                member: member,
                devmsg: 'Update success.',
            });
        }
        else {
            res.status(404).json({
                devmsg: 'Post not found!'
            })
        }
    } catch (error) {
        console.log(`Error: ${error}`.red.bold);
        res.status(500).json({ error: error })
    }
}