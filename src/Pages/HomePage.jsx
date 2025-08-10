import Presentation from '../Components/Presentation'
import Art_Album from '../Components/Art_Album'
import Art_Merchandising from '../Components/Art_Merchandising'
import Art_Newsletter from '../Components/Art_Newsletter'

function HomePage() {
  return (
    <>
    <Presentation/>
    <section className='lg:flex xl:mx-96'>
      
      <div className='md:order-1'>
        <Art_Album/> 
      </div>

      <div className='md:order-0'>
        <Art_Merchandising/> 
      </div>

      <div className='md:order-2'> 
        <Art_Newsletter/> 
      </div>
      
    </section>
    </>
  )
}

export default HomePage