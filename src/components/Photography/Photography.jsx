import React from 'react'
import './Photography.css'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

const Photography = () => {
  return (
    <div className='photography' id='photography'>
      
      <div className='ph-align'>
        <span>Some </span>
        <span>Clicks</span>
      </div>
        <span>A hobby photographer who takes out his phone whenever <br/>theres something worth capturing behind the lens</span>
        <a className='style' href='https://unsplash.com/@i_enigma' target='_blank'>
        <button className='button ph-button'>View Unsplash</button>
        </a>

      
        
        <Swiper
            spaceBetween={130}
            slidesPerView={6}
            grabCursor={true}
            className='photography-slider'
        >
         <SwiperSlide><img src='https://images.unsplash.com/photo-1672834607326-0afb09b78733?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=435&q=80' alt=''/></SwiperSlide>
         <SwiperSlide><img src='https://images.unsplash.com/photo-1676623224777-0729f0f51cab?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1035&q=80' alt=''/></SwiperSlide>
         <SwiperSlide><img src='https://images.unsplash.com/photo-1672834797496-6200732ff3df?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=435&q=80' alt=''/></SwiperSlide>
         <SwiperSlide className='swiper-slide'><img src='https://images.unsplash.com/photo-1677660471790-892edb716a4e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1035&q=80' alt=''/></SwiperSlide>
         <SwiperSlide><img src='https://images.unsplash.com/photo-1657341460519-9f1f2f0c73b7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=436&q=80' alt=''/></SwiperSlide>
         <SwiperSlide><img src='https://images.unsplash.com/photo-1673495091421-1e61872fd21a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1035&q=80' alt=''/></SwiperSlide>
         <SwiperSlide><img src='https://images.unsplash.com/photo-1645454516446-3d1f16fe95e5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=436&q=80' alt=''/></SwiperSlide>
         <SwiperSlide><img src='https://images.unsplash.com/photo-1673340634075-f9a5fde9cf1a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1035&q=80' alt=''/></SwiperSlide>
         <SwiperSlide><img src='https://images.unsplash.com/photo-1672834797550-98040ad264c3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=435&q=80' alt=''/></SwiperSlide>
        </Swiper>
    </div>
  )
}

export default Photography