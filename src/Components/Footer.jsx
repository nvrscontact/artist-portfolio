
import React, {useContext} from 'react';
import {LanguageContext} from '../languages/context/LanguageContext';

function Footer() {
      const {textos} = useContext(LanguageContext);
  
  return (
    <>
    <div className=' text-white/60 p-6 mt-20'>

      <li className='flex gap-4 [&>*>*]:h-4 '>
          <a href="https://facebook.com"><img src="/images/youtube.svg" alt="" /></a>
          <a href="https://facebook.com"><img src="/images/spotify.svg" alt="" /></a>
          <a href="https://facebook.com"><img src="/images/tik-tok.svg" alt=""/></a> 
          <a href="https://facebook.com"><img src="/images/instagram.svg" alt=""/></a>
          <a href="https://facebook.com"><img src="/images/x.svg" alt="" /></a>
      </li>
    
      <section className='flex my-6 gap-7 border-y py-6 border-white/10'>

        <div className='flex flex-col gap-6 [&>*>*]:text-[11px] [&>*]:gap-2 '>

          <section className='flex flex-col'>
            <span className='text-sm'> {textos.greeting} </span>
            <span className='text-sm'>Terms of Use</span>
            <span className='text-sm'>Legal</span>
          </section>

          <section className='flex flex-col'>
            <span className='text-sm'>Store</span>
            <span className='text-sm'>Tours</span>
            <span className='text-sm'>Privacy</span>
          </section>

        </div>

        <div className='flex flex-col [&>*]:text-[11px] gap-2'>
          <span className='text-sm'>Privacy</span>
          <span className='text-sm'>Cookies</span>
          <span className='text-sm'>Privacy</span>
        </div>

      </section>

      <section className='flex flex-col'>
      <p className='text-[8px]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto animi qui unde ea placeat, voluptatum amet recusandae voluptate tempore doloribus ipsam optio, minima iste repellat ratione. Culpa, provident tempora? Excepturi!</p>
      <span className='text-[8px]'>If you have accessibility or payment issues, contact us as soon as possible!</span>
      <span className='text-[8px] mt-4'>© 2025 Taylor Swift, LLC. <br />All Rights Reserved</span>  
      </section>

    </div>

    </>
  )
}

export default Footer