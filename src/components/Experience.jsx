/* eslint-disable no-unused-vars */
import React from 'react';
import { motion } from 'framer-motion';
import Reveal from './Reveal';
import { BackgroundGradient } from './ui/background-gradient';

const experiences = [
    {
        company: "First Company",
        period: "2022-2023",
        description: "Bang Onsen Spa Resort",
    },
    {
        company: "Second Company",
        period: "2024-2025",
        description: "IT inter CyberSoft Academy",
    },
]

const Experience = () => {
  return (
    <div className='p-8 max-w-[600px] mx-auto'>
        <h1 className='text-4xl font-bold text-gray-200 text-center mb-12'>Experience</h1>
        <BackgroundGradient className="p-[0.5px] rounded-lg">
            <div className='bg-[#190b1f] rounded-2xl p-6 flex flex-col items-center'>
                {experiences.map((experience, index) => (
                    <Reveal key={index}>
                        <motion.div 
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: false, amount: 0.3 }}
                            transition={{ duration: 1 }}
                            className='mb-6 w-full text-center'
                        >
                            <h2 className='text-2xl text-gray-100 font-semibold'>{experience.company}</h2>
                            <p className='text-gray-300'>{experience.period}</p>
                            <p className='text-gray-300 mt-4'>{experience.description}</p>
                        </motion.div>
                    </Reveal>
                ))}
            </div>
        </BackgroundGradient>
    </div>
  )
}

export default Experience
