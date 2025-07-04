import React, {useContext} from 'react';
import {LanguageContext} from '../languages/context/LanguageContext';
import Hero_Swift from '../assets/hero_swift.jpg'

import Midnights_Album from '../assets/midnights_album.jpg'


function Hero() {
      const {textos} = useContext(LanguageContext);

  return (
    <>
    <div className='flex flex-col'>
    
    <div className='relative'>
      <section className='absolute z-1 flex flex-col ml-4 mt-6 p-2'>
        <span className='text-white/80 text-[18px]'>Taylor Swift</span>
        <span className='text-white text-[12px]'>Pop, ElectroPop</span>
      </section>
      
      <section className='absolute z-1 bottom-6 left-6'>
      <a href="/albums">Stream Now</a>
      </section>

      <section className='absolute z-1 flex flex-col bottom-6 right-6 text-end'>
        <span className='text-start text-[#42a19e] text-[15px]'>#1 USA on Spotify</span>
        <span className='text-white/60 text-[12px]'>#1 Canada Spotify</span>
        <span className='text-white/60 text-[12px]'>#2 Apple Music</span>
      </section>

      <img src={Hero_Swift} alt="" className="brightness-75" />

      
    </div>

    <section className='mt-16 text-white flex flex-col items-center'>
      <section>
      <h1>Midnights</h1>
      <span>Available Now</span>
      </section>
    <img src={Midnights_Album} alt="" className='h-52 w-fit'/>
    </section>

    </div>
    </>
  )
}

export default Hero

