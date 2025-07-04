import React, {useContext} from 'react';
import {LanguageContext} from '../languages/context/LanguageContext';
import Hero_Swift from '../assets/hero_swift.jpg'


function Hero() {
      const {textos} = useContext(LanguageContext);

  return (
    <>
    <div className='flex flex-col'>
      
    
    <div className='relative'>
      <section className='absolute flex flex-col m-4 p-2'>
      <span className='text-white'>Taylor Swift</span>
      <span className='text-white text-sm '>Pop, ElectroPop.</span>
      </section>
      <section className='absolute flex flex-col bottom-6 right-6'>
      <span className='text-white'>#1 USA.</span>
      <span className=' text-white '>Spotify.</span>
      </section>
      <img src={Hero_Swift} alt="" className=' ' />
    </div>

    {textos.greeting}

    </div>
    </>
  )
}

export default Hero

