import React from 'react'
import '../Hero/Hero.css'
import dark_arrow from '../../assets/dark-arrow.png' 

export const Hero = () => {
  return (
   <div className='hero container'>
     <div className='hero-text'>
        <h1>We Ensure better Education for better World</h1>
        <p>Our cutting-edge curriculum is desinged to empower students with the knowledge, skills, and experiences needed to excel in the dynamic field of Education </p>
     <button className='btn'>Explore More <img src={dark_arrow} alt=""/></button>
     </div>
   </div>
  )
}
