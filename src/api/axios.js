import BASE_URL from './BASE_URL';

import axios from 'axios';

export const postData = async (url, payload) => {
    const response = await axios.post(`${BASE_URL}${url}`, payload);
    return response;
}
<<<<<<< HEAD
=======

export const getData = async (url, headers) => {
    const response = await axios.get(url, { headers });
    return response;
};
>>>>>>> fed9f1ef5b83cb2a18b8816b3c93f5f8c1d52a79
