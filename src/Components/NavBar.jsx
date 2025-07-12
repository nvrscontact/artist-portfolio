import {Link} from 'react-router-dom'
import LanguageSelector from "../contexts/languages/components/LanguageSelector";


import Hamburger_Menu from '../assets/hamburger_menu.svg'



import React, {useRef} from 'react'

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

    <section className='bg-black/50 text-white relative z-2 md:mx-60'>
      <div className='flex justify-between mx-4 my-3 items-center'>
        <button onClick={toggleMenu}><img src={Hamburger_Menu} alt="" className='h-6' /></button>
        <div ref={menuRef} className='hidden absolute top-12 '>
                  <li className='flex flex-col text-white/70 text-[12px] md:text-sm gap-[1px] [&>*]:p-[9px] inter-200 backdrop-blur-xl  '>
                  <span className=' bg-black/70' onClick={closeMenu}><Link to='/aboutme'>About Me</Link> </span>
                  <span className=' bg-black/70' onClick={closeMenu}><Link to='/store'>Store</Link> </span>
                  <span className=' bg-black/70' onClick={closeMenu}><Link to='/albums'>Albums</Link> </span>
                  <span className=' bg-black/70' onClick={closeMenu}><Link to='/tour'>Tour</Link> </span>
                  <span className=' bg-black/70' onClick={closeMenu}><Link to='/'>Home</Link> </span>
                  </li>
        </div>
        <LanguageSelector/>
      </div>

    </section>
    </>
  )
}

export default NavBar


/* backdrop-blur-md */