import React, {useContext} from 'react';
import {LanguageContext} from '../languages/context/LanguageContext';
import Hero_Swift from '../assets/hero_swift.jpg'


function Hero() {
      const {textos} = useContext(LanguageContext);

  return (
    <>
    {textos.greeting}
    <div className='my-5'>
      <img src={Hero_Swift} alt="" className='' />
    </div>
    </>
  )
}

export default Hero

