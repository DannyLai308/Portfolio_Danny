import React, {useState} from 'react'
import {FaBars, FaTimes, FaGithub, FaLinkedin} from 'react-icons/fa'
import Logo from '../assets/logo.PNG'
import { HiOutlineMail } from 'react-icons/hi'
import { BsFillPersonLinesFill } from 'react-icons/bs'

const Navbar = () => {
    const[nav, setNav] = useState(false)
    const handleClickEvent = () => setNav(!nav)
  return (
    <div className='fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#87ceeb] text-gray-800'>
        <div>
            <img src={Logo} alt="Logo Image" style={{width: '120px'}}/>
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
        <div className='hidden lg:flex fixed flex-col top-[35%] left-0'>
            <ul>
                <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#188EDD]'>
                    <a className='flex justify-between items-center w-full text-gray-800' href="/">
                        LinkedIn <FaLinkedin size={30}/>
                    </a>
                </li>
                <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#14E062]'>
                    <a className='flex justify-between items-center w-full text-gray-800' href="/">
                        GitHub <FaGithub size={30}/>
                    </a>
                </li>
                <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#FA5910]'>
                    <a className='flex justify-between items-center w-full text-gray-800' href="/">
                        Email <HiOutlineMail  size={30}/>
                    </a>
                </li>
                <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#F7F006]'>
                    <a className='flex justify-between items-center w-full text-gray-800' href="/">
                        Resume <BsFillPersonLinesFill  size={30}/>
                    </a>
                </li>
            </ul>
        </div>
    </div>
  )
}

export default Navbar