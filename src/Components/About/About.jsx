import React from 'react'
import '../About/About.css'
import about_img from '../../assets/about.png'
import play_icon from '../../assets/play-icon.png'


function About({setPlayState}){
  return (
    <div className='about'>
      <div className="about-left">
       <img src={about_img} alt="" className='about-img'/>
       <img src={play_icon} alt="" className='play-icon' onClick={() => {
        setPlayState(true)
       }}/>
      </div>

      <div className="about-right">
         <h3>About University</h3>
         <h2>Nurturing Tommorow's leader's Today</h2>
         <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Architecto ullam hic, odio quisquam recusandae fugiat inventore! In, at veritatis labore eos est eligendi eveniet nisi, iusto commodi laudantium, culpa quo.</p>
         <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt, rem fugit. Recusandae laboriosam quaerat blanditiis. Ad, nam? Error deleniti rerum nisi voluptates quam! Dolor sed aliquid ducimus, exercitationem ab earum.</p>
         <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quidem aperiam pariatur ea dolorum a excepturi consequatur repudiandae dicta fugit. Magni repellendus explicabo beatae distinctio voluptates doloribus nulla ea maxime qui!</p>

        </div>
    </div>
  )
}

export default About