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

    <header className='bg-black/60 text-white relative z-2 lg:mx-30 xl:mx-96'>
      <nav className='flex justify-between mx-4 h-12 items-center'>
        
        <button onClick={toggleMenu}><img src={Hamburger_Menu} alt="" className='h-6' /></button>
        <div ref={menuRef} className='hidden absolute top-12 left-0 w-full'>
            <section className='px-4 flex flex-col justify-between pt-5 pb-3 bg-black/60 backdrop-blur-xl text-white/70 inter-200 h-80'>

              <ul className='flex flex-col gap-5 text-[14px] lg:text-sm  '>
                <li className='border-b border-white/10 pb-3' onClick={closeMenu}><Link to='/store'>Store</Link> </li>
                <li className='border-b border-white/10 pb-3 ' onClick={closeMenu}><Link to='/albums'>Albums</Link> </li>
                <li className='border-b border-white/10 pb-3' onClick={closeMenu}><Link to='/tour'>Support</Link> </li>
                <li className='border-b border-white/10 pb-3 ' onClick={closeMenu}><Link to='/'>Home</Link> </li>
              </ul>

              <section className='flex flex-col gap-2 text-[14px] '>
                <div className='flex gap-2'>
                  <button className=' bg-white/10 py-2 px-8 flex-1'>Register</button>
                  <button className=' bg-white/10 py-2 px-8 flex-1'>Login</button>
                </div>
                <span className='text-[10px] text-white/30 '>Register for more information</span>
              </section>

            </section>
        </div>
        <LanguageSelector/>

      </nav>
    </header>
    </>
  )
}

export default NavBar


/* backdrop-blur-md */