import axios from '../axios.js';

const membersService = {
    getMembers: () => {
        return axios.get('/api/members');
    }
}

export default membersService;