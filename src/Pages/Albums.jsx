import React from 'react';
import {Link} from 'react-router-dom';

import Style_Album from '../assets/style_album.jpg';
import Red_Album from '../assets/red_album.jpg';
import midnightsAlbum from '../assets/midnightsAlbum.jpg';

import { useNavigate } from 'react-router-dom';
import { useImage } from '../contexts/album_img/ImageContext';

function Albums() {

    const navigate = useNavigate();
    const {setSelectedImage} = useImage();
    
    const images = [
        { id: '1', 
          title:'Red', 
          year:'June 2011',
          type:'Album',
          src: Red_Album,
          links: {
            spotify:'https://open.spotify.com/intl-es/album/1EoDsNmgTLtmwe1BDAVxV5',
            youtube:'https://music.youtube.com/watch?v=sEPXrepgujY&list=OLAK5uy_kRl6HdICkQpZF7zuHu_Yx-RDVHw-hboxo',
            apple:'https://music.apple.com/es/album/red-taylors-version/1590368448?i=1590368453',
          } 
        },
        { id: '2', 
          title:'Style', 
          year:'May 2013',
          type:'Deluxe Version',
          src: Style_Album,
          links: {
            spotify:'https://open.spotify.com/intl-es/album/1EoDsNmgTLtmwe1BDAVxV5',
            youtube:'https://music.youtube.com/watch?v=sEPXrepgujY&list=OLAK5uy_kRl6HdICkQpZF7zuHu_Yx-RDVHw-hboxo',
            apple:'https://music.apple.com/es/album/red-taylors-version/1590368448?i=1590368453',
          } 
        },
        { id: '3', 
          title:'Midnights', 
          year:'February 2023',
          type:'New Album',
          src: midnightsAlbum,
          links: {
            spotify:'https://open.spotify.com/intl-es/album/1EoDsNmgTLtmwe1BDAVxV5',
            youtube:'https://music.youtube.com/watch?v=sEPXrepgujY&list=OLAK5uy_kRl6HdICkQpZF7zuHu_Yx-RDVHw-hboxo',
            apple:'https://music.apple.com/es/album/red-taylors-version/1590368448?i=1590368453',
          } 
        },
        
        
    ]
    const handleClick = (image) => {
        setSelectedImage(image);
        navigate('../Hear');
    }

  return (
    <>
    <div className='mt-10 mb-20 flex flex-col'>      

        <section className='flex flex-col items-center mb-8 inter-200  '>
          <h1 className='text-white/70 text-3xl inter-200 text-center '>Albums</h1>
          <span className='text-white/40 text-[12px] '>Complete Discography</span>
        </section>

        <section className='grid grid-cols-2 mx-4 gap-y-12'>
          {images.map((img) => (
            <div className='text-white flex flex-col items-center inter-200'>
                  <section className='flex flex-col mb-2 items-center'>
                      <span className='text-[16px] ' key={img.id}>{img.title} </span>
                      <span className='text-white/50 text-[11px] '>{img.year}</span>
                  </section>
                  <img 
                    key={img.id}
                    src={img.src}
                    alt={img.title}
                    onClick={() => handleClick(img)}
                    className='h-32 w-32'
                    />
                  <span className='text-white/70 text-[10px] w-32 text-center inter-200 bg-black/60 py-1'>{img.type} </span>

              </div>
          ))}
        </section>

    </div>
    </>
    )
}

export default Albums