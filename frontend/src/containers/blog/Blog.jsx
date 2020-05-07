import React from 'react'
import './blog.css'
import BlogCards from '../../components/blogCards/BlogCards'
const Blog = () => {
    return (
        <div className="blog-container">
           <BlogCards/>
            <div className="side-trending">
                <h4>
                    Popular Articles
                </h4>
                <hr></hr>
                    <div className="title-popular">
                        <span className="number-popular">
                            1
                        </span>
                        <p>The Ultimate Guide to C# Interview Questions</p>
                    </div>
                    <div className="title-popular">
                        <span className="number-popular">
                            2
                        </span>
                        <p>The Ultimate Guide to C# Interview Questions</p>
                    </div>
                    <div className="title-popular">
                        <span className="number-popular">
                            3
                        </span>
                        <p>What is JavaScript Used For? Here is Everything You Need To Know</p>
                    </div>
                    <div className="title-popular">
                        <span className="number-popular">
                            4
                        </span>
                        <p>The Ultimate Guide to C# Interview Questions</p>
                    </div>
                    <div className="title-popular">
                        <span className="number-popular">
                            5
                        </span>
                        <p>Prepare For The Death & Rebirth of Hollywood</p>
                    </div>
            </div>
        </div>
    )
}

export default Blog

