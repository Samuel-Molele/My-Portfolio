import React from 'react'
import html from '../assets/portfolio/html.png'
import bootstrap from '../assets/portfolio/Bootstrap.jpg'
import tailwind from '../assets/portfolio/tailwind.png'
import css from '../assets/portfolio/css.png'
import javascript from '../assets/portfolio/javascript.png'
import node from '../assets/portfolio/node.png'
import github from '../assets/portfolio/github.png'
import reactImage from '../assets/portfolio/react.png'
import mongoDB from '../assets/portfolio/mongodb.png'
import express from '../assets/portfolio/express.png'





const Experience = () => {

    const techs = [

      {
        id: 1,
        src: html,
        tittle: 'HTML',
        style: 'shadow-orange-500'
      },

      {
        id: 2,
        src: css,
        tittle: 'CSS',
        style: 'shadow-blue-500'
      },

      {
        id: 3,
        src: bootstrap,
        tittle: 'Bootstrap',
        style: 'shadow-purple-500'
      },

      {
        id: 4,
        src: tailwind,
        tittle: 'Tailwind',
        style: 'shadow-sky-400'
      },

      {
        id: 5,
        src: javascript,
        tittle:  'Javascript',
        style: 'shadow-yellow-500'
      },

      {
        id: 6,
        src: node,
        tittle: 'Node.js',
        style: 'shadow-green-400'
      },

      {
        id: 7,
        src: reactImage,
        tittle: 'React',
        style: 'shadow-blue-400'
      },

      {
        id: 8,
        src: github,
        tittle: 'Github',
        style: 'shadow-gray-400'
      },

      {
        id: 9,
        src: express,
        tittle: 'Express.js',
        style: 'shadow-gray-500'
      },

      {
        id: 10,
        src: mongoDB,
        tittle: 'MongoDB',
        style: 'shadow-green-600'
      },


    ]




  return (
   <div 
   name='experience'
   className="bg-gradient-to-b from-gray-800 to-black w-full ">
    <div className='max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white'>
      <div>
         <p className='text-4xl font-bold border-b-4 border-accent p-1 inline'>Experience</p>
         <p className='py-6'>These are the technologies I've worked with</p>
      </div>
      <div className='w-full grid grid-cols-2 sm:grid-cols-3 gap-8 relative text-center py-8 px-12 sm:px-0'>

        {
          techs.map(({ id, src, tittle, style })=> (
            <div key={id} className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${style}`}>
              <img src={src} alt='' className='w-20 mx-auto'></img>
              <p className='mt-4'>{tittle}</p>
          </div>
          ))
        }
          
      </div>
    </div>
   </div>
    
  )
}

export default Experience