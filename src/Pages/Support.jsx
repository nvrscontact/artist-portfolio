import React from 'react'
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

function Support() {

     const { hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const el = document.querySelector(hash);
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [hash]);


  return (
    <>
  <div className='mt-10 mb-20 space-y-20'>

        <section id='support' className='text-center'>
        <h1 className='text-white/70 text-3xl inter-200 '>Support</h1>

          <p className='mx-12 inter-200 text-[11px] mt-5 flex flex-col gap-3 text-start'>
            <span className='text-white/40'>1. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aspernatur nemo asperiores odio?</span>
            <span className='text-white/40'>2. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aspernatur nemo asperiores odio?</span>
            <span className='text-white/40'>3. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aspernatur nemo asperiores odio?</span>
            <span className='text-white/40 text-center'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aspernatur nemo asperiores odio?</span>
            <span className='text-white/40 text-center'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aspernatur nemo asperiores odio?</span>
          </p>

        </section>

        <section id='accesibility' className='text-center' >
        <h1 className='text-white/70 text-3xl inter-200 '>Accesibility</h1>

         <p className='mx-12 inter-200 text-[11px] mt-5 flex flex-col gap-3 text-start'>
            <span className='text-white/40'>1. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aspernatur nemo asperiores odio?</span>
            <span className='text-white/40'>2. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aspernatur nemo asperiores odio?</span>
            <span className='text-white/40'>3. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aspernatur nemo asperiores odio?</span>
            <span className='text-white/40 text-center'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aspernatur nemo asperiores odio?</span>
            <span className='text-white/40 text-center'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aspernatur nemo asperiores odio?</span>
          </p>
        </section>


      </div>
    </>
  )
}

export default Support