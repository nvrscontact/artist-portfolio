
import React, {useContext} from 'react';
import {LanguageContext} from '../contexts/languages/context/LanguageContext';
import { Link } from 'react-router-dom';

/* '../languages/context/LanguageContext' */

function Footer() {
      const {textos} = useContext(LanguageContext);
  
  return (
    <>
    <footer className='bg-black/50 p-6 lg:mx-30 xl:mx-96 text-white/40'>

      <li className='flex gap-4 [&>*>*]:h-4 lg:[&>*>*]:h-5 '>
          <a href="https://facebook.com"><img src="/images/youtube.svg" alt="" /></a>
          <a href="https://facebook.com"><img src="/images/spotify.svg" alt="" /></a>
          <a href="https://facebook.com"><img src="/images/tik-tok.svg" alt=""/></a> 
          <a href="https://facebook.com"><img src="/images/instagram.svg" alt=""/></a>
          <a href="https://facebook.com"><img src="/images/x.svg" alt="" /></a>
      </li>
    
      <section className='flex my-6 gap-9 border-y py-6 border-white/10 inter-200'>

        <div className='flex flex-col gap-9 [&>*]:gap-2 lg:[&>*>*]:text-sm '>

          <section className='flex flex-col text-[11px] '>
            <h2 className=' text-white/70 text-[15px] mb-1'>Artist</h2>
            <Link to='/contact'>{textos.contact}</Link>
            <Link to='/store#store'>{textos.store}</Link>
            <Link to='/store#refunds'>{textos.refunds}</Link>
            <Link to='/tour'>{textos.tour}</Link>
          </section>

          <section className='flex flex-col text-[11px] '>
            <h2 className=' text-white/70 text-[15px] mb-1'>Information</h2>
            <Link to='/support#support'>{textos.support}</Link>
            <Link to='/support#accesibility'>{textos.accesibility}</Link>
          </section>

        </div>

        <div className='flex flex-col text-[11px] gap-2 lg:[&>*]:text-sm'>
          <h2 className=' text-white/70 text-[15px] mb-1'>Legal and Privacy</h2>
          <Link to='/privacy#terms' >{textos.terms}</Link>
          <Link to='/privacy#cookies'>{textos.cookie}</Link>
          <Link to='/privacy#privacy'>{textos.privacy}</Link>
          <Link to='/privacy#legal'>{textos.legal}</Link>
        </div>

      </section>

      <section className='flex flex-col inter-200 lg:[&>*]:text-[10px] '>
      <p className='text-[8px] mb-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto animi qui unde ea placeat, voluptatum amet recusandae voluptate tempore doloribus ipsam optio, minima iste repellat ratione. Culpa, provident tempora? Excepturi!</p>
      <span className='text-[8px]'>{textos.accesibility_problems}</span>
      <span className='text-[8px] mt-4'>© 2025 Taylor Swift, LLC. <br />{textos.rights_reserved}</span>  
      </section>

    </footer>

    </>
  )
}

export default Footer