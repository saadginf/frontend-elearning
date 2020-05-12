import React from 'react'
import {withRouter} from 'react-router-dom'
import Nabar from './Navigation/navbar/Navheader'
import Footer from './Navigation/footer/Footer'
import Logo from '../assets/logo.png'
import {connect} from 'react-redux'
const Layout = props => {
    console.log(props.location.pathname)
    return (
        <>
        <Nabar imgsrc={Logo} loc={props.location.pathname} isAuth={props.isAuth}/>
        <main>
            {props.children}
        </main>
        <Footer/>
        </>
    )
};
const mapStateToProps = ({auth}) => ({
    isAuth: auth.isAuth
  })
export default connect(mapStateToProps)(withRouter(Layout));


  
  
 