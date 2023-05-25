import logo from '../assets/icons/logo.svg'
import facebookLogo from '../assets/icons/icon-facebook.svg'
import twitterLogo from '../assets/icons/icon-twitter.svg'
import pinterestLogo from '../assets/icons/icon-pinterest.svg'
import instagramLogo from '../assets/icons/icon-instagram.svg'

function Footer() {
    return (
        <div className=" bg-black mt-44 h-36 flex flex-col justify-center">

            <div className='container mx-auto flex justify-between items-center mb-5'>
                <img src={logo} alt="logo" />
                <div className='flex items-center'>
                    <img className='px-2' src={facebookLogo} alt="facebook logo" />
                    <img className='px-2' src={twitterLogo} alt="twitter logo" />
                    <img className='px-2' src={pinterestLogo} alt="pinterest logo" />
                    <img className='px-2' src={instagramLogo} alt="instagram logo" />
                </div>
            </div>

            <div className='container mx-auto'>
                <div className='flex justify-between'>
                    <nav>
                        <a className='pr-7 text-white font-light' href="#">About</a>
                        <a className='pr-7 text-white font-light' href="#">Careers</a>
                        <a className='pr-7 text-white font-light' href="#">Events</a>
                        <a className='pr-7 text-white font-light' href="#">Products</a>
                        <a className=' text-white font-light' href="#">Support</a>
                    </nav>
                    <p className='text-slate-600'>2023 Loopstudios. All rights reserved.</p>
                </div>
            </div>
        </div>
    )
}

export default Footer