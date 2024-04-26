import './testimonial-card.css'
import React from 'react'

function TestimonialCard({
  reviewText="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean fringilla turpis sit amet tellus malesuada bibendum. Nulla sagittis sagittis dolor vel venenatis.",
  imgUrl="https://source.unsplash.com/200x200/?profile",
  name="Jack"

}) {
  return (
    <div className='testimonial-card'>
        <div className='rating-start'>⭐️⭐️⭐️⭐️⭐️</div>
        <p className='review-text'>{reviewText}</p>
        <div className='profile'>
            <img className='profile-img' src={imgUrl} alt=''/>
            <p className='profile-name'>{name}</p>
        </div>
    </div>
  )
}

export default TestimonialCard