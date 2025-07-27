
import React, {useContext} from 'react';
import {LanguageContext} from '../contexts/languages/context/LanguageContext';

/* '../languages/context/LanguageContext' */

function Footer() {
      const {textos} = useContext(LanguageContext);
  
  return (
    <>
    <div className='bg-black/50 text-white/60 p-6 lg:mx-30 xl:mx-96'>

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
            <h2 className=' text-white/70 text-[15px] '>Artist</h2>
            <span className=''>{textos.contact}</span>
            <span className=''>{textos.refunds}</span>
                        <span className=''>{textos.store}</span>
            <span className=''>{textos.legal}</span>
          </section>

          <section className='flex flex-col text-[11px]'>
            <h2 className=' text-white/70 text-[15px] '>Information</h2>
            <span className=''>{textos.legal}</span>
            <span className=''>{textos.tour}</span>
            <span className=''>{textos.accesibility}</span>
          </section>

        </div>

        <div className='flex flex-col text-[11px] gap-2 lg:[&>*]:text-sm'>
          <h2 className=' text-white/70 text-[15px] '>Legal</h2>
          <span className=''>{textos.terms}</span>
          <span className=''>{textos.cookie}</span>
          <span className=''>{textos.privacy}</span>
        </div>

      </section>

      <section className='flex flex-col inter-200 lg:[&>*]:text-[10px] '>
      <p className='text-[8px]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto animi qui unde ea placeat, voluptatum amet recusandae voluptate tempore doloribus ipsam optio, minima iste repellat ratione. Culpa, provident tempora? Excepturi!</p>
      <span className='text-[8px]'>{textos.accesibility_problems}</span>
      <span className='text-[8px] mt-4'>© 2025 Taylor Swift, LLC. <br />{textos.rights_reserved}</span>  
      </section>

    </div>

    </>
  )
}

export default Footer