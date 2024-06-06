import React from 'react'
import "../Contact/Contact.css"
import msg_icon from '../../assets/msg-icon.png'
import mail_icon from '../../assets/mail-icon.png'
import phone_icon from '../../assets/phone-icon.png'
import location_icon from '../../assets/location-icon.png'
import white_arrow from '../../assets/white-arrow.png'

export default function Contact() {
    const [result, setResult] = React.useState("");

    const onSubmit = async (event) => {
      event.preventDefault();
      setResult("Sending....");
      const formData = new FormData(event.target);
  
      formData.append("access_key", "e58ca175-cec7-4767-b6b8-4c7e947af386");
  
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });
  
      const data = await response.json();
  
      if (data.success) {
        setResult("Form Submitted Successfully");
        event.target.reset();
      } else {
        console.log("Error", data);
        setResult(data.message);
      }
    };





  return (
    <div className='contact'>
        <div className='contact-col'>
            <h3>Send us a message<img src={msg_icon} alt=''/></h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum adipisci voluptate odio tempora sapiente magnam consectetur quos molestias omnis fugiat quod libero facilis odit ducimus sed, vitae porro ullam iusto.</p>
        <ul>
            <li><img src={mail_icon} alt=''/>meeramurugesan439@gmail.com</li>
            <li><img src={phone_icon} alt=''/>+1 123-456-7890</li>
            <li><img src={location_icon} alt=''/>46 Massachuettus Ave, Cambridge<br/>MA 02139, United States</li>
        </ul>
        </div>
        <div className='contact-col'>
         <form onSubmit={onSubmit}>
            <label>Your name</label>
            <input type='text' name='name' placeholder='Enter your Name' required/>

            <label>Your Email</label>
            <input type='Email' name='name' placeholder='Enter your Email' required/>
            {/* <label>Your Phone</label>
            <input type='tel' name='phone' placeholder='Enter your Phone Number' required/> */}
            <label>Write your messages here</label>
            <textarea name='message'   rows="6" placeholder='Enter your text' required></textarea>
            <button type='submit' className='btn dark-btn'>Submit Now<img src={white_arrow} alt=''></img></button>
         </form>
         <span>{result}</span>
        </div>

    </div>
  )
}
