import React from 'react'

function Footer() {

  return (
    <>
    <div className='bg-black/70'>
        <li className='flex gap-4 [&>*>*]:h-5 '>
            <a href="https://facebook.com"><img src="/images/youtube.svg" alt="" /></a>
            <a href="https://facebook.com"><img src="/images/instagram.svg" alt=""/></a>
            <a href="https://facebook.com"><img src="/images/spotify.svg" alt="" /></a>
            <a href="https://facebook.com"><img src="/images/x.svg" alt="" /></a>
            <a href="https://facebook.com"><img src="/images/tik-tok.svg" alt=""/></a> 
        </li>
    
    <span className='text-sm'>© 2025 Taylor Swift, LLC</span>
    </div>
    </>
  )
}

export default Footer