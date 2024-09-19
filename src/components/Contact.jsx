/* eslint-disable no-unused-vars */
import React from 'react';
import { AiFillLinkedin } from 'react-icons/ai';
import { motion } from 'framer-motion';
import Reveal from './Reveal';
import ShinyEffect from './ShinyEffect';

const Contact = () => {
  return (
    <div className='px-4 md:px-6 max-w-[1000px] mx-auto my-8 md:my-12 relative' id='contact'>
        <ShinyEffect className="absolute inset-0 pointer-events-none" />
        <Reveal>
        <div className='grid md:grid-cols-2 gap-8 place-items-center relative z-10'>
            <div className='w-full'>
                <div className='text-gray-300 my-3'>
                    <h3 className='text-3xl md:text-4xl font-semibold mb-5'>About <span>Me</span></h3>
                    <p className='text-justify leading-7 w-full md:w-11/12'>
                    My name is Tuan Anh, a frontend and fullstack developer with a strong focus on web design. I am passionate about creating visually appealing, responsive, and high-performance web applications for diverse user needs.
                    </p>
                </div>

                <div className='flex flex-wrap items-center justify-center md:justify-start gap-4 mt-8'>
                        <div className='bg-gray-800/40 p-4 rounded-lg flex-1 min-w-[100px] text-center'>
                            <h3 className='text-2xl md:text-4xl font-semibold text-white'>6<span>+</span></h3>
                            <p className='text-xs md:text-base text-gray-300'><span>Projects</span></p>
                        </div>
                        <div className='bg-gray-800/40 p-4 rounded-lg flex-1 min-w-[100px] text-center'>
                            <h3 className='text-2xl md:text-4xl font-semibold text-white'>1<span>+</span></h3>
                            <p className='text-xs md:text-base text-gray-300'><span>Years of Experience</span></p>
                        </div>
                        <div className='bg-gray-800/40 p-4 rounded-lg flex-1 min-w-[100px] text-center'>
                            <h3 className='text-2xl md:text-4xl font-semibold text-white'>10<span>+</span></h3>
                            <p className='text-xs md:text-base text-gray-300'><span>Happy Clients</span></p> 
                        </div>
                </div>
            </div>

            <form 
                action="https://getform.io/f/bmdpeoya"
                method="POST"
                className='w-full max-w-md p-5 md:p-8'
                id='form'
            >
                <p className='text-gray-100 font-bold text-xl mb-4'>Let&apos;s connect</p>
                <input type="text" 
                        id='name'
                        placeholder='Your Name...'
                        name='name'
                        className='mb-4 w-full rounded-md border border-purple-600 py-2 px-4'
                />
                 <input type="email" 
                        id='email'
                        placeholder='Your Email...'
                        name='email'
                        className='mb-4 w-full rounded-md border border-purple-600 py-2 px-4'
                />
                  <textarea  
                        id='textarea'
                        placeholder='Your Message...'
                        name='textarea'
                        cols="30"
                        rows="4"
                        className='mb-4 w-full rounded-md border border-purple-600 py-2 px-4'
                />
                <button 
                    type='submit'
                    className='w-full py-3 rounded-md bg-primary-color text-xl text-gray-100 hover:bg-purple-800 transition duration-300 font-semibold'
                >
                    Send Message
                </button>
            </form>
        </div>
        </Reveal>
    </div>
  )
}

export default Contact
