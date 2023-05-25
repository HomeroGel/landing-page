import logo from '../assets/icons/logo.svg'

function NavBar() {
  return (
    <div className='flex justify-between items-center mx-auto py-20 container'>
        <img src={logo} alt="logo" />
        <nav>
            <a className='pr-7 text-white font-bold' href="#">About</a>
            <a className='pr-7 text-white font-bold' href="#">Careers</a>
            <a className='pr-7 text-white font-bold' href="#">Events</a>
            <a className='pr-7 text-white font-bold' href="#">Products</a>
            <a className=' text-white font-bold' href="#">Support</a>
        </nav>
    </div>
  )
}

export default NavBar