import React, { useState } from 'react';
import './login.css'
import { postData } from '../api/axios';
import {UserContext} from '../contexts/authContext';
import { useContext } from 'react'
import { useNavigate } from 'react-router-dom';
import URL from '../routes/routes'

const Login = () => {
    const { userData, updateStateValue } = useContext(UserContext);
    const navigate = useNavigate()
    const [data, setData] = useState({
        email: '',
        password: '',
        error: '',
    });

    const handleChange = (field) => (event) => {
        setData({ ...data, [field]: event.target.value });
    };

    const loginFun = async () => {
        const post_data = {
            email: data.email,
            password: data.password,
        };

        try {
            const response = await postData('intern/api/v1/auth/signin', post_data);
            updateStateValue({
                email: response.data.email,
                name: response.data.name,
                phone: response.data.phone,
                userName: response.data.userName,
                userType: response.data.userType,
            });
            console.log(userData)
            setData({
                ...data,
                error: response.message
            });
            console.log(response)
            setTimeout(()=>{
                navigate(URL._base.main)
            })
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <div className="container">
            <label>Email</label>
            <input
                type="email"
                value={data.email}
                onChange={handleChange('email')}
                className="text-field"
            />

            <label>Password</label>
            <input
                type="password"
                value={data.password}
                onChange={handleChange('password')}
                className="text-field"
            />

            <button className="button" onClick={loginFun}>
                Login
            </button>
            {data.error && <h3>{data.error}</h3>}

        </div>
    );
};

export default Login;