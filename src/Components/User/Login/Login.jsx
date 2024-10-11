

import React from 'react';
import './Login.css';
import * as yup from 'yup';
import { useFormik } from 'formik';
import { Link, useNavigate } from 'react-router-dom';
import { userLogin } from '../../../Services/userApi';
import { toast } from 'react-toastify';

function Login() { 
    const navigate = useNavigate();
    const initialValues = {
        username: "",
        password: "",
    };

    const validationSchema = yup.object().shape({
        username: yup.string()
            .required('Username required'),
        password: yup.string()
            .required("Password required"),
    });

    async function onSubmit(values) {
        try {
            const response = await userLogin(values);
            if (response.data.success) {
                const { token } = response.data;
                toast.success(response.data.message); 
                localStorage.setItem('token', token);
                navigate('/');
            } else {
                toast.error(response.data.message); // Display error message
            }
        } catch (error) {
            console.error("There was an error logging in!", error);
        }
    }
    
    const formik = useFormik({
        validationSchema,
        onSubmit,
        initialValues,
    });

    return (
        <div className='user-login-container'>
            <div className='user-login-box'>
                <center>
                    <form onSubmit={formik.handleSubmit} className='user-login-form'>
                        <br/>
                        <div className="user-login-input-group">
                            <label htmlFor="username" className="form-label">Username</label>
                            <input type="text" className="form-control" id="user-username" style={{ width: 300 }}
                                name='username'
                                onChange={formik.handleChange} 
                                onBlur={formik.handleBlur} 
                                value={formik.values.username} />
                            {formik.touched.username && formik.errors.username ? (
                                <div className="user-login-error">{formik.errors.username}</div>
                            ) : null}
                        </div>
                        <br />
                        <div className="user-login-input-group">
                            <label htmlFor="password" className="form-label">Password</label>
                            <input type="password" className="form-control" id="user-password" style={{ width: 300 }} 
                                name='password'
                                onChange={formik.handleChange} 
                                onBlur={formik.handleBlur}
                                value={formik.values.password} />
                            {formik.touched.password && formik.errors.password ? (
                                <div className="user-login-error">{formik.errors.password}</div>
                            ) : null}
                        </div>
                        <br />
                        <div className='user-login-button-wrapper'>
                            <button type="submit" className="user-login-button btn btn-primary">Login</button>
                        </div>
                    </form>
                </center>
            </div>
        </div>
    );
}

export default Login;
