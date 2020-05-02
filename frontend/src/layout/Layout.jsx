import React from 'react'

import Nabar from './Navigation/navbar/Navheader'
import Footer from './Navigation/footer/Footer'
import Logo from '../assets/logo.png'
const Layout = props => {
    return (
        <>
        <Nabar imgsrc={Logo}/>
        <main>
            {props.children}
        </main>
        <Footer/>
        </>
    )
};

export default Layout;
