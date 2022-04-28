import React from 'react'
import { HiArrowNarrowRight } from 'react-icons/hi'
import { Link } from 'react-scroll'



const Home = () => {
  return (
    <div name='home' className='w-full h-screen bg-[#87ceeb]'>

      {/*Topline*/}
      <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'>
        <p className='text-[#494546]'>Hello, my name is</p>
        <h1 className='text-4xl sm:text-7xl font-bold text-[#ccd6f6]'>
          Danny Lai
        </h1>
        <h2 className='text-4xl sm:text-7xl font-bold text-[#8892b0]'>
          I am a passionate Frontend Web Developer.
        </h2>
        <p className='text-[#494546] py-4 max-w-[700px]'>
          I am specializing in designing and building exceptional UI experiences. What I am currently focusing
          on are building responsive front-end web applications and documenting software requirements specification.
        </p>
        <div>
            <Link to='work' smooth={true} duration={500} className='text-[#8892b0] font-bold group border-2 px-6 py-3 my-2 flex items-center hover:bg-[#F7DC6F] hover:border-[#F7DC6F]'>
              View My Works 
              <span className='group-hover:rotate-90 duration-300'>
                <HiArrowNarrowRight className='ml-2'/>
              </span>
              
            </Link>

        </div>
      </div>

    </div>
  )
}

export default Home