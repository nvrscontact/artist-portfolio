import React from 'react'

function Footer() {

  return (
    <>
    <div className='bg-black/70 p-6 text-center text-white/60'>

      <li className='flex justify-center gap-4 [&>*>*]:h-5 '>
          <a href="https://facebook.com"><img src="/images/youtube.svg" alt="" /></a>
          <a href="https://facebook.com"><img src="/images/instagram.svg" alt=""/></a>
          <a href="https://facebook.com"><img src="/images/spotify.svg" alt="" /></a>
          <a href="https://facebook.com"><img src="/images/x.svg" alt="" /></a>
          <a href="https://facebook.com"><img src="/images/tik-tok.svg" alt=""/></a> 
      </li>
    
    <section className='flex justify-between my-10'>

      <div className='flex flex-col gap-3'>
        <span className='text-sm'>Privacy</span>
        <span className='text-sm'>Cookies</span>
        <span className='text-sm'>Privacy</span>
      </div>

      <div className='flex flex-col gap-3'>
        <span className='text-sm'>Store</span>
        <span className='text-sm'>Tours</span>
        <span className='text-sm'>Privacy</span>
      </div>

      <div className='flex flex-col gap-3'>
        <span className='text-sm'>Privacy</span>
        <span className='text-sm'>Cookies</span>
        <span className='text-sm'>Privacy</span>
      </div>


    </section>


    <p className='text-[9px] '>Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto animi qui unde ea placeat, voluptatum amet recusandae voluptate tempore doloribus ipsam optio, minima iste repellat ratione. Culpa, provident tempora? Excepturi!</p>

    </div>
    <span className='text-[11px] text-black/70 mx-auto mt-2'>© 2025 Taylor Swift, LLC</span>
    </>
  )
}

export default Footer