import React , {useEffect}from 'react'
import { Formik, Field, Form, ErrorMessage } from 'formik';
import {connect} from 'react-redux';
import * as Yup from 'yup';
import {withRouter} from 'react-router-dom'
import './Login.css'
import Logo from '../../../assets/logo.png'
import {loginUser} from '../../../actions/authActions'
import Message from '../../../components/message/Message'




const Login = props => {
    useEffect(() => {
        if(props.isAuth){
            props.history.push('/')
        }
        // Update the document title using the browser API
   
      });
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
        }}
        validationSchema={Yup.object().shape({
            
            email: Yup.string()
                .email('Email is invalid')
                .required('Email is required'),
            password: Yup.string()
    
                
                .required('Password is required'),

        })}
        onSubmit={fields => {
            console.log(fields)
            props.login(fields,props.history)
          
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
                <Message error show={props.error}>{props.error.email} <br></br>{props.error.password}</Message>
            </Form>
        )}
    />
    </div>
    </div>
    )
}

const mapStateToProps = ({auth}) => ({
    loading : auth.loading,
    error: auth.error,
    isAuth: auth.isAuth
  });
  
  const mapDispatchToProps = {
    login: loginUser,
  };
  
  
  
  export default connect(mapStateToProps,mapDispatchToProps)(withRouter(Login));
