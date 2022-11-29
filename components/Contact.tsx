import React from 'react'

const Contact = () => {
  return (
    <div className='flex flex-col mb-10 mx-auto'>
        <div className="flex justify-center items-center">
            <form action="https://getform.io/f/710d940e-a63a-4da6-86a4-7057b3efd6ab" 
                  method='POST' 
                  className='flex flex-col w-full md:w-7/12'>
                <input  type="text" 
                        name='name'
                        placeholder='Name'
                        className='p-2 bg-transparent border-2 rounded-md focus:outline-none'
                        />
                <input  type="text" 
                        name='email'
                        placeholder='Email'
                        className='my-2 p-2 bg-transparent border-2 rounded-md focus:outline-none'
                        />
                <textarea   name="message" 
                            placeholder='Message' 
                            rows={10} 
                            className='mb-4 p-2 bg-transparent border-2 rounded-md focus:outline-none'/>
                <button type='submit' className='text-center inline-block px-8 py-3 w-max text-base font-medium rounded-md text-white bg-gradient-to-r from-yellow-500 to-pink-500 drop-shadow-md self-center md:self-start'>Work With Me</button>
            </form>
        </div>
    </div>
  )
}

export default Contact
