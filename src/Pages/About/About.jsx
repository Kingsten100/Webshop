import React from 'react'
import Footer from '../../Components/Footer/Footer'
import BannerFoot from '../../Components/BannerFoot/BannerFoot'

const About = () => {
  return (
    <>
    <div className='about-component'>
      <div className='title'>
        <p>Om oss</p>
      </div>
      <div className='part-one'>
        <div className='img-container'>
          <img src="src/Images/barn.jpg" alt="" />
        </div>
        <div className='part-text'>
          <h3>Allt började i en liten lada...</h3>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam sit quasi at accusantium qui, deleniti dolore voluptatum maiores cum nulla velit facilis nemo odit? Iusto est adipisci veniam sunt aut impedit laudantium! Labore exercitationem ipsam, tempora explicabo doloremque numquam quam sunt necessitatibus natus, blanditiis repellat harum! Perspiciatis aliquid quod corrupti?</p>
        </div>
      </div>

      <div className='part-two'>
        <div className='part-text'>
          <h3>Och nu är vi störst i sverige...</h3>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam sit quasi at accusantium qui, deleniti dolore voluptatum maiores cum nulla velit facilis nemo odit? Iusto est adipisci veniam sunt aut impedit laudantium! Labore exercitationem ipsam, tempora explicabo doloremque numquam quam sunt necessitatibus natus, blanditiis repellat harum! Perspiciatis aliquid quod corrupti?</p>
        </div>
        <div className='img-container'>
          <img src="src/Images/warehouse.jpg" alt="" />
        </div>
      </div>
    </div>
      <BannerFoot />
      <Footer/>
    </>
  )
}

export default About
 