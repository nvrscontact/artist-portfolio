import React from 'react'
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

import ApplePay from '../assets/apple_pay.svg'
import AmericanExpress from '../assets/american_express_pay.svg'
import Paypal from '../assets/paypal_pay.svg'
import Visa from '../assets/visa_pay.svg'
import Mastercard from '../assets/mastercard_pay.svg'

function Store() {
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
    <div className='flex flex-col items-center mx-auto mt-10 mb-5'>

      <section id='store' className='text-center mb-10'>
      <h1 className='text-white/70 text-3xl inter-200 '>Store</h1>
          <p className='mx-12 inter-200 text-[11px] mt-5 flex flex-col gap-3 text-start'>
            <span className='text-white/40'>1. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aspernatur nemo asperiores odio?</span>
            <span className='text-white/40'>2. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aspernatur nemo asperiores odio?</span>
            <span className='text-white/40'>3. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aspernatur nemo asperiores odio?</span>
            <span className='text-white/40 text-center'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aspernatur nemo asperiores odio?</span>
            <span className='text-white/40 text-center'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aspernatur nemo asperiores odio?</span>
          </p>
      </section>

      <section id='refunds' className='text-center mb-10'>
      <h1 className='text-white/70 text-3xl inter-200 '>Refunds</h1>
            <p className='mx-12 inter-200 text-[11px] mt-5 flex flex-col gap-3 text-start'>
          <span className='text-white/40'>1. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aspernatur nemo asperiores odio?</span>
          <span className='text-white/40'>2. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aspernatur nemo asperiores odio?</span>
          <span className='text-white/40'>3. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aspernatur nemo asperiores odio?</span>
          <span className='text-white/40 text-center'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aspernatur nemo asperiores odio?</span>
          <span className='text-white/40 text-center'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aspernatur nemo asperiores odio?</span>
        </p>
      </section>
    
        <article className=''>
          <h1 className='text-center mb-1 text-white/60 inter-200 text-[12px] '>Payment methods available</h1>
          <div className='flex gap-2 [&>*]:h-6 '>
                <img src={Visa} alt="" />
                <img src={ApplePay} alt="" />
                <img src={Mastercard} alt="" />
                <img src={AmericanExpress} alt="" />
                <img src={Paypal} alt="" />
                <img src={Visa} alt="" />
                <img src={Paypal} alt="" />
          </div>
        </article>

    </div>

    </>
  )
}

export default Store