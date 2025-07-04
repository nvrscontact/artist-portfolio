import React, {useContext} from 'react';
import {LanguageContext} from '../languages/context/LanguageContext';
import Hero_Swift from '../assets/hero_swift.jpg'


function Hero() {
      const {textos} = useContext(LanguageContext);

  return (
    <>
    <div className='flex flex-col'>
      
    {textos.greeting}
    
    <div className='my-5 relative'>
      <span className='absolute'>Taylor Swift</span>
      <img src={Hero_Swift} alt="" className=' ' />
    </div>


    </div>
    </>
  )
}

export default Hero

