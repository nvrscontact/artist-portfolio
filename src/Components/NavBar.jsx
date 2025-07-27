import {Link} from 'react-router-dom'
import React, {useRef} from 'react'

import LanguageSelector from "../contexts/languages/components/LanguageSelector";

import Hamburger_Menu from '../assets/hamburger_menu.svg'


function NavBar() {

  const menuRef = useRef()

  const toggleMenu = () => {
    const menu = menuRef.current;
    menu.style.display = menu.style.display === 'block' ? 'none' : 'block';
  };

  const closeMenu = () => {
    menuRef.current.style.display ='none';
  };

  return (
    <>

    <section className='bg-black/60 text-white relative z-2 lg:mx-30 xl:mx-96'>
      <div className='flex justify-between mx-4 my-[14px] items-center'>
        
        <button onClick={toggleMenu}><img src={Hamburger_Menu} alt="" className='h-6' /></button>
        <div ref={menuRef} className='hidden absolute top-12 '>
            <section className='flex flex-col justify-between py-4 bg-black/70 backdrop-blur-xl text-white/70 inter-200 w-52 h-72'>

              <li className='flex flex-col gap-3 ml-6 text-[14px] lg:text-sm  '>
                <span className=' ' onClick={closeMenu}><Link to='/store'>Store</Link> </span>
                <span className=' ' onClick={closeMenu}><Link to='/albums'>Albums</Link> </span>
                <span className='' onClick={closeMenu}><Link to='/tour'>Support</Link> </span>
                <span className=' ' onClick={closeMenu}><Link to='/'>Home</Link> </span>
              </li>

              <section className='flex gap-2 justify-center text-[12px] '>
                <button className=' bg-white/10 py-1 px-2 '>Register</button>
                <button className=' bg-white/10 py-1 px-2 '>Login</button>
              </section>

            </section>
        </div>
        <LanguageSelector/>

      </div>
    </section>
    </>
  )
}

export default NavBar


/* backdrop-blur-md */