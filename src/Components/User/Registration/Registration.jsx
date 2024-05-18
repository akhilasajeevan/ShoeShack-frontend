import React from 'react';
import "./Registration.css"
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { Link } from 'react-router-dom'; 

const Registrationpage = () => {
    const initialValues = {
        username: '',
        password: '',
        confirmPassword: '',
        phone: '',
        email: '',
    };

    const validationSchema = Yup.object().shape({
        username: Yup.string().required('Username is required'),
        password: Yup.string().required('Password is required'),
        confirmPassword: Yup.string()
            .oneOf([Yup.ref('password'), null], 'Passwords must match')
            .required('Please confirm your password'),
        phone: Yup.string().required('Phone number is required'),
        email: Yup.string().email('Invalid email').required('Email is required'),
    });

    const handleSubmit = (values, { setSubmitting }) => {
        setTimeout(() => {
            alert(JSON.stringify(values, null, 2));
            setSubmitting(false);
        }, 400);
    };

    return (
        <div>
            <h2><center>Signup</center></h2>
            <Formik
                initialValues={initialValues}
                validationSchema={validationSchema}
                onSubmit={handleSubmit}
            >
                {({ isSubmitting }) => (
                  <center> <Form>
                    <div id='out'>
                        <div className="form-group">
                            {/* <label htmlFor="username">Username</label> */}
                            <Field type="text" name="username"placeholder="username"  style={{width:300}}/>
                            <ErrorMessage name="username" component="div" className="error" />
                        </div>
                        <div className="form-group">
                            {/* <label htmlFor="password">Password</label> */}
                            <Field type="password" name="password" placeholder="password"style={{width:300}} />
                            <ErrorMessage name="password" component="div" className="error" />
                        </div>
                        <div className="form-group">
                            {/* <label htmlFor="confirmPassword">Confirm Password</label> */}
                            <Field type="password" name="confirmPassword"placeholder="confirmpassword" style={{width:300}} />
                            <ErrorMessage name="confirmPassword" component="div" className="error" />
                        </div>
                        <div className="form-group">
                            {/* <label htmlFor="phone">Phone Number</label> */}
                            <Field type="tel" name="phone" placeholder="phone number" style={{width:300}}/>
                            <ErrorMessage name="phone" component="div" className="error" />
                        </div>
                        <div className="form-group">
                            {/* <label htmlFor="email">Email Address</label> */}
                            <Field type="email" name="email"placeholder="Email address"  style={{width:300}}/>
                            <ErrorMessage name="email" component="div" className="error" />
                        </div>
                        
                        <button type="submit" disabled={isSubmitting}>Sign Up</button>
                        </div>
                    </Form>
                    <p>If you already have an account, <Link to="/login">sign in</Link>.</p>
</center>
                )}
               
            </Formik>
        </div>
      
    );
};
export default Registrationpage