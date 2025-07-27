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
          year:'2011',
          type:'Deluxe Version',
          src: Red_Album,
          links: {
            spotify:'https://open.spotify.com/intl-es/album/1EoDsNmgTLtmwe1BDAVxV5',
            youtube:'https://music.youtube.com/watch?v=sEPXrepgujY&list=OLAK5uy_kRl6HdICkQpZF7zuHu_Yx-RDVHw-hboxo',
            apple:'https://music.apple.com/es/album/red-taylors-version/1590368448?i=1590368453',
          } 
        },
        { id: '2', 
          title:'Style', 
          year:'2013',
          src: Style_Album,
          type:'Album',
          links: {
            spotify:'https://open.spotify.com/intl-es/album/1EoDsNmgTLtmwe1BDAVxV5',
            youtube:'https://music.youtube.com/watch?v=sEPXrepgujY&list=OLAK5uy_kRl6HdICkQpZF7zuHu_Yx-RDVHw-hboxo',
            apple:'https://music.apple.com/es/album/red-taylors-version/1590368448?i=1590368453',
          } 
        },
        { id: '3', 
          title:'Midnights', 
          year:'2023',
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
    <div className='mt-10 mb-20 grid grid-cols-3 gap-6 mx-auto'>

        {images.map((img) => (
            <div className='text-white flex flex-col items-center inter-200'>
                <section className='flex flex-col mb-2 items-center'>
                    <span className='text-[14px] ' key={img.id}>{img.title} </span>
                    <span className='text-white/50 text-[10px] '>{img.year}</span>
                </section>
                <img 
                key={img.id}
                src={img.src}
                alt={img.title}
                onClick={() => handleClick(img)}
                className='h-24 w-24'
                />
                <span className='mt-2 text-[9px] text-white/60 bg-black/50 py-1 w-fit px-2 '>{img.type} </span>
            </div>
        ))}
    </div>
    </>
    )
}

export default Albums