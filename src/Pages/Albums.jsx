import React from 'react'
import {Link} from 'react-router-dom'

import Style_Album from '../assets/style_album.jpg'
import Red_Album from '../assets/red_album.jpg'


function Albums() {
  return (
    <div className='p-6 flex gap-8 text-white'>

        <section>
            <h1>Style</h1>
            <Link to='/hear'><img src={Style_Album} alt="" className='h-32' /></Link>
        </section>

        <section>
            <h1>Red</h1>
            <img src={Red_Album} alt="" className='h-32' />
        </section>

        
    </div>  )
}

export default Albums