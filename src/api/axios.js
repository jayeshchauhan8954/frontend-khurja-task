<<<<<<< HEAD
import axios from "axios";
import { BASE_URL } from "./base-url";
export const getData=async(url)=>{
   const response=await axios.get(`${BASE_URL}/${url}`)
   return response.data
}
export const postData=async(url,data)=>{
    const response=await axios.post(`${BASE_URL}/${url}`,data)
    return response.data;  
 }
=======
import BASE_URL from './BASE_URL';

import axios from 'axios';

export const postData = async (url, payload) => {
    const response = await axios.post(url, payload);
    return response;
}
>>>>>>> 9245d378fd1d51feab220f2349deb9d0806b1013
