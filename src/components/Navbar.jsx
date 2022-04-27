import React, {useState} from 'react'
import {FaBars, FaTimes} from 'react-icons/fa'
import Logo from '../assets/logo.PNG'

const Navbar = () => {
    const[nav, setNav] = useState(false)
    const handleClickEvent = () => setNav(!nav)
  return (
    <div className='fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#87ceeb] text-gray-800'>
        <div>
            <img src={Logo} alt="Logo Image" style={{width: '100px'}}/>
        </div>

        {/* Pages Menu*/}

        <ul className='hidden md:flex'>
            <li>Home</li>
            <li>About</li>
            <li>Skills</li>
            <li>Work</li>
            <li>Contact</li>
        </ul>

        {/* Hamburger Menu*/}
        <div onClick={handleClickEvent} className='md:hidden z-10'>
            {!nav ? <FaBars /> : <FaTimes />}
        </div>

        {/* Mobile Menu*/}
        <ul className={!nav ? 'hidden':'absolute top-0 left-0 w-full h-screen bg-[#87ceeb] flex flex-col justify-center items-center'}>
            <li className='py-6 text-4xl'>Home</li>
            <li className='py-6 text-4xl'>About</li>
            <li className='py-6 text-4xl'>Skills</li>
            <li className='py-6 text-4xl'>Work</li>
            <li className='py-6 text-4xl'>Contact</li>
        </ul>

        {/* Socail Icons*/}
        <div className='hidden'>

        </div>
    </div>
  )
}

export default Navbar