import React from 'react';
import {Link} from 'react-router-dom';

import Style_Album from '../assets/style_album.jpg';
import Red_Album from '../assets/red_album.jpg';

import { useNavigate } from 'react-router-dom';
import { useImage } from '../contexts/album_img/ImageContext';

function Albums() {

    const navigate = useNavigate();
    const {setSelectedImage} = useImage();
    
    const images = [
        { id: '1', 
          title:'Style', 
          src: Style_Album,
          links: {
            spotify:'https://open.spotify.com/intl-es/album/1EoDsNmgTLtmwe1BDAVxV5',
            youtube:'https://music.youtube.com/watch?v=sEPXrepgujY&list=OLAK5uy_kRl6HdICkQpZF7zuHu_Yx-RDVHw-hboxo',
            apple:'https://music.apple.com/es/album/red-taylors-version/1590368448?i=1590368453',
          } 
        },
        { id: '2', 
          title:'Red', 
          src: Red_Album,
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

    <div className='w-full'>
        <section className='flex justify-center gap-8'>
        {images.map((img) => (
            <div>
                <span key={img.id}>{img.title} </span>
                <img 
                key={img.id}
                src={img.src}
                alt={img.title}
                onClick={() => handleClick(img)}
                className='h-28'
                />
            </div>
        ))}
        </section>
    </div>

{/*  */}
    {/* <div className='w-full flex justify-center my-8 gap-10 text-white '>
        
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

        
    </div>   */}
    </>
    )
}

export default Albums