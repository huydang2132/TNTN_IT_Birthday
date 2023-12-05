import axios from '../axios.js';

const registerService = {
    getRegister: () => {
        return axios.get('/api/register');
    },
    insertRegister: async (data) => {
        const res = await axios.post('/api/register', data)
        if (res.status === 201)
            return res;
        else
            throw new Error(res);
    },
    updateRegister: (id, data) => {
        return axios.put('/api/register', { params: id }, data);
    },
    deleteRegister: (id) => {
        return axios.delete('api/register', { params: id });
    }
}

export default registerService;