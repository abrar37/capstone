import './home.css'
import React from 'react'
import bannerImg from '../../assets/restaurant.jpg'
import DishCard from '../../components/dish-card/DishCard'
import TestimonialCard from '../../components/testimonial-card/TestimonialCard'
import CTAImgA from '../../assets/mario-and-adrian-a.jpg'
import CTAImgB from '../../assets/mario-and-adrian-b.jpg'
import { Link } from 'react-router-dom'

function Home() {
  return (
    <main>
      <div className='banner-sec dark-bg'>
        <div className='container'>
          <div className='banner-wrp'>
            <div className='left'>
              <div className='text'>
                <h1>Little Lemon</h1>
                <h3>Chiago</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
              </div>
              <Link to='/reservation'>
                <button>Reserve a Table</button>
              </Link>
            </div>

            <div className='right'>
              <img src={bannerImg} />
            </div>
          </div>
        </div>
      </div>

      <div className='menu-sec'>
        <div className='container'>
          <div className='top-bar'>
            <h2>Specials</h2>
            <button>Online Menu</button>
          </div>
          <div className='dish-cards'>
            <DishCard 
              imgUrl='https://source.unsplash.com/400x300/?greek,salad'
              name='Greek salad'
              price='$12.99'
              details='The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, with crunchy garlic and rosemary croutons.'
            />
            <DishCard 
              imgUrl='https://source.unsplash.com/400x300/?Bruchetta'
              name='Bruchetta'
              price='$7.99'
              details='Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil.'
            />
            <DishCard
              imgUrl='https://source.unsplash.com/400x300/?lemon,dessert' 
              name='Lemon Dessert'
              price='$5.00'
              details='This comes straight from grandma’s recipe book, every last ingredient has been sourced and is as authentic as can be imagined.'
            />
          </div>
        </div>
      </div>

      <div className='testimonials-sec dark-bg'>
        <div className='container'>
          <h2>Testimonials</h2>
          <div className='testimonial-cards'>
            <TestimonialCard 
              reviewText='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean fringilla turpis sit amet tellus malesuada bibendum. Nulla sagittis sagittis dolor vel venenatis.'
              imgUrl='https://source.unsplash.com/200x200/?profile,male'
              name='James'
            />
            <TestimonialCard 
              reviewText='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean fringilla turpis sit amet tellus malesuada bibendum. Nulla sagittis sagittis dolor vel venenatis.'
              imgUrl='https://source.unsplash.com/200x200/?profile,female'
              name='Maria'
            />
            <TestimonialCard 
              reviewText='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean fringilla turpis sit amet tellus malesuada bibendum. Nulla sagittis sagittis dolor vel venenatis.'
              imgUrl='https://source.unsplash.com/200x200/?profile,boy'
              name='William'
            />
            <TestimonialCard 
              reviewText='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean fringilla turpis sit amet tellus malesuada bibendum. Nulla sagittis sagittis dolor vel venenatis.'
              imgUrl='https://source.unsplash.com/200x200/?profile,girl'
              name='Emma'
            />
          </div>
        </div>

      </div>

      <div className='cta-sec'>
        <div className='container'>
          <div className='left'>
              <h2>Little Lemon</h2>
              <h3>Chicago</h3>
              <p>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet. Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. </p>
          </div>
          <div className='right'>
              <img className='cta-img-a' src={CTAImgA} alt=''/>
              <img className='cta-img-b' src={CTAImgB} alt=''/>
          </div>
        </div>
      </div>
    </main>
  )
}

export default Home