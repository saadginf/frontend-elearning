import React from 'react'
import { connect } from 'react-redux'
import { Formik, Field, Form, ErrorMessage } from 'formik';
import {withRouter} from 'react-router-dom'
import * as Yup from 'yup';
import {registerUser} from '../../../actions/authActions'
import Logo from '../../../assets/logo.png'
import Message from '../../../components/message/Message';

const Register = (props) => {
    return (
        <div className="login-page">
        <div className="form-container">

            <div className="header-form">

                <img src={Logo} alt="Logo"></img>
                <p>Register</p>


            </div>

        <Formik
        initialValues={{
            name:'',
            email: '',
            password: '',
            password2: ''
        }}
        validationSchema={Yup.object().shape({
            name: Yup.string()
                        .min(6, 'Name must be at least 6 characters')
                        .required('Email is required'), 
            email: Yup.string()
                        .email('Email is invalid')
                        .required('Email is required'),
            password: Yup.string()
                        .min(6, 'Password must be at least 6 characters')
                     
                        .required('Password is required'),
            password2:  Yup.string()
                        .oneOf([Yup.ref('password'), null], 'Passwords must match')
                        .required('Confirm Password is required')

        })}
        onSubmit={fields => {
        
         
           
          props.register(fields, props.history)
        }}
        render={({ errors, status, touched }) => (
            <Form>
               <div className="form-group">
                    <label htmlFor="email">Name</label>
                    <Field name="name" type="text" className={'form-control' + (errors.name && touched.name ? ' is-invalid' : '')} />
                    <ErrorMessage name="name" component="div" className="invalid-feedback" />
                </div>
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
                            <label htmlFor="password2">Confirm Password</label>
                            <Field name="password2" type="password" className={'form-control' + (errors.password2 && touched.password2 ? ' is-invalid' : '')} />
                            <ErrorMessage name="password2" component="div" className="invalid-feedback" />
                        </div>
                
                <div className="form-group button-container">
                    <button type="submit" className="btn mr-2" id="login-button">Register</button>
                </div>
                <Message error show={props.error.email}>{props.error.email}</Message>
            </Form>
        )}
    />
    </div>
    </div>
    )
}

const mapStateToProps = ({auth}) => ({
    loading : auth.loading,
    error: auth.error
  });
  
  const mapDispatchToProps = {
    register: registerUser,
  };
  
  
  
  export default connect(mapStateToProps,mapDispatchToProps)(withRouter (Register));