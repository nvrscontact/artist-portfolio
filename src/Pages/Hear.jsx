import React from 'react'

import Deezer from '../assets/deezer.svg'
import Spotify from '../assets/spotify.svg'
import Youtube from '../assets/youtube.svg'
import YoutubeMusic from '../assets/youtube_music.svg'
import AppleMusic from '../assets/apple_music.svg'

import {useImage} from '../contexts/album_img/ImageContext'

function Hear() {

  const {selectedImage} = useImage();

  if(!selectedImage) {
    return <p>no hay imagen seleccionada</p>
  }

  const {title,year,src,links} = selectedImage;

  const OpenLink = (url) => {
    window.open(url,'_blank','noopener')
  };
/*   const handleGoToLink = () => {
    if (selectedImage && selectedImage.spotify) {
      window.open(selectedImage.spotify, '_blank', 'noopener,noreferrer');
      }
  } */



  return (
    <>

    <div className='text-white'>
      <h2>{title}</h2>
      <button onClick={() => OpenLink(links.spotify)}>
        spotify
      </button>
      <button onClick={() => OpenLink(links.youtube)}>
        youtube
      </button>
      <button onClick={() => OpenLink(links.apple)}>
        apple
      </button>
    </div>

      <section className='text-white w-full'>

      </section>
    </>
  )
}

export default Hear

 {/*    <section className='flex flex-col  bg-black/30 w-64 mx-auto'>
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
    </section> */}