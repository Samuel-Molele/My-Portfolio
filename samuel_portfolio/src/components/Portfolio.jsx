import React, { useState } from 'react';  
import CarInventory from '../assets/portfolio/Screenshots/CarInventory.png';
import Ecommerce from '../assets/portfolio/Screenshots/Ecommerce.png';
import MealDB from '../assets/portfolio/Screenshots/MealDB.png';
import ReduxTodoApp from '../assets/portfolio/Screenshots/ReduxTodoApp.png';
import TodoApp from '../assets/portfolio/Screenshots/TodoApp.png';
import ItunesSearchApp from '../assets/portfolio/Screenshots/ItunesSearchApp.png';

const Portfolio = () => {
    const [links, setLinks] = useState(false); 

    const portfolios = [
        {
            id: 1,
            src: ItunesSearchApp,
            
            
            codeLink: 'https://github.com/Samuel-Molele/Itunes-Search-APP'
        },
        {
            id: 2,
            src: CarInventory,
            

            codeLink: 'https://github.com/Samuel-Molele/CRUD-CarInventory-Application',
        },

        {
            id: 3,
            src: TodoApp,
            
            
            codeLink: 'https://github.com/Samuel-Molele/Full-Stack-Todo-App',
        },

        {
            id: 4,
            src: Ecommerce,
            
            
            codeLink: 'https://github.com/Samuel-Molele/React-Capstone-Project',
        },

        {
            id: 5,
            src: MealDB,
        
            
            codeLink: 'https://github.com/Samuel-Molele/Javascript-MealDB',
        },

        {
            id: 6,
            src: ReduxTodoApp,
            
            
            codeLink: 'https://github.com/Samuel-Molele/React-Redux-Todo-App',
        },
        
    ];

    return (

        <div 
        name='portfolio'
        className='bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen '>
            <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full ">
                <div className="pb-8">
                    <p className='text-4xl font-bold inline border-b-4 border-accent'>Portfolio</p>
                    <p className='py-6'>Check out some of my work right here</p>
                </div>
              
                <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0'>
                {
                    portfolios.map(({id, src, codeLink})=>(

                        <div key={id} className='shadow-md shadow-accent rounded-lg'>
                        <img src={src} alt='' className=' w-full h-40 object-cover rounded-md duration-200 hover:scale-105'/>
                    <div className='flex items-center justify-center text-accent '>
                        <a href={codeLink} target="_blank" rel="noopener noreferrer" className='w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105'>
                        <button>Demo Code </button>
                        
                        </a>
                    </div>
                </div>
                    ))
                }
 
                </div>
            </div>
        </div>

    )
}

export default Portfolio;
