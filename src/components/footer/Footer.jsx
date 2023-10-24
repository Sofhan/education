import React,{useEffect} from 'react'
import './footer.css'
import {FiSend} from 'react-icons/fi'
import {GiBookmarklet} from 'react-icons/gi'
import {FaInstagramSquare} from 'react-icons/fa'
import {AiFillTwitterCircle} from 'react-icons/ai'
import {FaFacebookSquare} from 'react-icons/fa'
import {FiChevronRight} from 'react-icons/fi'
import Aos from 'aos'
import 'aos/dist/aos.css'
import video2 from '../../assests/video2.mp4'
const Footer = () => {


  useEffect(()=>{
    Aos.init({duration:2000})
  },[])
  return (
    <section className="footer">
      <div className="videoDiv">
        <video src={video2} loop autoPlay muted type="video/mp4"></video>
      </div>

<div className="secContent Container">
  <div className="contactDiv flex">
    <div data-aos="fade-up" className="text">
      <small>KEEP IN TOUCH</small>
      <h2>Empower the World</h2>
    </div>
 <div className="inputDiv flex">
  <input data-aos="fade-up" type="text" placeholder='Enter The Email' />
  <button data-aos="fade-up" className="btn flex " type='submit'>
    SEND<FiSend className="icon"/>
  </button>
 </div>
  </div>
<div className="footerCard flex">
  <div className="footerIntro flex">
  <div className="logoDiv">
      <a href="#" className='logo'>
        <h1>Behtar-Kal.<GiBookmarklet className="icon"/></h1>
      </a>
    </div>
    <div  data-aos="fade-up" className="footerParagrapgh">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis commodi adipisci, ipsam neque nulla quisquam distinctio a quae inventore exercitationem!

    </div>
  <div data-aos="fade-up" className="footerSocials">
    <FaFacebookSquare className="icon"/>
    <FaInstagramSquare className="icon"/>
    <AiFillTwitterCircle className="icon"/>
  </div>

  </div>

  <div className="footerLinks grid">
    <div data-aos="fade-up" data-aos-duration="4000" className="linkGroup">
      <span className='groupTitle'>
        Our Agency
      </span>
      <li className="footerList flex">
        <FiChevronRight className="icon"/>Home
      </li>
      <li className="footerList flex">
        <FiChevronRight className="icon"/>About Us
      </li>
      <li className="footerList flex">
        <FiChevronRight className="icon"/>Contact Us
      </li>
      <li className="footerList flex">
        <FiChevronRight className="icon"/>Appeals
      </li>

    </div>


    
  </div>


 
</div>

</div>

    </section>

  )
}

export default Footer
