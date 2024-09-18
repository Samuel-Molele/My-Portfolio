import React from 'react'

const Contact = () => {
  return (
    <div
        name="contact"
        className="w-full h-screen bg-gradient-to-b from-black to-gray-800 p-4 text-white"
    >
            <div className='flex flex-col p-4 justify-center max-w-screen-lg mx-auto h-full'>
                    <div className='pb-8'>
                        <p className="py-1 text-4xl font-bold inline border-b-4  border-accent">Contact</p>
                        <p className="py-8">Submit the form and get in touch with me</p>
                    </div>


                    <div className="flex justify-center items-center ">
                        <form action='https://getform.io/f/bvreqjnb'
                            method='POST'
                            className='flex flex-col w-full md:w-1/2'
                            >
                            <input 
                            type="text"
                            name="contact"
                            placeholder='Enter your name'
                            className='p-2 bg-transparent border-b-4 border-accent border-2 rounded-md text-white focus:outline-none'
                            >
                            </input>

                            <input 
                            type="text"
                            name="email"
                            placeholder='Enter your email'
                            className='my-4 p-2 bg-transparent border-b-4 border-accent border-2 rounded-md text-white focus:outline-none'
                            >
                            </input>
                            <textarea name="name"
                             rows="10"
                             placeholder='Enter your message'
                              className="p-2 bg-transparent border-b-4 border-accent border-2 rounded-md text-white focus:outline-none"></textarea>
                            <button className='text-black bg-accent my-8 px-6 py-3 font-semibold mx-auto flex items-centre rounded-md hover:scale-110 duration-300'>
                                Submit
                            </button>
                        </form>
                    </div>
            </div>
    </div>
  )
}

export default Contact