import React from 'react'

const About = () => {
  return (
    <div name='about' className='w-full h-screen bg-[#87ceeb] text-gray-800'>
        <div className='flex flex-col justify-center items-center w-full h-full'>
            <div className='max-w-[1000px] w-full grid grid-cols-2 gap-8'>
                <div className='sm:text-right pb-8 pl-4'>
                    <p className='text-4xl font-bold inline border-b-4 border-[#F7DC6F]'>
                        About
                    </p>
                </div>
                <div>
                </div>
            </div>
            <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4'>
                <div className='sm:text-right text-4xl font-bold'>
                    <p>
                        Nice to meet you, I'm Danny! Please feel free to look around.
                    </p>
                </div>
                <div>
                    <p>
                        Over the years, I have had great opportunities to come across many real-world projects, and it is by learning to 
                        solve a variety of issues that I have grown and developed my programming abilities. I have a solid foudation to 
                        work in all aspects of a software / web-app development life cycle. In particular, I specialize in designing 
                        user-friendly interfaces and building responsive front-ends for a diverese range of web applications.
                    </p>
                </div>
            </div> 
        </div>
    </div>
  )
}

export default About