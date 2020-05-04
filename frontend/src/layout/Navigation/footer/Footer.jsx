import React from 'react'
import './footer.css'
import tagImgs from '../../../assets/mobiletags.png'
import MobileTags from "./MobileTags/MobileTags"
import Links from './Links/Links'
import EmailUs from "./EmailUs/EmailUs"


import logo from "../../../assets/logo.png"
const Footer = () => {
    return (
        <div className="foot">
            <MobileTags img={tagImgs}/>
           <Links/>
           <EmailUs 
           uri={logo}
           email="saad@gmail.com"
           />
        </div>
    )
}

export default Footer
