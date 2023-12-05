import { postModel } from "../models/postModel.js";

export const getPost = async (req, res) => {
    try {
        const posts = await postModel.find().sort([['createdAt', 'desc']]);
        res.status(200).json(posts);
    } catch (error) {
        console.log(`Error: ${error}`.red.bold);
        res.status(500).json({ error: error });
    }
}

export const createPost = async (req, res) => {
    try {
        const newPost = req.body;
        if ((!newPost.fullName || newPost.fullName.trim() === "") || (!newPost.content || newPost.content.trim() === "")) {
            res.status(400).json({
                usermsg: 'Tên và nội dung không được để trống!',
                devmsg: 'fullName and content is not null!'
            })
        }
        else {
            const post = new postModel(newPost);
            await post.save();
            res.status(201).json(post);
        }
    } catch (error) {
        console.log(`Error: ${error}`.red.bold);
        res.status(500).json({ error: error });
    }
}

export const deletePost = async (req, res) => {
    try {
        const id = req.query.id;
        const post = await postModel.findById(id);
        if (post) {
            await postModel.deleteOne(
                { _id: id },
            );
            res.status(200).json({
                devmsg: 'Delete Success!'
            });
        }
        else {
            res.status(404).json({
                usermsg: 'Không tìm thấy lời chúc cần xóa!',
                devmsg: 'Post not found!'
            })
        }
    } catch (error) {
        console.log(`Error: ${error}`.red.bold);
        res.status(500).json({ error: error })
    }
}

export const likePost = async (req, res) => {
    try {
        const id = req.query.id;
        const post = await postModel.findById(id);

        if (post) {
            await postModel.updateOne({ _id: id }, { $set: { isLike: !post.isLike } })
            res.status(200).json({
                post: post,
                usermsg: post.isLike === true ? 'Bỏ thích thành công!' : 'Thích lời chúc thành công!',
                devmsg: post.isLike === true ? 'Dislike Success!' : 'Like Success!',
            });
        }
        else {
            res.status(404).json({
                usermsg: 'Không tìm thấy lời chúc cần like!',
                devmsg: 'Post not found!',
            })
        }
    } catch (error) {
        console.log(`Error: ${error}`.red.bold);
        res.status(500).json({ error: error })
    }
}