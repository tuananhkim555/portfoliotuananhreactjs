/* eslint-disable no-unused-vars */
import React from 'react'
import { FaGithubSquare, FaFacebook, FaInstagram, FaMapMarkerAlt, FaPhone, FaEnvelope } from 'react-icons/fa'
import Reveal from './Reveal'

const Footer = () => {
  return (
    <div className='max-w-[1300px] mx-auto p-6 md:p-12 mt-12 text-gray-200'>
      <div className='flex flex-col md:flex-row justify-between items-center gap-8'>
        <div className='space-y-4 text-center md:text-left'>
          <h3 className='text-3xl font-bold'>Tuan Anh Dev</h3>
          <div className='flex flex-row gap-6 text-4xl justify-center md:justify-start'>
            <a href="#" className='hover:text-purple-400 transition-colors'><FaGithubSquare/></a>
            <a href="#" className='hover:text-purple-400 transition-colors'><FaFacebook/></a>
            <a href="#" className='hover:text-purple-400 transition-colors'><FaInstagram/></a>
          </div>
        </div>
        <div className='space-y-4 text-center md:text-right'>
          <p className='flex items-center justify-center md:justify-end text-[16px]'>
            <FaMapMarkerAlt className='mr-2 text-purple-400' />
            Le Thuy - Quang Binh - Viet Nam
          </p>
          <p className='flex items-center justify-center md:justify-end text-[16px]'>
            <FaPhone className='mr-2 text-purple-400' />
            +(84).766.353.315
          </p>
          <p className='flex items-center justify-center md:justify-end text-[16px]'>
            <FaEnvelope className='mr-2 text-purple-400' />
            tuananhkim555@gmail.com
          </p>
        </div>
      </div>
      
      <div className='mt-8 pt-8 border-t border-purple-700 text-center'>
        <p className='text-gray-400 text-[16px]'>
          © 2024 Tuan Anh Dev. All rights reserved.
        </p>
      </div>
    </div>
  )
}

export default Footer
