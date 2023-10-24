import React,{useEffect} from 'react'
import './home.css'
import video  from '../../assests/video.mp4'
import {GrMapLocation} from 'react-icons/gr'
import {HiFilter} from 'react-icons/hi'

import {FaFacebookSquare} from 'react-icons/fa'
import {BsInstagram} from 'react-icons/bs'
import {BsGoogle} from 'react-icons/bs'
import Aos from 'aos'
import 'aos/dist/aos.css'

const Home = () => {
  useEffect(()=>{
    Aos.init({duration:2000})
  },[])
  return (
    <section className="home">
      <div className="overlay"></div>
        <video src={video} muted autoPlay loop type="video/mp4"></video>
      
      <div className="homeContent container">
        <div className="textDiv">
          <span data-aos="fade-up" className="smallText">
          Every Child Deserves a Chance to Learn and Grow!
          </span>

          <h1 data-aos="fade-up" className="homeTitle">
          Donate Now
          </h1>
        </div>

        <div  data-aos="fade-up" className="cardDiv grid">
          <div className="destinationInput">
            <label htmlFor="city">selct the city:</label>
            <div className="input flex">
              <input type="text" placeholder='Enter the City...' />
              <GrMapLocation className="icon"/>
            </div>
          </div>
          <div className="dateInput">
            <label htmlFor="date">selct your date:</label>
            <div className="input flex">
              <input type="date" placeholder='select your date...' />
  
            </div>
          </div>
          <div className="priceInput">
           <div className="label_total flex">
            <label htmlFor="price">Max price:</label>
            <h3 className="total">Pkr 10000</h3>
            </div>
              <div className="input flex">
                <input type="range" max="5000" min="500" />
              </div>
            <div className="searchOptions flex">MOre filter
<HiFilter className="icon"/>
            </div>
          </div>
        </div>
<div data-aos="fade-up" className="homeFooterIcons flex">
  <div className="rightIcons">
<FaFacebookSquare className="icon"/>
<BsInstagram className="icon"/>
<BsGoogle className="icon"/>
  </div>
  <div className="leftIcons">
    
    </div>
</div>

      </div>
    </section>
  )
}

export default Home
