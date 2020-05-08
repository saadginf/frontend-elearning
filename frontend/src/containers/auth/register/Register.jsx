import React from 'react'
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';

import Logo from '../../../assets/logo.png'
const Register = () => {
    return (
        <div className="login-page">
        <div className="form-container">

            <div className="header-form">

                <img src={Logo} alt="Logo"></img>
                <p>Register</p>


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
                     
                        .required('Password is required'),
            confirmPassword:  Yup.string()
                        .oneOf([Yup.ref('password'), null], 'Passwords must match')
                        .required('Confirm Password is required')

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
                <div className="form-group">
                            <label htmlFor="confirmPassword">Confirm Password</label>
                            <Field name="confirmPassword" type="password" className={'form-control' + (errors.confirmPassword && touched.confirmPassword ? ' is-invalid' : '')} />
                            <ErrorMessage name="confirmPassword" component="div" className="invalid-feedback" />
                        </div>
                
                <div className="form-group button-container">
                    <button type="submit" className="btn mr-2" id="login-button">Register</button>
                </div>
            </Form>
        )}
    />
    </div>
    </div>
    )
}

export default Register
