import React, {useContext} from 'react';
import {Link} from 'react-router-dom'

import {LanguageContext} from '../contexts/languages/context/LanguageContext';
import presentationArtist from '../assets/presentationArtist.jpg'
import arrowLink from '../assets/arrowLink.svg'



function Hero() {
  const {textos} = useContext(LanguageContext);

  const mensajes = [
    <>
    <span><span className='text-white'>Midnights</span> {textos.album_available}! </span>
    <span>{textos.runs_out}</span>
    <span>Buy your tickets for <span className='text-white'>#Tour2025</span> before June</span>
    <span>10% discount in album store</span>
    </>
  ]

  return (
    <>
      {/* Presentation */}
      <header className='flex flex-col w-full relative xl:mx-96 '>
        <p className='absolute z-1 flex flex-col ml-4 mt-6 p-2 text-white/80 '>
          <span className='text-[20px] lg:text-3xl inter-100 '>Taylor Alisson Swift</span>
          <span className='text-[12px] lg:text-sm inter-200'>ElectroPop, Country, Pop</span>
        </p>
        
        <section className='absolute z-1 bottom-6 left-6 flex flex-col lg:left-16 lg:bottom-8 '>
          <button className='flex items-center gap-1 bg-[#555555b9] rounded-md py-2 pl-3 pr-[6px] w-fit '>
            <span className='text-white/70 text-[12px] lg:text-sm inter-200'> <Link to="/albums">{textos.stream}</Link></span>
            <img src={arrowLink} alt="" className='h-[10px]'  />
          </button>
          <p className='text-white/40 text-[9px] lg:text-[10px] pl-1 pt-[3px]'>{textos.stream_description}</p>
        </section>

         <p className='absolute z-1 flex flex-col bottom-6 right-6 text-end lg:bottom-8'>
          <span className='text-start text-white/70 text-[14px] lg:text-[18px] inter-300'>#1 USA on Spotify</span>
          <span className='secondTop inter-200'>#1 Canada Spotify</span>
          <span className='secondTop inter-200'>#2 Apple Music</span>
        </p> 
        <img src={presentationArtist} alt="" className="brightness-80 h-[17rem] md:w-fit object-cover " />
      </header>

       {/* Slider */}
       <aside className="lg:mx-30 xl:mx-96  ">
        <section className='relative overflow-hidden w-full'>
          <div className=" w-max carousel-track bg-black/60 space-x-14">
          {Array(4).fill(mensajes[0]).map((mensaje,index) => (
           <p key={index} className="shrink-0 space-x-14 py-[10px] px-4 text-[12px] text-white/70 inter-200 flex lg:text-sm ">
            {mensaje}
          </p>
          ))}
          </div>
        </section>
       </aside> 
    </>
  )
}

export default Hero



/* 

          <p className="shrink-0 space-x-10 py-[10px] px-4 text-[12px] text-white/70 inter-200 flex lg:text-sm ">
              <span><span className='text-white'>Midnights</span> {textos.album_available}! </span>
              <span>{textos.runs_out}</span>
              <span>Buy your tickets for <span className='text-white'>#Tour2025</span> before June</span>
              <span>10% discount in album store</span>
            </p>
          
            <p className="shrink-0 space-x-10 py-[10px] px-4 text-[12px] text-white/70 inter-200 flex lg:text-sm ">
              <span><span className='text-white'>Midnights</span> {textos.album_available}! </span>
              <span>{textos.runs_out}</span>
              <span>Buy your tickets for <span className='text-white'>#Tour2025</span> before June</span>
              <span>10% discount in album store</span>
            </p>

            <p className="shrink-0 space-x-10 py-[10px] px-4 text-[12px] text-white/70 inter-200 flex lg:text-sm ">
              <span><span className='text-white'>Midnights</span> {textos.album_available}! </span>
              <span>{textos.runs_out}</span>
              <span>Buy your tickets for <span className='text-white'>#Tour2025</span> before June</span>
              <span>10% discount in album store</span>
            </p>

            <p className="shrink-0 space-x-10 py-[10px] px-4 text-[12px] text-white/70 inter-200 flex lg:text-sm ">
              <span><span className='text-white'>Midnights</span> {textos.album_available}! </span>
              <span>{textos.runs_out}</span>
              <span>Buy your tickets for <span className='text-white'>#Tour2025</span> before June</span>
              <span>10% discount in album store</span>
            </p>

*/