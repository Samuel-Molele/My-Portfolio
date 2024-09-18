import React, { useState } from 'react';  
import CarInventory from '../assets/portfolio/Screenshots/CarInventory.png';
import Ecommerce from '../assets/portfolio/Screenshots/Ecommerce.png';
import MealDB from '../assets/portfolio/Screenshots/MealDB.png';
import RuduxTodoApp from '../assets/portfolio/Screenshots/ReduxTodoAPP.png';
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
            src: RuduxTodoApp,
            
            
            codeLink: 'https://github.com/Samuel-Molele/React-Redux-Todo-App',
        },
        
    ];

    return (
        <div name="portfolio" className="bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen">
            <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
                <div className="pb-8">
                    <p className="text-4xl font-bold inline border-b-4 border-accent">Portfolio</p>
                    <p className="py-6">Checkout some of my work right here</p>
                </div>

                <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
                    {portfolios.map(({ id, src,codeLink}) => (
                        <div key={id} className="shadow-md shadow-accent rounded-lg w-full h-full">
                            <img src={src} alt="" className="rounded-md duration-200 hover:scale-105" />
                            <div className="p-4">
                                
                            </div>

                            <div className="flex items-center justify-center">

                                
                                <a href={codeLink} target="_blank" rel="noopener noreferrer" className="w-1/2 px-6 m-4 py-3 duration-200 hover:scale-105">Code Link</a>
                            
                            
                                

                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Portfolio;
