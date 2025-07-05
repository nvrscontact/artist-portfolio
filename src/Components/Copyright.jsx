import React from 'react'

function Copyright() {

    const date = new Date().getFullYear()
    
  return (
    <section className='flex flex-col gap-2'>
        <span>© {date} Kat Rosetti</span>
        <span>Help & Support</span>
        <span>Privacy & Cookies</span>
    </section>
  )
}

export default Copyright
