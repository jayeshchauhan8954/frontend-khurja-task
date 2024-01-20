import { useState } from 'react';
// import axios from 'axios';
import './signup.css'
import URL from '../routes/routes'
// const BASE_URL = 'https://backend-khurja-task-production.up.railway.app';
// import { BASE_URL } from '../api/base-url';
import { useNavigate } from 'react-router-dom'
import { postData } from '../api/axios';
const Signup = () => {
    const navigate = useNavigate()
    const [data, setData] = useState({
        name: '',
        userName: '',
        email: '',
        phone: '',
        password: '',
        error: '',
    });

    const handleChange = (field) => (event) => {
        setData({ ...data, [field]: event.target.value });
    };

    const signupFun = async () => {
        try {
            const post_data = {
                name: data.name,
                userName: data.userName,
                email: data.email,
                phone: data.phone,
                password: data.password,
            };

            // const response = await axios.post(`${BASE_URL}/intern/api/v1/auth/signup`, postData);
            // console.log(response.data);
            const response = await postData("intern/api/v1/auth/signup", post_data)
            setData({
                ...data,
                error: response.message
            });
            setTimeout(() => {
                navigate(URL._auth.login)

            }, 3000)

            console.log(response)
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <div className="container">
            <label>Name</label>
            <input
                type="text"
                value={data.name}
                onChange={handleChange('name')}
                className="text-field"
            />


            <label>Username</label>
            <input
                type="text"
                value={data.userName}
                onChange={handleChange('userName')}
                className="text-field"
            />

            <label>Email</label>
            <input
                type="email"
                value={data.email}
                onChange={handleChange('email')}
                className="text-field"
            />

            <label>Phone</label>
            <input
                type="text"
                value={data.phone}
                onChange={handleChange('phone')}
                className="text-field"
            />

            <label>Password</label>
            <input
                type="password"
                value={data.password}
                onChange={handleChange('password')}
                className="text-field"
            />

            <button className="button" onClick={signupFun}>
                Sign Up
            </button>
            {data.error && <h3>{data.error}</h3>}
        </div>
    );
};

export default Signup;