import React, {useContext} from 'react';
import {LanguageContext} from '../languages/context/LanguageContext';
import Hero_Swift from '../assets/hero_swift.jpg'
import {Link} from 'react-router-dom'

import Midnights_Album from '../assets/midnights_album.jpg'
import LinkImg from '../assets/arrow_link.svg'


function Hero() {
      const {textos} = useContext(LanguageContext);

  return (
    <>
    <div className='flex flex-col'>
    
    <div className='relative'>
      <section className='absolute z-1 flex flex-col ml-4 mt-6 p-2'>
        <span className='text-white/80 text-[18px]'>Taylor Swift</span>
        <span className='text-black/70 text-[12px] font-bold'>Pop, ElectroPop</span>
      </section>
      
      <section className='absolute flex items-center gap-1  z-1 bottom-6 left-6 bg-black/50 py-2 px-3 rounded-md'>
      <span className='text-white/70 text-sm'> <Link to="/albums">Stream</Link></span>
      <img src={LinkImg} alt="" className='h-3' />
      </section>

      <section className='absolute z-1 flex flex-col bottom-6 right-6 text-end'>
        <span className='text-start text-white/90 text-[15px]'>#1 USA on Spotify</span>
        <span className='text-white/70 text-[12px]'>#1 Canada Spotify</span>
        <span className='text-white/50 text-[12px]'>#2 Apple Music</span>
      </section>

      <img src={Hero_Swift} alt="" className="brightness-75" />
    </div>

  <div class="overflow-hidden w-[100vw] ">
    <div class="flex carousel-track">
      
      <div class="flex shrink-0 space-x-4 px-4">
        <div class="w-[70vw] sm:w-[40vw] md:w-[25vw] bg-white text-black rounded-lg shadow p-4 text-center">Card 1</div>
        <div class="w-[70vw] sm:w-[40vw] md:w-[25vw] bg-white text-black rounded-lg shadow p-4 text-center">Card 2</div>
        <div class="w-[70vw] sm:w-[40vw] md:w-[25vw] bg-white text-black rounded-lg shadow p-4 text-center">Card 3</div>
        <div class="w-[100vw] sm:w-[40vw] md:w-[25vw] bg-white text-black rounded-lg shadow p-4 text-center">Card 4</div>
      </div>
      <div class="flex shrink-0 space-x-4 px-4">
        <div class="w-[70vw] sm:w-[40vw] md:w-[25vw] bg-white text-black rounded-lg shadow p-4 text-center">Card 1</div>
        <div class="w-[70vw] sm:w-[40vw] md:w-[25vw] bg-white text-black rounded-lg shadow p-4 text-center">Card 2</div>
        <div class="w-[70vw] sm:w-[40vw] md:w-[25vw] bg-white text-black rounded-lg shadow p-4 text-center">Card 3</div>
        <div class="w-[70vw] sm:w-[40vw] md:w-[25vw] bg-white text-black rounded-lg shadow p-4 text-center">Card 4</div>
      </div>
      
    </div>
  </div>


    <section className='mt-16 text-white flex flex-col items-center'>
      <div className='flex flex-col items-center mb-2'>
        <h1 className='text-[20px] bg-gradient-to-r from-purple-300 to-cyan-500 bg-clip-text text-transparent'>Midnights</h1>
        <span className='bg-black/40 py-1 px-2 rounded-md text-[11px]'>New Album</span>
      </div>
      <div className='flex gap-5 text-[12px] mb-2'>
        <span className='text-white/40'>Available Now</span>·
        <span className='text-white/40'>3 Feb, 2025</span>
      </div>
      <img src={Midnights_Album} alt="" className='h-52 w-52 mb-1 border-t py-1 border-white/30'/>
      <div className='flex items-center gap-1 text-[12px] '>
        <span className='bg-white/10 border-[3px] border-black/70 py-[6px] px-3 text-[12px] '>Merch</span>
        <span className='bg-white/10 border-[3px] border-black/70 py-[6px] px-2 text-[12px] flex items-center gap-1'>Buy Album<img src={LinkImg} alt="" className='h-2' /></span>
        <span className='bg-white/10 border-[3px] border-black/70 py-[6px] px-3 text-[12px] '>Tour</span>
      </div>
    </section>

    </div>
    </>
  )
}

export default Hero

