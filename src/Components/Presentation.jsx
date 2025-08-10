import React, {useContext} from 'react';
import {Link} from 'react-router-dom'

import {LanguageContext} from '../contexts/languages/context/LanguageContext';

import Hero_Swift from '../assets/hero_swift.jpg'
import midnightsAlbum from '../assets/midnightsAlbum.jpg'
import LinkImg from '../assets/arrow_link.svg'
import songWhite from '../assets/songWhite.svg'
import ShirtMerchandising from '../assets/ShirtMerchandising.png'



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
          
          <button className='flex items-center gap-1 bg-[#5050508c] rounded-md py-2 pl-3 pr-[6px] w-fit '>
            <span className='text-white/70 text-[12px] lg:text-sm inter-200'> <Link to="/albums">{textos.stream}</Link></span>
            <img src={LinkImg} alt="" className='h-[10px]'  />
          </button>
          <span className='text-white/40 text-[9px] lg:text-[10px] pl-1 pt-[3px]'>{textos.stream_description}</span>

        </div>

         <section className='absolute z-1 flex flex-col bottom-6 right-6 text-end lg:bottom-8 lg:right-16'>
          <span className='text-start text-white/70 text-[14px] lg:text-[18px] inter-200'>#1 USA on Spotify</span>
          <span className='text-white/70 text-[12px] lg:text-[16px] inter-100'>#1 Canada Spotify</span>
          <span className='text-white/70 text-[12px] lg:text-[14px] inter-100'>#2 Apple Music</span>
        </section> 
        <img src={Hero_Swift} alt="" className="brightness-80 h-[18rem] object-cover " />

      </section>

       {/* Slider */}
       <aside className="lg:mx-30 xl:mx-96 ">
        <section className='relative overflow-hidden w-full'>
          <div className="flex w-max carousel-track bg-black/60">
          
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

          </div>
        </section>
       </aside> 

       {/* New Album */}
      <article className='mt-30 mb-40 text-white flex flex-col items-center mx-auto'>
       
        <div className='mb-2 space-y-1'>
          <section className='text-center space-y-[-8px]  '>
            <h1 className='flex text-white/80'><span className='text-[24px] inter-100 ml-1'>Midnights</span><span className='text-[11px] inter-100'>®</span></h1>
            <span className='inter-200 text-[12px] text-white/40'>New Album</span>
          </section>
        </div>
        
          <img src={midnightsAlbum} alt="" className='h-52 w-52'/>
          <span className='text-white/60 text-[9px] w-52 text-center inter-200 bg-black/60 py-[6px] '><span>44 minutes • Pop • 13 Songs </span> </span>
        
        <div className='flex flex-col items-center text-[10px] inter-200 text-white/60'>
           <p className=' text-[10px] text-center max-w-56 mt-3 mb-4'>{textos.new_album_description} </p>
               
        </div>

        <section className='border border-white/40 rounded-xl'>
          <button className='bg-white/10 my-[2px] mx-[2px] rounded-[8px]  py-2 px-7 inter-200 text-[14px] text-white/70'>Buy Album</button>
        </section>

      </article>




      {/* Merchandising */}
      <article className='mx-auto flex flex-col items-center text-white/70 inter-200 text-center mb-40'>
      <h1 className='text-2xl'>New Merchandising</h1>
      <span className='text-[12px] text-white/50 mb-4 mx-12 '>T-shirt Sport - Running</span>
      <img src={ShirtMerchandising} alt="" className='h-80' />
      <span className='text-[12px] -mt-3 mb-2 text-white/50'>Editor's Collection</span>
      <p className='text-[12px] text-white/50 mb-4 mx-12 '>Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi voluptatum beatae maxime distinctio rerum ullam natus molestias dolorum eaque modi!</p>
          <section className='space-x-2'>
            <button className='bg-white/10 my-[2px] rounded-[8px]  py-2 px-7 inter-200 text-[14px] text-white/70'>More Info</button>
            <button className='bg-white/30 my-[2px] rounded-[8px]  py-2 px-7 inter-200 text-[14px] text-white/70 inter-300'>Find Out</button>
          </section>
      </article>

      {/* Newsletter */}
      <article className='mx-5 flex flex-col items-end text-white/70 inter-200 text-center mb-40'>
      <h1 className='text-2xl mx-auto'>Subscribe to our Newsletter</h1>
      <p className='text-[12px] text-white/50 mt-4 mb-6 mx-2 flex flex-col gap-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi voluptatum beatae maxime distinctio rerum ullam natus molestias dolorum eaque modi! <span>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi, vero and all that what you think is very nice of you part to say that to me, i'm so happy.</span> </p>
      <button className='bg-white/10 mr-8 rounded-[8px] py-2 px-7 inter-200 text-[14px] text-white/70 flex w-fit'>Subscribe</button>
      </article>



    </div>
    </>
  )
}

export default Hero