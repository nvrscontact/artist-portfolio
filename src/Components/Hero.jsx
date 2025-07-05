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
        <span className='text-white/80 text-[18px] inter-100 '>Taylor Alisson Swift</span>
        <span className='text-white/80 text-[12px] inter-200'>Pop, ElectroPop</span>
      </section>
      
      <section className='absolute z-1 bottom-6 left-6 bg-black/50 rounded-xl p-1'>
        
        <div className='flex items-center gap-1 bg-white/10 rounded-md py-1 px-2'>
        <span className='text-white/70 text-sm inter-200'> <Link to="/albums">Stream</Link></span>
        <img src={LinkImg} alt="" className='h-3' />
        </div>

      </section>

      <section className='absolute z-1 flex flex-col bottom-6 right-6 text-end'>
        <span className='text-start text-white/90 text-[15px] inter-200'>#1 USA on Spotify</span>
        <span className='text-white/80 text-[12px] inter-100'>#1 Canada Spotify</span>
        <span className='text-white/80 text-[12px] inter-100'>#2 Apple Music</span>
      </section>

      <img src={Hero_Swift} alt="" className="brightness-60 " />
    </div>

  <div class="overflow-hidden w-[100vw] mt-1">
    <div class="flex carousel-track hover:[animation-play-state:paused] ">
      
      <div class="flex shrink-0 space-x-10 p-2 px-4 text-[12px] bg-black/50 text-white/80 inter-200">
        <div>#Tour2025.</div>
        <div>Midnights Available!</div>
        <div>Buy Album and Merch</div>
        <div>#Tour 2026.</div>
      </div>
      <div class="flex shrink-0 space-x-10 p-2 px-4 text-[12px] bg-black/50 text-white/80 inter-200">
        <div>Tour 2025.</div>
        <div>Midnights Available Now!</div>
        <div>Buy Album and Merch</div>
        <div>#Tour2026.</div>
      </div>

    </div>
  </div>


    <section className='mt-16 text-white flex flex-col items-center'>
      <div className='flex flex-col items-center mb-2'>
        <h1 className='text-[20px] inter-100'>Midnights</h1>
        <span className='bg-black/60 py-1 px-2 rounded-md text-[11px] inter-200'>New Album</span>
      </div>
      <img src={Midnights_Album} alt="" className='h-52 w-52 mb-1'/>
      <div className='flex flex-col items-center gap-1 text-[12px] '>
      <p className='text-[11px] my-2 text-white/60 w-60 text-center inter-200'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem at earum a eaque. Molestiae pariatur rem porro.</p>
        <section className='flex gap-1 inter-200'>
        <span className='bg-white/10 border-[2px] border-black/70 py-[6px] px-3 text-[12px] rounded-md '>Merch</span>
        <span className='bg-white/10 border-[2px] border-black/70 py-[6px] px-2 text-[12px] rounded-md flex items-center gap-1'>Buy Album<img src={LinkImg} alt="" className='h-2' /></span>
        <span className='bg-white/10 border-[2px] border-black/70 py-[6px] px-3 text-[12px] rounded-md'>Merch</span>
        </section>
      </div>
    </section>

    </div>
    </>
  )
}

export default Hero

