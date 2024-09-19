import React from 'react'
import MyImage from '../assets/portfolio/myImage.jpg'
import { MdKeyboardArrowRight } from "react-icons/md";
import { Link } from "react-scroll"
const Home = () => {
  return (
    <div name= "home"
        className='h-screen w-full bg-gradient-to-b from-black via-black to-gray-800'
    >
        <div className='max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row' >
            <div className='flex flex-col justify-center h-full px-12'>
                <span className='text-accent '>Full Stack Web Developer</span>
                <h1 className=' mb-6 text-6xl sm:7xl font-bold text-white'>
                    Hello I'm <br /><span className='text-accent'>Samuel Molele</span></h1>
                <p className='text-white py-4 max-w-md'>
                A versatile programmer skilled in both front-end and back-end development,
                proficient in creating dynamic web applications.

                </p>
                <div>
                    <Link 
                    to='portfolio'
                    smooth
                    duration={500}
                    className=' 
                     group  text-accent w-fit px-12 py-2 my-2 cursor-pointer
                    flex items-center rounded-md bg-transparent border border-accent
                     hover:bg-accent hover:text-primary font-semibold
                    '>
                        Portfolio
                        <span className='group-hover:rotate-90 duration-300 '>
                        <MdKeyboardArrowRight size={25} className='ml-1'/>
                        </span>
                    </Link>
                </div>
            </div>
            <div>
                <img src={MyImage} 
                alt="profile"
                className='rounded-2xl mx-auto object-cover h-35 w-96 '
                ></img>
            </div>
        </div>
    </div>
  )
}

export default Home