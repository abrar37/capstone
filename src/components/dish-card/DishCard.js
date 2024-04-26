import './dish-card.css'
import React from 'react'
import dishImg from '../../assets/lemon-dessert.jpg'
import { Link } from 'react-router-dom'
import { BykIcon } from '../svg'

function DishCard({
    imgUrl=dishImg,
    name="Greek salad", 
    price="$12.99", 
    details="The famous dish"
}) {
  return (
    <div className='dish-card'>
        <img src={imgUrl} alt='' />
        <div className='dish-desc'>
            <div className='dish-title'>
                <p className='dish-name'>{name}</p>
                <span className='dish-price'>{price}</span>
            </div>
            
            <p className='dish-details'>{details}</p>
            
            <Link className='order-btn'>
                <p>Order a delivery</p>
                <BykIcon />
            </Link>

        </div>
    </div>
  )
}

export default DishCard