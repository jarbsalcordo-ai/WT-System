import axios from 'axios';

const API_URL = 'http://localhost:3000/api';

export const login = async (credentials) => {
    try {
        const response = await axios.post(`${API_URL}/login`, credentials);
        return response.data;
    } catch (error) {
        throw error;
    }
};

export const getRequests = async () => {
    try {
        const response = await axios.get(`${API_URL}/requests`);
        return response.data;
    } catch (error) {
        throw error;
    }
};
