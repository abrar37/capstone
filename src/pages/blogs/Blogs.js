import React from "react";
import bannerImg from '../../assets/restaurant.jpg'
import CTAImgA from '../../assets/mario-and-adrian-a.jpg'
import CTAImgB from '../../assets/mario-and-adrian-b.jpg'
import { Link } from 'react-router-dom'

function Blogs() {
  return (
    <main>
      <div className="banner-sec dark-bg">
        <div className="container">
          <div className="banner-wrp">
            <div className="left">
              <div className="text">
                <h1>Blogs</h1>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
              </div>
              <Link to="/reservation">
                <button>Reserve a Table</button>
              </Link>
            </div>

            <div className="right">
              <img src={bannerImg} />
            </div>
          </div>
        </div>
      </div>

      <div className="cta-sec">
        <div className="container">
          <div className="left">
            <h2>Little Lemon</h2>
            <h3>Chicago</h3>
            <p>
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do
              amet sint. Velit officia consequat duis enim velit mollit.
              Exercitation veniam consequat sunt nostrud amet. Amet minim mollit
              non deserunt ullamco est sit aliqua dolor do amet sint. Velit
              officia consequat duis enim velit mollit.{" "}
            </p>
          </div>
          <div className="right">
            <img className="cta-img-a" src={CTAImgA} alt="" />
            <img className="cta-img-b" src={CTAImgB} alt="" />
          </div>
        </div>
      </div>
    </main>
  );
}

export default Blogs;
