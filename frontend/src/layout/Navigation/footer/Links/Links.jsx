import React from 'react'
import {Link,  BrowserRouter as Router} from 'react-router-dom'
import './Links.css'
const Links = () => {
    return (
        <div className="links">
            <Router>
               <Link to="/">Home</Link>
               <Link to="courses">Courses</Link>
               <Link to="blog">Blog</Link>
               <Link to="discuss">Discuss</Link>
               </Router>
        </div>
    )
}

export default Links
