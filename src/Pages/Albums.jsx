import React from 'react';
import {Link} from 'react-router-dom';

import Style_Album from '../assets/style_album.jpg';
import Red_Album from '../assets/red_album.jpg';

function Albums() {

  return (
    <>

    <div className='w-full flex justify-center my-8 gap-10 text-white '>
        
        <section className='flex flex-col items-center'>
            <h2 className='text-sm'>Style</h2>
            <p className='text-[10px] mb-1 text-white/40 '>2013</p>
            <span className='hover:bg-black'><Link to='/hear'><img src={Style_Album} alt="" className='h-24' /></Link></span>
        </section>
        <section className='flex flex-col items-center'>
            <h2 className='text-sm'>Red</h2>
            <p className='text-[10px] mb-1 text-white/40 '>2013</p>
            <span className='hover:bg-black'><Link to='/hear'><img src={Red_Album} alt="" className='h-24' /></Link></span>
        </section>
        <section className='flex flex-col items-center'>
            <h2 className='text-sm'>Style</h2>
            <p className='text-[10px] mb-1 text-white/40 '>2013</p>
            <span className='hover:bg-black'><Link to='/hear'><img src={Style_Album} alt="" className='h-24' /></Link></span>
        </section>

        
    </div>  
    </>
    )
}

export default Albums