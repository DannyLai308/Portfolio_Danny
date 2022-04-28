import React from 'react'
import HTML from '../assets/html.png'
import CSS from '../assets/css.png'
import JavaScript from '../assets/javascript.png'
import ReactImg from '../assets/react.png'
import Node from '../assets/node.png'
import C from '../assets/c.png'
import Python from '../assets/python.png'
import Sql from '../assets/sql.png'

const Skills = () => {
  return (
    <div name='skills' className='w-full h-screen text-gray-800 bg-[#87ceeb]'>
        {/*Skills container*/}
        <div className='w-full h-full max-w-[1000px] mx-auto p-4 flex flex-col justify-center'>
        <div>
            <p className='text-4xl font-bold inline border-b-4 border-[#F7DC6F] '>Tech Skills</p>
            <p className='py-4'> - Here are the technologies that I have experience working with -</p>
        </div>

        {/*Icons container*/}
        <div className='w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8'>
            <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                <img className='w-20 mx-auto' src={HTML} alt="HTML icon"/>
                <p className='my-4'>HTML5</p>
            </div>
            <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                <img className='w-20 mx-auto' src={CSS} alt="HTML icon"/>
                <p className='my-4'>CSS</p>
            </div>
            <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                <img className='w-20 mx-auto' src={JavaScript} alt="HTML icon"/>
                <p className='my-4'>JavaScript</p>
            </div>
            <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                <img className='w-20 mx-auto' src={ReactImg} alt="HTML icon"/>
                <p className='my-4'>ReactJS</p>
            </div>
            <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                <img className='w-20 mx-auto' src={Node} alt="HTML icon"/>
                <p className='my-4'>Node</p>
            </div>
            <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                <img className='w-20 mx-auto' src={C} alt="HTML icon"/>
                <p className='my-4'>C#</p>
            </div>
            <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                <img className='w-20 mx-auto' src={Python} alt="HTML icon"/>
                <p className='my-4'>Python</p>
            </div>
            <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                <img className='w-20 mx-auto' src={Sql} alt="HTML icon"/>
                <p className='my-4'>SQL</p>
            </div>
        </div>
        </div>
    </div>
  )
}

export default Skills