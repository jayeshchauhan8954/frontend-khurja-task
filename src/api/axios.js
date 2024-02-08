import BASE_URL from './BASE_URL';

import axios from 'axios';

export const postData = async (url, payload) => {
    const response = await axios.post(`${BASE_URL}${url}`, payload);
    return response;
}

export const getData = async (url, headers) => {
    const response = await axios.get(`${BASE_URL}${url}`, { headers });
    return response;
};