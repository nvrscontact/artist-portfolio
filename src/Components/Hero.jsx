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
    
          
      {/* Portada */}

      <div className='relative'>
        <section className='absolute z-1 flex flex-col ml-4 mt-6 p-2'>
          <span className='text-white/80 text-[18px] inter-100 '>Taylor Alisson Swift</span>
          <span className='text-white/80 text-[10px] inter-200'>Pop, ElectroPop</span>
        </section>
        
        <section className='absolute z-1 bottom-6 left-6 flex flex-col '>
          
          <div className='flex items-center gap-1 bg-white/10 rounded-md py-[6px] pl-2 pr-[6px] w-fit '>
          <span className='text-white/70 text-[12px] inter-200'> <Link to="/albums">{textos.stream}</Link></span>
          <img src={LinkImg} alt="" className='h-2' />
          </div>
          <span className='text-white/30 text-[8px] pl-[6px] pt-[3px]'>{textos.stream_description}</span>

        </section>

        <section className='absolute z-1 flex flex-col bottom-6 right-6 text-end'>
          <span className='text-start text-white/70 text-[15px] inter-200'>#1 USA on Spotify</span>
          <span className='text-white/70 text-[12px] inter-100'>#1 Canada Spotify</span>
          <span className='text-white/70 text-[12px] inter-100'>#2 Apple Music</span>
        </section>
        <img src={Hero_Swift} alt="" className="brightness-60 " />
      </div>


      <div class="overflow-hidden w-[100vw] ">
        <div class="flex carousel-track hover:[animation-play-state:paused] ">
          
          <div class="flex shrink-0 space-x-10 p-2 px-4 text-[12px] bg-black/50 text-white/80 inter-200">
            <div>#Tour2025.</div>
            <div><span className='text-[#74b9ca]'>Midnights</span> {textos.album_available}! </div>
            <div>{textos.runs_out}</div>
            <div>#Tour2026</div>
          </div>
          <div class="flex shrink-0 space-x-10 p-2 px-4 text-[12px] bg-black/50 text-white/80 inter-200">
            <div>#Tour2025.</div>
            <div>Midnights {textos.album_available}! </div>
            <div>{textos.runs_out}</div>
            <div>#Tour2026</div>
          </div>

        </div>
      </div>


      <section className='mt-16 text-white flex flex-col items-center'>
        <div className='flex flex-col items-center mb-2'>
          <h1 className='text-[20px] inter-100'>Midnights</h1>
          <span className='bg-black/60 py-1 px-2 rounded-md text-[11px] inter-200'>{textos.new_album}</span>
        </div>
        <img src={Midnights_Album} alt="" className='h-52 w-52 mb-1'/>
        <div className='flex flex-col items-center gap-1 text-[12px] '>
        <p className='text-[10px] my-2 text-white/60 w-52 text-center inter-200'>{textos.new_album_description} </p>
          <section className='flex gap-1 inter-200'>
          <span className='bg-white/10 border-[1px] border-black/70 py-[6px] px-3 text-[12px] rounded-md '>Merch</span>
          <span className='bg-white/10 border-[1px] border-black/70 py-[6px] px-2 text-[12px] rounded-md flex items-center gap-1'>Buy Album<img src={LinkImg} alt="" className='h-2' /></span>
          <span className='bg-white/10 border-[1px] border-black/70 py-[6px] px-3 text-[12px] rounded-md'>Merch</span>
          </section>
        </div>
      </section>

    </div>
    </>
  )
}

export default Hero

