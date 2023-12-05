import axios from '../axios.js';

const authService = {
    authUser: async (data) => {
        const res = await axios.post('/api/accounts/login', data);
        if (res.status === 200) {
            return res;
        }
        else {
            throw new Error(res);
        }
    }
}

export default authService;