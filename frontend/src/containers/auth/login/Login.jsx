import React from 'react'
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import './Login.css'
import Logo from '../../../assets/logo.png'
const Login = () => {
    return (
        <div className="login-page">
        <div className="form-container">

            <div className="header-form">

                <img src={Logo} alt="Logo"></img>
                <p>Sign In</p>


            </div>

        <Formik
        initialValues={{
            email: '',
            password: '',
            confirmPassword: ''
        }}
        validationSchema={Yup.object().shape({
            
            email: Yup.string()
                .email('Email is invalid')
                .required('Email is required'),
            password: Yup.string()
                .min(6, 'Password must be at least 6 characters')
                .matches(/[A-Z]{2}\d{2}[A-Z]{2}\d{4}$/i,'invalid Password')
                .required('Password is required'),

        })}
        onSubmit={fields => {
            console.log(fields)
            alert('SUCCESS!! :-)\n\n' + JSON.stringify(fields))
        }}
        render={({ errors, status, touched }) => (
            <Form>
              
                <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <Field name="email" type="text" className={'form-control' + (errors.email && touched.email ? ' is-invalid' : '')} />
                    <ErrorMessage name="email" component="div" className="invalid-feedback" />
                </div>
                <div className="form-group">
                    <label htmlFor="password">Password</label>
                    <Field name="password" type="password" className={'form-control' + (errors.password && touched.password ? ' is-invalid' : '')} />
                    <ErrorMessage name="password" component="div" className="invalid-feedback" />
                </div>
                <a href="forgot" className="pass-forget">forgot Password?</a>
                <div className="form-group button-container">
                    <button type="submit" className="btn mr-2" id="login-button">Login</button>
                </div>
            </Form>
        )}
    />
    </div>
    </div>
    )
}

export default Login
