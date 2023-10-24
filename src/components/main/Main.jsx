import React,{useEffect} from 'react'
import './main.css'
import {MdOutlineReadMore} from 'react-icons/md'
import img from '../../assests/9.jpg'
import img2 from '../../assests/23.jpg'
import img3 from '../../assests/sponsor.jpg'
import img4 from '../../assests/volunteer.jpg'
import Aos from 'aos'
import 'aos/dist/aos.css'

const Data=[
  {
    id:1,
    imgSrc:img,
    total:"1200",
    title:"life",
    description:"Lorem ipsum dolor sit amet,ficia deserunt mollit anim id est laborum.Loan Portfolio (PKR)"
  },
  {
    id:2,
    imgSrc:img2,
    title:"loan",
    total:"1200",
    description:"Lorem ipsum dolor sit amet,ficia deserunt mollit anim id est laborum.Loan Portfolio (PKR)"
   
  },
  {
    id:3,
    imgSrc:img3,
    title:"orphan Sponsored",
    total:"150",
    description:" Lorem ipsum dolor sit amet,ficia deserunt mollit anim id est laborum.Loan Portfolio (PKR"
  },
  {
    id:4,
    imgSrc:img4,
    title:"volunteer",
    total:"150",
    description:"Lorem ipsum dolor sit amet,ficia deserunt mollit anim id est laborum.Loan Portfolio (PKR)."
  },
  {
    id:1,
    imgSrc:img,
    total:"1200",
    title:"life",
    description:"Lorem ipsum dolor sit amet,ficia deserunt mollit anim id est laborum.Loan Portfolio (PKR)"
  },
  {
    id:2,
    imgSrc:img2,
    title:"loan",
    total:"1200",
    description:"Lorem ipsum dolor sit amet,ficia deserunt mollit anim id est laborum.Loan Portfolio (PKR))"
   
  },
  {
    id:3,
    imgSrc:img3,
    title:"orphan Sponsored",
    total:"150",
    description:" Lorem ipsum dolor sit amet,ficia deserunt mollit anim id est laborum.Loan Portfolio (PKR)"
  },
  {
    id:4,
    imgSrc:img4,
    title:"volunteer",
    total:"150",
    description:"Lorem ipsum dolor sit amet,ficia deserunt mollit anim id est laborum.Loan Portfolio (PKR)."
  },
  {
    id:1,
    imgSrc:img,
    total:"1200",
    title:"life",
    description:"Lorem ipsum dolor sit amet,ficia deserunt mollit anim id est laborum.Loan Portfolio (PKR)"
  },
  {
    id:2,
    imgSrc:img2,
    title:"loan",
    total:"1200",
    description:"Lorem ipsum dolor sit amet,ficia deserunt mollit anim id est laborum.Loan Portfolio (PKR)"
   
  },
  {
    id:3,
    imgSrc:img3,
    title:"orphan Sponsored",
    total:"150",
    description:" LLorem ipsum dolor sit amet,ficia deserunt mollit anim id est laborum.Loan Portfolio (PKR)"
  },
  {
    id:4,
    imgSrc:img4,
    title:"volunteer",
    total:"150",
    description:"Lorem ipsum dolor sit amet,ficia deserunt mollit anim id est laborum.Loan Portfolio (PKR))"
  },
  

]


const Main = () => {

  useEffect(()=>{
    Aos.init({duration:2000})
  },[])

  return (
   <section className="main container section">
    <div className="secTitle">
      <h3 data-aos="fade-right" data-aos-duration="4000"className="title">
        Behter Kal report 2022
      </h3>
    </div>

    <div className="secContent grid">
{
  Data.map(({id,imgSrc,title,total,description})=>{
    return(
      <div data-aos="fade-up"  key={id} className="singleData"> 

      <div className="imageDiv">
        <img src={imgSrc} alt={title}/>
      </div>

      <div className="cardInfo">
        <h4 className="title">{title}</h4>
      </div>

      <div className="desc">
        <p>{description}</p>
      </div>

      <button className="btn flex">
        Read more<MdOutlineReadMore className="icon"/>
      </button>
      </div>
    )
  })
}


  </div>
   </section>
  )
}

export default Main
