import {Link} from 'react-router-dom'

import LanguageSelector from "../contexts/languages/components/LanguageSelector";
import Hamburger_Menu from '../assets/hamburger_menu.svg'

function NavBar() {


  /* close Menu */
  function closeMenu(){  
    document.querySelector("details")?.removeAttribute("open");
  }

  return (
    <>
    <header className='bg-black/60 lg:mx-30 xl:mx-96 flex justify-between px-5 h-12 items-center'>
        <details className=''>
        <summary className='list-none cursor-pointer'><img src={Hamburger_Menu} alt="Menu" className='h-6'/></summary>
         <nav className='absolute z-3 top-12 left-0 w-full bg-black/60 backdrop-blur-xl text-white/70 inter-200 '>
            <section className='p-5 flex flex-col justify-between space-y-5'>
              
              <ul className='flex flex-col gap-5 text-sm lg:text-sm [&>*>*]:flex  '>
                <li className='navLink 'onClick={closeMenu}><Link to='/store'>Store</Link> </li>
                <li className='navLink' onClick={closeMenu}><Link to='/albums'>Albums</Link> </li>
                <li className='navLink' onClick={closeMenu}><Link to='/support'>Support</Link> </li>
                <li className='navLink' onClick={closeMenu}><Link to='/'>Home</Link> </li>
              </ul>

              <section className='flex flex-col gap-2 text-sm '>
                <div className='flex gap-1'>
                  <button className='bg-white/10 py-2 px-8 flex-1' onClick={closeMenu}>Register</button>
                  <button className='bg-white/10 py-2 px-8 flex-1' onClick={closeMenu}>Login</button>
                </div>
                <span className='text-[10px] text-white/30 '>Register for more information</span>
              </section>
          </section>
        </nav> 
        </details>
        <LanguageSelector/>
    </header>
    </>
  )
}

export default NavBar


/* backdrop-blur-md */