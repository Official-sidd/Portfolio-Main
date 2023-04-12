import React, { useRef, useState } from 'react'
import './Contact.css'
import emailjs from '@emailjs/browser';

const Contacts = () => {
  const form = useRef();

  const [done,setDone]= useState(false)

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_t5x4bua', 'template_zy1avse', form.current, 'c9us0NAmYWe63WYLJ')
      .then((result) => {
          console.log(result.text);
          setDone(true)
          // alert('submit success')
      }, (error) => {
          console.log(error.text);
      });
  };

  return (
    <>
    
    <div className='contact-form' id='contact'>
      <div className='c-left'>
          <span>Get in touch</span>
          <span>Contact me</span>
          <div className='blur' style={{background: '#ABF1FF94',position:'relative',left:'-60%',top:'-20%'}}></div>
      </div>
      <div className='c-right'>
        <form ref={form} onSubmit={sendEmail}>
          <input type='text' name='user_name' className='user' placeholder='Name' required minLength={2}></input>
          <input type='email' name='user_email' className='user' placeholder='Email' required></input>
          <textarea  name='message' className='user' placeholder='Message' required></textarea>
          <input type='submit' value='Send' className='button f-button'></input>
          <span>{done && "Thanks for contacting me!"}</span>
        </form>
        <div className='blur c-blur' style={{background: 'var(--purple)',position:'relative',left:'10%'}}></div>
      </div>
   </div>
  </>
  )
}

export default Contacts