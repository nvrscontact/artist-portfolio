import React from 'react'

function Contact() {
  return (
    <>
        <div className='flex flex-col mt-10 mb-10'>

            <section className='mx-auto flex flex-col items-center mb-8 inter-200  '>
              <h1 className='text-white/70 text-3xl inter-200 text-center '>Contact </h1>
              <span className='text-white/40 text-[12px] '>Answer during the week</span>
            </section>

            <section className='space-y-4'>

              <article className='text-white/70 inter-200 mx-10 flex flex-col text-[12px] '>
                <h1 className='mb-2'>Phone</h1>
                <p className='flex flex-col text-white/40'>
                <span>Spain: +642 01 23 50</span>
                <span>United States: +642 01 23 50</span>
                <span>Japan: +642 01 23 50</span>
                </p>
              </article>

               <article className='text-white/70 inter-200 mx-10 flex flex-col text-[12px] '>
                <h1 className='mb-2'>Email</h1>
                <p className='flex flex-col text-white/40'>
                <span>artist@secretary.com</span>
                <span>forcompanies@artist.com</span>
                </p>
              </article>

               <article className='text-white/70 inter-200 mx-10 flex flex-col text-[12px] '>
                <h1 className='mb-2'>Customer Service</h1>
                <p className='flex flex-col text-white/40'>
                <span className='w-fit '>customerservice@artist.com</span>
                </p>
              </article>


               <section className='mx-14 mt-20 text-center flex flex-col items-center inter-200  '>
              <span className='text-white/40 text-[12px] '>Artist Trademark® United States <br /> Sarzuela Road, n° 1, 28023 Madrid</span>
                </section>

            </section>

        </div>
    </>
  )
}

export default Contact