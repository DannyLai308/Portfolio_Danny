import React from 'react'

const Contact = () => {
  return (
    <div name='contact' className='w-full h-screen bg-[#87ceeb] flex justify-center items-center p-4'>
        <form method="POST" action="https://getform.io/f/80cfea7a-f73e-4496-a69d-41bd997504b0"className='flex flex-col max-w-[600px] w-full'>
            <div lassName='pb-8'>
                <p className='text-4xl font-bold inline border-b-4 border-[#F7DC6F] text-gray-800'>
                    Contact
                </p>
                <p className='text-gray-800 py-4'>
                    - Submit the form below or send me an email via dannylai308@gmail.com -
                </p>
            </div>
            <input className='bg-[#ccd6f6] p-2' type="text" placeholder='Name' name='name' />
            <input className='my-4 p-2 bg-[#ccd6f6]' type="email" placeholder='Email' name='email' />
            <textarea className='bg-[#ccd6f6] p-2' name="message" rows="10" placeholder='Type your message here...'></textarea>
            <button className='text-[#8892b0] font-bold border-2 hover:bg-[#F7DC6F] hover:border-[#F7DC6F] px-4 py-3 my-8 mx-auto flex items-center'>
                Let's Collab
            </button>
        </form>
    </div>
  )
}

export default Contact