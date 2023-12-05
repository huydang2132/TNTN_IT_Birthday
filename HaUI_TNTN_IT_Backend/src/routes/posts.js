import express from 'express';
import { getPost, createPost, deletePost, likePost } from '../controllers/postsControllers.js';

const router = express.Router();

router.get('/', getPost);

router.post('/', createPost);

router.delete('/', deletePost);

router.put('/like-post', likePost);

export default router;