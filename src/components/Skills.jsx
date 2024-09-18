/* eslint-disable no-unused-vars */
import React from 'react'
import {
    DiHtml5,
    DiCss3,
    DiSass,
    DiJavascript1,
    DiBootstrap,
    DiReact,
    DiNodejsSmall,
    DiMongodb,
    DiGithubBadge
} from 'react-icons/di'
import Reveal from './Reveal'
import { BackgroundGradient } from './ui/background-gradient'

const skills = [
    {
        category: 'Frontend',
        technologies: [
            {name: 'HTML5', icon: <DiHtml5 className='text-orange-600'/>},
            {name: 'CSS3', icon: <DiCss3 className='text-blue-600'/>},
            {name: 'Sass', icon: <DiSass className='text-pink-600'/>},
            {name: 'Bootstrap', icon: <DiBootstrap className='text-purple-600'/>},
            {name: 'Javascript', icon: <DiJavascript1 className='text-yellow-500'/>},
            {name: 'React', icon: <DiReact className='text-blue-500'/>},
        ],
    },
    {
        category: 'Full Stack',
        technologies: [
            {name: 'Node.js', icon: <DiNodejsSmall className='text-green-500'/>},
            {name: 'MongoDB', icon: <DiMongodb className='text-green-500'/>},
            {name: 'React', icon: <DiReact className='text-blue-500'/>},
            {name: 'Next.js', icon: <DiReact className='text-blue-500'/>},
            {name: 'Github', icon: <DiGithubBadge className='text-gray-500'/>},
        ],
    }
]

const Skills = () => {
  return (
    <div className='flex flex-col justify-center px-4 text-gray-200 pb-8 md:py-12 mx-auto max-w-[650px]' id='skills'>
        
        <Reveal>
       <h2 className='text-3xl font-bold mb-4 text-center'>Skills</h2>
       <p className='text-center mb-8'>
         I worked on various frontend and fullstack project. Check theme <a href="#" className='underline'>there.</a>
       </p>
       <div className='flex flex-col md:flex-row justify-center space-y-8 md:space-y-0 md:space-x-8 max-w[1000px] mx-auto'>
            {skills.map((skill, index) => (
                
                <div key={index} className='border border-purple-900 py-6 rounded-lg bg-purple-900/20 shadow-lg w-full md:w-1/2'>
                    <h3 className='text-xl font-bold mb-4 text-center'>{skill.category}</h3>
                    <div className='grid grid-cols-2 gap-4 px-4'>
                        {skill.technologies.map((tech, idx) => (
                             
                            <div key={idx} className='flex items-center justify-start space-x-2 p-3 rounded-lg'>
                                <span className='text-2xl w-8'>{tech.icon}</span>
                                <span className='text-gray-200'>{tech.name}</span>
                            </div>          
                        ))}
                    </div>
                    
                </div>
            
            ))}
       </div>
       
       </Reveal>
    </div>
  )
}

export default Skills
