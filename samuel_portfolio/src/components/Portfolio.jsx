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
            description: 'A React app that allows users to search iTunes for songs, albums, and artists using the iTunes API.',
            codeLink: 'https://github.com/Samuel-Molele/Itunes-Search-APP'
        },
        {
            id: 2,
            src: CarInventory,
            description: 'A full-stack CRUD application for managing a car inventory with React, Express, and MongoDB.',
            codeLink: 'https://github.com/Samuel-Molele/CRUD-CarInventory-Application',
        },
        {
            id: 3,
            src: TodoApp,
            description: 'A full-stack to-do list application built with React, Node.js, Express, and MongoDB.',
            codeLink: 'https://github.com/Samuel-Molele/Full-Stack-Todo-App',
        },
        {
            id: 4,
            src: Ecommerce,
            description: 'An eCommerce web application built with React, allowing users to browse and purchase products.',
            codeLink: 'https://github.com/Samuel-Molele/React-Capstone-Project',
        },
        {
            id: 5,
            src: MealDB,
            description: 'A JavaScript app that fetches recipes from TheMealDB API and allows users to search for meals by name.',
            codeLink: 'https://github.com/Samuel-Molele/Javascript-MealDB',
        },
        {
            id: 6,
            src: ReduxTodoApp,
            description: 'A to-do list app using React and Redux for state management, demonstrating CRUD functionality.',
            codeLink: 'https://github.com/Samuel-Molele/React-Redux-Todo-App',
        },
    ];

    return (
        <div 
            name='portfolio'
            className='bg-gradient-to-b from-black to-gray-800 w-full text-white  pb-12'>
            <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
                <div className="pb-8">
                    <p className='text-4xl font-bold inline border-b-4 border-accent'>Portfolio</p>
                    <p className='py-6'>Check out some of my work right here</p>
                </div>
                <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0'>
                    {portfolios.map(({ id, src, description, codeLink }) => (
                        <div key={id} className='shadow-md shadow-accent rounded-lg'>
                            <img 
                                src={src} 
                                alt='' 
                                className='w-full h-40 object-cover rounded-md duration-200 hover:scale-105' 
                            />
                            <div className="p-4">
                                <p className="text-xs leading-tight font-thin">{description}</p>
                            </div>
                            <div className='flex items-center justify-center text-accent'>
                                <a href={codeLink} target="_blank" rel="noopener noreferrer" className='w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105'>
                                    <button>Demo</button>
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Portfolio;
