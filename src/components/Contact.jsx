/* eslint-disable no-unused-vars */
import React from 'react';
import { AiFillLinkedin } from 'react-icons/ai';
import { motion } from 'framer-motion';
import Reveal from './Reveal';
import ShinyEffect from './ShinyEffect';

const Contact = () => {
  return (
    <div className='px-6 max-w-[1000px] mx-auto md:my-12 relative' id='contact'>
        <ShinyEffect className="absolute inset-0 pointer-events-none" />
        <Reveal>
        <div className='grid md:grid-cols-2 place-items-center relative z-10'>
            <div>
                <div className='text-gray-300 my-3'>
                    <h3 className='text-4xl font-semibold mb-5'>About <span>Me</span> </h3>
                    <p className='text-justify leading-7 w-11/12 mx-auto'>
                    My name is Tuan Anh, a frontend and fullstack developer with a strong focus on web design. I am passionate about creating visually appealing, responsive, and high-performance web applications for diverse user needs.
                    </p>
                </div>

                <div className='flex items-center gap-7 mt-10'>
                        <div className='bg-gray-800/40 p-4 rounded-lg'>
                            <h3 className='md:text-4xl text-2xl font-semibold text-white'>6
                                <span>+</span>
                            </h3>
                            <p className='text-xs md:text-base text-gray-300'><span>Projects</span></p>
                            
                        </div>
                        <div className='bg-gray-800/40 p-5 rounded-lg'>
                            <h3 className='md:text-4xl text-2xl font-semibold text-white'>1
                                <span>+</span>
                            </h3>
                            <p className='text-xs md:text-base text-gray-300'><span>Years of Experience</span></p>
                            
                        </div>
                        <div className='bg-gray-800/40 p-5 rounded-lg'>
                            <h3 className='md:text-4xl text-2xl font-semibold text-white'>10
                                <span>+</span>
                            </h3>
                            <p className='text-xs md:text-base text-gray-300'><span>Happy Clients</span></p> 
                        </div>
                </div>

            </div>

            <form 
                action="https://getform.io/f/bmdpeoya"
                method="POST"
                className='max-w-6xl p-5  md:p-12'
                id='form'
            >
                <p className='text-gray-100 font-bold text-xl mb-2'>Lets connect</p>
                <input type="text" 
                        id='name'
                        placeholder='Your Name... '
                        name='name'
                        className='mb-2 w-full rounded-md border border-purple-600 py-2 pl-2 pr-4'
                />
                 <input type="email" 
                        id='email'
                        placeholder='Your Email... '
                        name='email'
                        className='mb-2 w-full rounded-md border border-purple-600 py-2 pl-2 pr-4'
                />
                  <textarea  
                        id='textarea'
                        placeholder='Your Message... '
                        name='textarea'
                        cols="30"
                        rows="4"
                        className='mb-2 w-full rounded-md border border-purple-600 py-2 pl-2 pr-4'
                />
                <button 
                    type='submit'
                    className='w-full py-3 rounded-md bg-primary-color text-xl text-gray-100 hover:bg-purple-800 duration-300 font-semibold'
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
