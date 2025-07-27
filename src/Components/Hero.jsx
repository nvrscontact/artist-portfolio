import React, {useContext} from 'react';
import {LanguageContext} from '../contexts/languages/context/LanguageContext';
/* '../languages/context/LanguageContext'; */
import Hero_Swift from '../assets/hero_swift.jpg'
import {Link} from 'react-router-dom'

import midnightsAlbum from '../assets/midnightsAlbum.jpg'
import LinkImg from '../assets/arrow_link.svg'


function Hero() {
      const {textos} = useContext(LanguageContext);

  return (
    <>
    <div className='flex flex-col w-full'>
    
          
      {/* Portada */}

      <section className='relative lg:mx-30 lg:px-6 xl:mx-96'>
       <section className='absolute z-1 flex flex-col ml-4 mt-6 p-2'>
          <span className='text-white/80 text-[20px] lg:text-3xl inter-100 '>Taylor Alisson Swift</span>
          <span className='text-white/60 text-[12px] lg:text-sm inter-200'>Pop, ElectroPop, Country</span>
        </section>
        
        <section className='absolute z-1 bottom-6 left-6 flex flex-col lg:left-16 lg:bottom-8 '>
          
          <div className='flex items-center gap-1 bg-[#5050508c] rounded-md py-2 pl-3 pr-[6px] w-fit '>
            <span className='text-white/70 text-[12px] lg:text-sm inter-200'> <Link to="/albums">{textos.stream}</Link></span>
            <img src={LinkImg} alt="" className='h-[10px]'  />
          </div>
          <span className='text-white/40 text-[9px] lg:text-[10px] pl-1 pt-[3px]'>{textos.stream_description}</span>

        </section>

         <section className='absolute z-1 flex flex-col bottom-6 right-6 text-end lg:bottom-8 lg:right-16'>
          <span className='text-start text-white/70 text-[14px] lg:text-[18px] inter-200'>#1 USA on Spotify</span>
          <span className='text-white/70 text-[12px] lg:text-[16px] inter-100'>#1 Canada Spotify</span>
          <span className='text-white/70 text-[12px] lg:text-[14px] inter-100'>#2 Apple Music</span>
        </section> 
        <img src={Hero_Swift} alt="" className="brightness-60  " />

      </section>

       {/* Slider */}


       <section className="lg:mx-30 xl:mx-96 ">
        <div className='relative overflow-hidden w-full'>

        <div className="flex w-max carousel-track bg-black/60">
          
          <div className="shrink-0 space-x-10 p-2 px-4 text-[12px] text-white/80 inter-200 flex lg:text-sm ">
            <div>#Tour2025.</div>
            <div><span className='text-[#74b9ca]'>Midnights</span> {textos.album_available}! </div>
            <div>{textos.runs_out}</div>
            <div>#Tour2026</div>
          </div>
        
          <div className="shrink-0 space-x-10 p-2 px-4 text-[12px]  text-white/80 inter-200 flex lg:text-sm">
            <div>#Tour2025.</div>
            <div><span className='text-[#74b9ca]'>Midnights</span> {textos.album_available}! </div>
            <div>{textos.runs_out}</div>
            <div>#Tour2026</div>
          </div>

         <div className="shrink-0 space-x-10 p-2 px-4 text-[12px]  text-white/80 inter-200 hidden lg:flex lg:text-sm">
            <div>#Tour2025.</div>
            <div><span className='text-[#74b9ca]'>Midnights</span> {textos.album_available}! </div>
            <div>{textos.runs_out}</div>
            <div>#Tour2026</div>
          </div>

         <div className="shrink-0 space-x-10 p-2 px-4 text-[12px]  text-white/80 inter-200 hidden lg:flex lg:text-sm">
            <div>#Tour2025.</div>
            <div><span className='text-[#74b9ca]'>Midnights</span> {textos.album_available}! </div>
            <div>{textos.runs_out}</div>
            <div>#Tour2026</div>
          </div>

        </div>
        </div>
      </section> 

       {/* midnights */}


      <section className='mt-16 text-white flex flex-col items-center'>
        <div className='flex flex-col items-center mb-2'>
          <h1 className='flex text-white/80'><span className='text-[20px] inter-100'>Midnights</span><span className='text-sm '>®</span></h1>
          <span className='bg-black/60 py-1 px-2 rounded-md text-[11px] inter-200'>{textos.new_album}</span>
        </div>
        <img src={midnightsAlbum} alt="" className='h-52 w-52 mb-1'/>
        <div className='flex flex-col items-center gap-1 text-[12px] '>
        <p className='text-[10px] my-2 text-white/60 w-52 text-center inter-200'>{textos.new_album_description} </p>
          <section className='flex gap-1 inter-200'>
          <span className='bg-white/10 py-[6px] px-3 text-[11px] rounded-md '>Merch</span>
          <span className='bg-white/10 py-[6px] px-2 text-[11px] rounded-md flex items-center gap-1'>Buy Album</span>
          <span className='bg-white/10 py-[6px] px-3 text-[11px] rounded-md'>Merch</span>
          </section>
        </div>
      </section>



    </div>
    </>
  )
}

export default Hero

