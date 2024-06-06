import './App.css'
import Navbar from './Components/Navbar/Navbar'
import { Hero } from './Components/Hero/Hero'
import Programs from './Components/Programs/Programs'
import Title from './Components/Title/Title'
import About from './Components/About/About'
import Campus from './Components/Campus/Campus'
import Testimonial from './Components/Testimonial/Testimonial'
import Contact from './Components/Contact/Contact'
import Footer from './Components/Footer/Footer'
import Videoplayer from './Components/Videoplayer/Videoplayer'
import { useState } from 'react'

function App() {
const [playState, setPlayState] = useState(false)

  return (
    <>
     <Navbar/>

     <Hero/>
     {/* <Programs/> */}
     <div className='container'>
      <Title subTitle='OUR PROGRAM' title="What we Offer"/>
      <Programs/>
      <About setplayState={setPlayState}/>
      <Title subTitle='Gallery' title='Campus Photos'/>
      <Campus/>
      <Title subTitle='TESTIMONIALS' title='What students says'/>
      <Testimonial/>
      <Title subTitle='Contact Us' title='Get in Touch'/>
      <Contact/>
      <Footer/>
     </div>
     <Videoplayer playState={playState} setPlayState={setPlayState}/>
    </>
  )
}

export default App
