import {Link} from 'react-router-dom'
import LanguageSelector from "../languages/components/LanguageSelector";


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

    <section className='bg-black/80 text-white'>
      <div className=' flex justify-between mx-4 my-3'>

        <button onClick={toggleMenu}><img src={Hamburger_Menu} alt="" className='h-6' /></button>
        <div ref={menuRef} style={{display: 'none', position: 'absolute', top: '35px', left: '5px' }}>
                <ul className='border border-white/30 rounded-[16px] '>
                  <li className='flex flex-col text-white/60 backdrop-blur-md bg-white/10 text-[11px] p-2 m-1 rounded-xl '>
                  <span className='p-[6px]' onClick={closeMenu}><Link to='/aboutme'>About Me</Link> </span>
                  <span className='p-[6px]' onClick={closeMenu}><Link to='/'>Store</Link> </span>
                  <span className='p-[6px]' onClick={closeMenu}><Link to='/'>Home</Link> </span>
                  <span className='p-[6px]' onClick={closeMenu}><Link to='/'>Home</Link> </span>
                  <span className='p-[6px]' onClick={closeMenu}><Link to='/'>Home</Link> </span>
                  </li>
                </ul>
        </div>

        <LanguageSelector/>

      </div>
    </section>
    </>
  )
}

export default NavBar