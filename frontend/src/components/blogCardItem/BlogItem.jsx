import React from 'react'
import './BlogItem.css'
const BlogItem = props => {
    return (
        <div className="blog-item">
            <div className="item-header">
        <h3 className="item-title">{props.title}</h3>
    <span className="date-post-item">{props.date}</span>
            </div>
            <div className="cl-float"></div>
            <div className="item-content">
                <img src={props.uri} alt={props.title}/>
                <p>{props.description}</p>
            </div>
            <div className="blog-button">
                <a href="www.google.com" className="link-to-more">More</a>
            </div>
        </div>
    )
}

export default BlogItem
