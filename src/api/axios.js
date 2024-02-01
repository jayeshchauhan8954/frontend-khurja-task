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
>>>>>>> 69625ab54b0eb46fca5193f093618386c8a6ad8e
