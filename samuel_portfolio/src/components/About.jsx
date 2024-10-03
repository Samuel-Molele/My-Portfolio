import React from 'react';

const About = () => {
    return (
        <div name="about" className='w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white'>
            <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
                <div className='pb-8'>
                    <p className='text-4xl font-bold inline border-b-4 border-accent'>About</p>
                </div>
                <p className='text-xl mt-20'>
                    Hello! I'm Samuel Molele, a passionate and dedicated full-stack web developer with experience in both front-end and back-end technologies. 
                    I specialize in creating dynamic, responsive, and user-friendly web applications that solve real-world problems. 
                    With a strong foundation in JavaScript, React, Node.js, Express, and MongoDB, I take pride in building full-stack solutions from scratch, 
                    ensuring seamless integration between the client and server sides.
                </p>
                <br />
                <p className='text-xl'>
                    Beyond coding, I enjoy tackling complex challenges, learning new technologies, and continuously improving my skills. 
                    My goal is to deliver clean, efficient code while keeping the user experience at the forefront of every project. 
                    When I’m not coding, you’ll find me exploring the latest tech trends or working on personal projects that push my creative boundaries.
                </p>
            </div>
        </div>
    );
};

export default About;
