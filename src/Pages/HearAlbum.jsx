import Spotify from '../assets/spotify.svg'
import YoutubeMusic from '../assets/youtube_music.svg'
import AppleMusic from '../assets/apple_music.svg'

import {useImage} from '../contexts/album_img/ImageContext'

function HearAlbum() {

  const {selectedImage} = useImage();

  if(!selectedImage) {
    return <p>no hay imagen seleccionada</p>
  }

  const {title,year,src,links} = selectedImage;

  const OpenLink = (url) => {
    window.open(url,'_blank','noopener')
  };

  return (
    <>
    <div className='w-full'>

    <div className='text-white flex flex-col mt-10'>
      <section className='flex flex-col items-center'>
      <h2 className='mb-2'>{title}</h2>
      <img src={src} alt="" className='h-40 w-40 mb-2' />
      </section>
      <section className='flex flex-col gap-3 pl-12 mt-6'>
        <button onClick={() => OpenLink(links.spotify)} className='flex gap-2 items-center'>
          <img src={Spotify} alt="" className='h-5'/>
          Spotify
        </button>
        <button onClick={() => OpenLink(links.youtube)} className='flex gap-2 items-center'>
          <img src={YoutubeMusic} alt="" className='h-5' />
          Youtube Music
        </button>
        <button onClick={() => OpenLink(links.apple)} className='flex gap-2 items-center'>
          <img src={AppleMusic} alt="" className='h-5'/>
          Apple Music
        </button>
      </section>
    </div>
    </div>
    </>
  )
}

export default HearAlbum

    