import React from 'react'
import Heading from './Heading';
import Card from './Card';

 const data = [
    {
        id: 0,
        title: "Todo List Project",
        desc:"A React & Typescript based app for managing and organizing your tasks efficiently.",
        img: "/pic4.jpg",
        tags:["React" , "Node" , "CSS" , "Typescript"],

    },

    {
        id: 1,
        title: "Countdown Timer Project",
        desc:"A Next.js and Typescript powered website to track time with an interactive countdown feature.",
        img: "/next1.jpg",
        tags:["Next.js" , "Node" , "CSS" , "Typescript"],

    },
    {
    id: 2,
        title: "Amazon Clone Website Project",
        desc:"A simple-based interactive website built with HTML and CSS.",
        img: "/pic12.jpg",
        tags:["HTML","CSS"],
    },
    {
        id: 3,
        title: "Dynamic Resume",
        desc:"A Typescript-based interactive resume built with HTML and CSS, allowing users to showcase their skills dynamically .",
        img: "/pic2.jpg",
        tags:["HTML" , "Node" , "CSS" , "Typescript"],
    },
    {
        id: 4,
        title: "Currency Converter Project",
        desc:"A simple HTML and Typescript powered tool for converting currencies with real-time rates.",
        img: "/pic3.jpg",
        tags:["HTML" , "Node" , "CSS" , "Typescript"],
        
    },
    
    {
        id: 5,
        title: "Simple Calculator Project",
        desc:"A basic HTML,CSS and Typescript calculator for performing essential arithmetic operator .",
        img: "/pic5.jpg",
        tags:["HTML" , "Node" , "CSS" , "Typescript"],
    },

    
];

const Projects = () => {
  return (
    <div id="projects" className="container pt-32">
        <Heading title="My Projects" />
        <div className="grid gap-10 xl:gap-10 xl:gap-y-10 md:grid-cols-2 lg:grid-cols-3">
           {data.map((el) => (<Card 
            key={el.id}
            title={el.title}
            decs={el.desc}
            img={el.img}
            tags={el.tags}
            />))}
        </div>
      
    </div>
  )
}

export default Projects
