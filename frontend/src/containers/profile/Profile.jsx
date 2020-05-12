import React from 'react'
import './profile.css'
import sample from '../../assets/avatar.png'
import image1 from '../../assets/1025.png'
import image2 from '../../assets/1073.png'
import image3 from '../../assets/1075.png'
import image4 from '../../assets/certificate.png'
const Profile = () => {
    return (
        <div className="profile-container">
            <div className="user-profile-container">
                <div className="user-info">
                    <img src={sample} alt=""/>
                    <div className='user-details'>

                            <span className="user-name">Saad Abbou</span>
                            <span className="user-det">Level: 6</span>
                            <span className="user-det">Xp: 1543</span>


                            <a href="#">Sign Out</a>

                    </div>

                </div>
                <hr></hr>
                <div className="user-courses-header">
                        <h4>My Courses</h4>
                </div>
                <div className="user-courses">
                    <div className="course-progress">
                     <img src={image1} alt=""/>
                     <span>100%</span>
                    </div>

               
                    <div className="course-progress">
                     <img src={image2} alt=""/>
                     <span>98%</span>
                    </div>

                    <div className="course-progress">
                     <img src={image3} alt=""/>
                     <span>30%</span>
                    </div>
                      
                </div>
                <hr></hr>
                <div className="user-courses-header">
                <h4>Achivements</h4>
                </div>

                <div className="user-achivement">

                <div className="course-achived">
                     <img src={image4} alt=""/>
                    <h5>Python Courses</h5>
                    </div>
                
                </div>
            </div>
        </div>
    )
}

export default Profile
