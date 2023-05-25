import '../styles/hero.css'
import NavBar from './NavBar'

function Hero() {
  return (
    <>
        <div className='background'>
            <NavBar/>
            <div className='flex-col container mx-auto pt-20'>
                <div className='border w-fit p-6'>
                    <p className='text-6xl text-white'>IMMERSIVE</p>
                    <p className='text-6xl text-white'>EXPERIENCES</p>
                    <p className='text-6xl text-white'>THAT DELIVER</p>
                </div>
            </div>
        </div>
    </>
  )
}

export default Hero