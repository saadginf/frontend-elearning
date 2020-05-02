import React from 'react'
import './footer.css'
import tagImgs from '../../../assets/mobiletags.png'
import MobileTags from "./MobileTags/MobileTags"
import Links from './Links/Links'
const Footer = () => {
    return (
        <div className="foot">
            <MobileTags img={tagImgs}/>
           <Links/>
        </div>
    )
}

export default Footer
