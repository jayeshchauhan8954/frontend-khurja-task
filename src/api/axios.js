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
