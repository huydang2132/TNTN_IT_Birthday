import axios from '../axios.js';

const postService = {
    getPosts: async () => {
        const res = await axios.get('/api/posts');
        if (res.status === 200) {
            return res;
        }
        else {
            throw new Error(res);
        }
    },
    deletePost: async (id) => {
        const res = await axios.delete('/api/posts', { params: { id } });
        if (res.status === 200) {
            return res;
        }
        else {
            throw new Error(res);
        }
    },
    likePost: async (id) => {
        const res = await axios.put('/api/posts/like-post', null, { params: { id } });
        if (res.status === 200) {
            return res;
        }
        else {
            throw new Error(res);
        }
    }
}

export default postService;