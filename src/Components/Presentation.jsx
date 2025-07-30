import React, {useContext} from 'react';
import {Link} from 'react-router-dom'

import {LanguageContext} from '../contexts/languages/context/LanguageContext';

import Hero_Swift from '../assets/hero_swift.jpg'
import midnightsAlbum from '../assets/midnightsAlbum.jpg'
import LinkImg from '../assets/arrow_link.svg'



function Hero() {
      const {textos} = useContext(LanguageContext);

  return (
    <>
    <div className='flex flex-col w-full'>
    
          
      {/* Presentation */}
      <section className='relative lg:mx-30 lg:px-6 xl:mx-96'>
        <div className='absolute z-1 flex flex-col ml-4 mt-6 p-2'>
          <span className='text-white/80 text-[20px] lg:text-3xl inter-100 '>Taylor Alisson Swift</span>
          <span className='text-white/60 text-[12px] lg:text-sm inter-200'>ElectroPop, Country, Pop</span>
        </div>
        
        <div className='absolute z-1 bottom-6 left-6 flex flex-col lg:left-16 lg:bottom-8 '>
          
          <section className='flex items-center gap-1 bg-[#5050508c] py-2 pl-3 pr-[6px] w-fit '>
            <span className='text-white/70 text-[12px] lg:text-sm inter-200'> <Link to="/albums">{textos.stream}</Link></span>
            <img src={LinkImg} alt="" className='h-[10px]'  />
          </section>
          <span className='text-white/40 text-[9px] lg:text-[10px] pl-1 pt-[3px]'>{textos.stream_description}</span>

        </div>

         <section className='absolute z-1 flex flex-col bottom-6 right-6 text-end lg:bottom-8 lg:right-16'>
          <span className='text-start text-white/70 text-[14px] lg:text-[18px] inter-200'>#1 USA on Spotify</span>
          <span className='text-white/70 text-[12px] lg:text-[16px] inter-100'>#1 Canada Spotify</span>
          <span className='text-white/70 text-[12px] lg:text-[14px] inter-100'>#2 Apple Music</span>
        </section> 
        <img src={Hero_Swift} alt="" className="brightness-60  " />

      </section>

       {/* Slider */}
       <aside className="lg:mx-30 xl:mx-96 ">
        <div className='relative overflow-hidden w-full'>

        <div className="flex w-max carousel-track bg-black/60">
          
          <div className="shrink-0 space-x-10 p-2 px-4 text-[12px] text-white/80 inter-200 flex lg:text-sm ">
                  <div><span className='text-[#7274f7]'>Midnights</span> {textos.album_available}! </div>
            <div>{textos.runs_out}</div>
            <div className=''>Buy your tickets <span className='text-[#5f8eb9] mx-2'>#Tour2025</span> before June</div>
            <div>10% discount in album store</div>
          </div>
        
          <div className="shrink-0 space-x-10 p-2 px-4 text-[12px]  text-white/80 inter-200 flex lg:text-sm">
            <div><span className='text-[#7274f7]'>Midnights</span> {textos.album_available}! </div>
            <div>{textos.runs_out}</div>
            <div className=''>Buy your tickets <span className='text-[#5f8eb9] mx-2'>#Tour2025</span> before June</div>
            <div>10% discount in album store</div>
          </div>

         <div className="shrink-0 space-x-10 p-2 px-4 text-[12px]  text-white/80 inter-200 hidden lg:flex lg:text-sm">
         <div><span className='text-[#7274f7]'>Midnights</span> {textos.album_available}! </div>
            <div>{textos.runs_out}</div>
            <div className=''>Buy your tickets <span className='text-[#5f8eb9] mx-2'>#Tour2025</span> before June</div>
            <div>10% discount in album store</div>
          </div>

         <div className="shrink-0 space-x-10 p-2 px-4 text-[12px]  text-white/80 inter-200 hidden lg:flex lg:text-sm">
               <div><span className='text-[#7274f7]'>Midnights</span> {textos.album_available}! </div>
            <div>{textos.runs_out}</div>
            <div className=''>Buy your tickets <span className='text-[#5f8eb9] mx-2'>#Tour2025</span> before June</div>
            <div>10% discount in album store</div>
          </div>

        </div>
        </div>
       </aside> 

       {/* New Album */}
      <article className='my-16 text-white flex flex-col items-center mx-auto max-w-52'>
       
        <div className='flex flex-col items-center mb-2 space-y-1'>
          <section className='text-center space-y-[-8px]  '>
            <h1 className='flex text-white/80'><span className='text-[24px] inter-100 ml-1'>Midnights</span><span className='text-[12px] inter-100'>®</span></h1>
            <span className='inter-200 text-[12px] text-white/40'>New Album</span>
          </section>
          </div>

        <img src={midnightsAlbum} alt="" className='h-52 w-52'/>
        <span className='text-white/70 text-[10px] w-52 text-center inter-200 bg-black/60 py-[6px] mb-2'>February 2013 </span>
        
        <div className='flex flex-col items-center text-[12px] '>  
           <p className='mt-1 mb-4 text-[10px] text-white/50 text-center inter-200'>{textos.new_album_description} </p>
          <section className='flex gap-1'> 
              <button className='flex items-center'>
                <span className='bg-white/70 py-[10px] px-4 flex flex-1 text-[12px] text-black/80 lg:text-sm inter-500'> <Link to="/store">Tour</Link></span>
               </button>
              <button className='flex items-center'>
                <span className='bg-white/70 flex justify-center items-center px-4 h-full w-full text-[12px] text-black/80 lg:text-sm inter-500'> <Link to="/store">Buy Album</Link></span>
                <span className='bg-white/50 flex items-center px-2 h-full'>
                 <img src={LinkImg} alt="" className='h-6' />
                </span>
               </button>
          </section>
        </div>

      </article>



    </div>
    </>
  )
}

export default Hero

{/*           <span className='text-[12px]  inter-200 text-white/60'>13 songs • 44 minutes • somehow</span>
 */}