import React from 'react'
import TrueChamp from '../assets/truechamp.PNG'
import Snake from '../assets/snake.PNG'
import Reddit from '../assets/reddit.PNG'



const Work = () => {
  return (
    <div name='work' className='w-full md:h-screen text-gray-800 bg-[#87ceeb]'>
        <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
            <div  className='pb-8'>
                <p className='text-4xl font-bold inline border-b-4 text-gray-800 border-[#F7DC6F]'>
                    Work Projects
                </p>
                <p className='py-6'>- Check out some of my recent works -</p>
            </div>

            {/*Projects container*/}
            <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-4'>
               
                {/*List of projects*/}
                <div style={{ backgroundImage: `url(${TrueChamp})` }} 
                 className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>
                    
                    {/* Hover Events */}
                    <div className='opacity-0 group-hover:opacity-100'>
                        <span className='text-2xl font-bold text-white tracking-wider'>
                            Fitness Web Application
                        </span>

                        <div>
                            <a href="https://dannylai308.github.io/Newchamps_Fitness/">
                                <button className='text-center rounded-lg px-4 py-3 m-7 bg-[#F7DC6F] text-gray-800 font-bold text-lg'>View Project</button>
                            </a>
                        </div>
                    </div>
                </div>
                <div style={{ backgroundImage: `url(${Snake})` }} 
                 className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>
                    
                    {/* Hover Events */}
                    <div className='opacity-0 group-hover:opacity-100'>
                        <span className='text-2xl font-bold text-white tracking-wider'>
                            Python Snake Game
                        </span>

                        <div>
                            <a href="https://github.com/DannyLai308/Python_Snake_Game/tree/main/dist">
                                <button className='text-center rounded-lg px-4 py-3 m-7 bg-[#F7DC6F] text-gray-800 font-bold text-lg'>View Project</button>
                            </a>
                        </div>
                    </div>
                </div>
                <div style={{ backgroundImage: `url(${Reddit})` }} 
                 className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>
                    
                    {/* Hover Events */}
                    <div className='opacity-0 group-hover:opacity-100'>
                        <span className='text-2xl font-bold text-white tracking-wider'>
                            Personal Reddit Clone
                        </span>

                        <div>
                            <a href="https://github.com/DannyLai308/Personal_Reddit">
                                <button className='text-center rounded-lg px-4 py-3 m-7 bg-[#F7DC6F] text-gray-800 font-bold text-lg'>View Project</button>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Work