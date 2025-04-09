/* eslint-disable no-unused-vars */
import React from 'react';
import profilepic from '../assets/anhdaidien.png';
import { TypeAnimation } from 'react-type-animation';
import CVDinhTuanAnh from '../assets/CVDinhTuanAnh.pdf';
import ShinyEffect from './ShinyEffect';
import {
    AiOutlineFacebook,
    AiOutlineGithub,
    AiOutlineTikTok,  
} from 'react-icons/ai';
import {
    DiCss3,
    DiHtml5,
    DiJavascript1,
    DiReact,
    DiNodejsSmall,
    DiMongodb,
    DiMysql,
    DiFirebase,
    DiDart,
} from 'react-icons/di';
import { motion } from 'framer-motion';
import { FaDocker} from 'react-icons/fa';

const Hero = () => {
  const handleDownloadCV = () => {
    const link = document.createElement('a');
    link.href = CVDinhTuanAnh;
    link.download = 'CVDinhTuanAnh.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className='mt-24 max-w-[1200px] mx-auto relative'>
      <div className='grid md:grid-cols-2 place-items-center gap-8'>
         <motion.div
            initial={{opacity: 0, y: -50}}
            whileInView={{opacity: 1, y: 0}}
            viewport={{once: true}}
            transition={{duration: 1}}
         >
            <TypeAnimation 
                sequence={[
                    'Developer Fullstack',
                    1000,
                    'Web App Designer',
                    1000,
                    'App Mobile',
                    1000,
                ]}
                speed={50}
                repeat={Infinity}
                className='text-xl font-bold md:text-5xl italic- mb-4 bg-gradient-to-r from-orange-300 to-orange-500 text-transparent bg-clip-text'
            />
                <motion.p
                    initial={{opacity: 0}}
                    whileInView={{opacity: 1}}
                    viewport={{once: true}}
                    transition={{duration: 1, delay: 0.5}}
                    className='md:text-7xl text-gray-200 text-5xl tracking-tight m-4'
                >
                    Hello, I&apos;m <br />
                    <span className='text-purple-500 font-semibold'>Tuan Anh</span>
                </motion.p>
                <motion.p
                    initial={{opacity: 0}}
                    whileInView={{opacity: 1}}
                    viewport={{once: true}}
                    transition={{duration: 1, delay: 1}}
                    className='md:text-2xl text-gray-300 max-w-[300px] md:max-w-[500px] text-lg m-2'
                >
                 I&apos;m a Frontend & Backend developer, Web app mobile designer.
                </motion.p>
                <motion.div
                        initial={{opacity: 0, y: 50}}
                        whileInView={{opacity: 1, y: 0}}
                        viewport={{once: true}}
                        transition={{duration: 1, delay: 1.5}}
                        className='flex flex-row items-center gap-6 my-4 md:mb-0'
                        >
                    <motion.button 
                        whileHover={{scale: 1.05, boxShadow: '0px 0px 8px rgba(0, 0, 0, 0.3)'}}
                        className='z-10 cursor-pointer text-gray-200 font-bold w-auto p-3 md:p-4 px-3 md:px-4 border border-purple-400 rounded-xl bg-gradient-to-r to-purple-600 hover:from-purple-400 hover:to-purple-600 text-sm md:text-base'
                        onClick={handleDownloadCV}
                    >
                        Download CV
                    </motion.button>
                    <div className='flex gap-6 flex-row text-4xl md:text-6xl text-gray-200 z-20'>
                        <motion.a whileHover={{scale: 1.2}} href='https://github.com/tuananhkim555?tab=repositories'>
                            <AiOutlineGithub />
                        </motion.a>

                        <motion.a whileHover={{scale: 1.2}} href='https://www.tiktok.com/@tuananh.react?lang=vi-VN'>
                            <AiOutlineTikTok />
                        </motion.a>

                        <motion.a whileHover={{scale: 1.2}} href='https://www.facebook.com/profile.php?id=100058628592945'>
                            <AiOutlineFacebook />
                        </motion.a>
                    </div>
             </motion.div>
         </motion.div>

        <motion.div
            initial={{opacity: 0, scale: 0.8}}
            whileInView={{opacity: 1, scale: 1}}
            viewport={{once: true}}
            transition={{duration: 1}}
            className="perspective-1000"
        >
            <img 
                src={profilepic}
                className='w-[350px] md:w-[500px] object-cover'
                alt="Profile"
            />
        </motion.div>
      </div>

         <motion.div
            initial={{opacity: 0}}
            whileInView={{opacity: 1}}
            viewport={{once: true}}
            transition={{duration: 1, delay: 2}}
            className='flex flex-col md:flex-row items-center justify-center w-full py-10 md:py-12 px-2 md:px-0'
         >
              <p className='text-gray-200 text-xl md:text-2xl mb-6 md:mb-0 md:mr-6'>My Tech Stack</p>   
              <div className='flex flex-wrap justify-center gap-2 text-4xl md:text-5xl'>
                <DiHtml5 className='text-orange-600'/>
                <DiCss3 className='text-blue-600'/>
                <DiJavascript1 className='text-yellow-500'/>
                <DiReact className='text-blue-500'/>
                <DiDart className='text-blue-500'/>
                <DiNodejsSmall className='text-green-500'/>
                <DiMongodb className='text-green-500'/>
                <DiMysql className='text-blue-500'/>
                <FaDocker className='text-blue-500'/>
              </div>
         </motion.div>
         <div className='absolute inset-0 hidden md:block'>
          <ShinyEffect left={0} top={0} size={1400} />
         </div>
    </div>
  )
}

export default Hero
