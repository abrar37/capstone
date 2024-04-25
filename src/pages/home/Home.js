import React from 'react'
import bannerImg from '../../assets/restauranfood.jpg'

function Home() {
  return (
    <main>
      <div className='banner'>
        <div className='left'>
          <div>
            <h1>Little Lemon</h1>
            <h2>Chiago</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
          </div>
          <button>Reserve a Table</button>
        </div>

        <div className='right'>
          <img src={bannerImg} />
        </div>
      </div>
    </main>
  )
}

export default Home