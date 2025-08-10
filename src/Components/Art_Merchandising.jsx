import React from 'react'
import ShirtMerchandising from '../assets/ShirtMerchandising.png'
import {Link} from 'react-router-dom'

function Art_Merchandising() {
  return (
      <article className='flex flex-col items-center mx-auto mb-40 w-80 text-white/50 inter-200 text-center'>
          <h1 className='text-2xl text-white/70'>New Merchandising</h1>
          <span className='text-[12px] mb-4 mx-12 '>T-shirt Sport - Running</span>
          <img src={ShirtMerchandising} alt="" className='h-80' />
          <span className='text-[12px] -mt-3 mb-2'>Editor's Collection</span>
          <p className='text-[12px] mb-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi voluptatum beatae maxime distinctio rerum ullam natus molestias dolorum eaque modi!</p>
          <section className='space-x-2'>
            <button className='bg-white/10 btn'><Link to={'/store'}>More Info</Link></button>
            <button className='bg-white/30 btn'><Link to={'/store'}>Find Out</Link></button>
          </section>
      </article>
  )
}

export default Art_Merchandising
