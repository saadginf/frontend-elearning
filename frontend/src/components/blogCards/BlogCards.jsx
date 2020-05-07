import React from 'react'
import './bCards.css'
import imgTest from '../../assets/learn-coding.jpg'
import BItem from '../blogCardItem/BlogItem'
const BlogCards = () => {
    return (
      <div className="blog-card-container">
        <BItem
          title="Stop What You’re Doing And Learn Coding If You Want A Job In Ten Years’ Time"
          date="28 June 2017"
          uri={imgTest}
          description="Mark Zuckerberg, Steve Jobs, Elon Musk: Today’s businessrole models
           are those who havecreated technology productsthat define and shape 
           the behavior of millions - the iPhone, Facebook, Tesla, PayPal. 
           And none of them could have got where they were without coding. 
           Take Elon Musk - he wrote his first computer game aged 12 and
            successfully sold it for $500."
        />
         <BItem
          title="Stop What You’re Doing And Learn Coding If You Want A Job In Ten Years’ Time"
          date="28 June 2017"
          uri={imgTest}
          description="Mark Zuckerberg, Steve Jobs, Elon Musk: Today’s businessrole models
           are those who havecreated technology productsthat define and shape 
           the behavior of millions - the iPhone, Facebook, Tesla, PayPal. 
           And none of them could have got where they were without coding. 
           Take Elon Musk - he wrote his first computer game aged 12 and
            successfully sold it for $500."
        />
      </div>
    );
}

export default BlogCards
