import React from 'react'

import Deezer from '../assets/deezer.svg'
import Spotify from '../assets/spotify.svg'
import Youtube from '../assets/youtube.svg'
import YoutubeMusic from '../assets/youtube_music.svg'
import AppleMusic from '../assets/apple_music.svg'


function Hear() {
  return (
    <>
      <section className='text-white w-full'>

    <section className='flex flex-col  bg-black/30 w-64 mx-auto'>
      <div className='flex items-center justify-between p-3'>
        <section className='flex gap-2 items-center'>
          <img src={Deezer} alt="" className='h-7' />
          <h1 className='basis-1/2'>Deezer</h1>
        </section>
        <a className='bg-white/10 py-1 px-3 rounded-md' href="https://open.spotify.com/intl-es/album/6DEjYFkNZh67HP7R9PSZvv" >Play</a>
      </div>
      <div className='flex items-center justify-between p-3'>
        <section className='flex gap-2 items-center'>
          <img src={Spotify} alt="" className='h-6' />
          <h1 className='basis-1/2'>Deezer</h1>
        </section>
        <a className='bg-white/10 py-1 px-3 rounded-md' href="https://open.spotify.com/intl-es/album/6DEjYFkNZh67HP7R9PSZvv" >Play</a>
      </div>
      <div className='flex items-center justify-between p-3'>
        <section className='flex gap-2 items-center'>
          <img src={Youtube} alt="" className='h-6' />
          <h1 className=''>Deezer</h1>
        </section>
        <a className='bg-white/10 py-1 px-3 rounded-md' href="https://open.spotify.com/intl-es/album/6DEjYFkNZh67HP7R9PSZvv" >Play</a>
      </div>
    </section>

      </section>
    </>
  )
}

export default Hear