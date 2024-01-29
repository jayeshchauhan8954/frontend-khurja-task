import BASE_URL from './BASE_URL';

import axios from 'axios';

export const postData = async (url, payload) => {
    const response = await axios.post(`${BASE_URL}${url}`, payload);
    return response;
}