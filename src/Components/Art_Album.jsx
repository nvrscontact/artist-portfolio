import React, {useContext} from 'react';
import {Link} from 'react-router-dom'

import midnightsAlbum from '../assets/midnightsAlbum.jpg'
import {LanguageContext} from '../contexts/languages/context/LanguageContext';

function Art_Album() {
  const {textos} = useContext(LanguageContext);
    
  return (
    <>
    <article className='mt-30 mb-40 flex flex-col items-center text-white/70 w-70 mx-auto'>
        <section className='text-center mb-2 -space-y-2 inter-100'>
            <h1 className='flex'><span className='text-[26px] ml-2'>Midnights</span><span className='text-[11px]'>®</span></h1>
            <span className='inter-300 text-[12px] text-white/40'>New Album</span>
        </section>

        <img src={midnightsAlbum} alt="" className='h-56'/>
        <span className='text-white/60 text-[10px] w-56 text-center inter-200 bg-black/60 py-2 '>44 minutes • Pop • 13 Songs</span>
     
        <p className='text-[11px] text-center mt-4 mb-5 inter-200'>{textos.new_album_description} </p>
        
        <section className='border border-white/40 rounded-xl'>
            <button className='bg-white/10 my-[2px] mx-[2px] rounded-[8px]  py-2 px-7 inter-200 text-[12px] text-white/70'><Link to={'/store'}>Buy Album</Link></button>
        </section>
    </article>
    </>
  )
}

export default Art_Album