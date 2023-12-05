import axios from '../axios.js';

const registerService = {
    getRegister: async () => {
        const res = await axios.get('/api/register');
        if (res.status === 200) {
            return res;
        }
        else {
            throw new Error(res);
        }
    },
    deleteRegister: async (id, token) => {
        const res = await axios.delete('/api/register', {
            params: { id },
            headers: { 'Authorization': `Bearer ${token}` }
        });
        if (res.status === 200) {
            return res;
        }
        else {
            throw new Error(res);
        }
    },
    setIsPay: async (id, token) => {
        const res = await axios.put('/api/register/payment', null, {
            params: { id },
            headers: { 'Authorization': `Bearer ${token}` }
        });
        if (res.status === 200) {
            return res;
        }
        else {
            throw new Error(res);
        }
    }
}

export default registerService;