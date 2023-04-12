import React, { useRef, useState } from 'react'
import './Contact.css'
import emailjs from '@emailjs/browser';

const Contacts = () => {
 
  const form = useRef();

  const [done,setDone]= useState(false)
  const [formSubmitted, setFormSubmitted] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_t5x4bua', 'template_zy1avse', form.current, 'c9us0NAmYWe63WYLJ')
      .then((result) => {
          console.log(result.text);
          setDone(true)
          setFormSubmitted(true);
          // alert('submit success')
      }, (error) => {
          console.log(error.text);
      });
  };


  return (
    <>
    
    <div className='contact-form' id='contact'>
      <div className='c-left'>
          <div>Get in touch</div>
          <div>Contact me</div>
          
      </div>
      <div className='c-right'>
        <form ref={form} onSubmit={sendEmail}>
          <span style={{
            color:'#3baea0'
          }}>{done && "Thanks for contacting me!"}</span>
          <input type='text' name='user_name' className='user' placeholder='Name' required minLength={2} disabled={formSubmitted}></input>
          <input type='email' name='user_email' className='user' placeholder='Email' required disabled={formSubmitted}></input>
          <textarea  name='message' className='user'  placeholder='Message' required disabled={formSubmitted}></textarea>
          <input type='submit' value='Send' className='button f-button'></input>
        </form>
        <div className='blur c-blur' style={{background: 'var(--purple)',position:'absolute',left:'-160%',top:'10%'}}></div>
      </div>
   </div>
  </>
  )
}

export default Contacts