import axios from "../axios.js";

const postsService = {
    getPosts: () => {
        return axios.get('/api/posts');
    },
    createPost: (data) => {
        return axios.post('/api/posts', data);
    }
};

export default postsService;