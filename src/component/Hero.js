/* eslint-disable jsx-a11y/alt-text */
import React from 'react'

const Hero = () => {
  return (
    <div className='grid w-full grid-cols-2 p-8'>
      <div className='flex flex-col justify-center p-8'>
        <h1 className='p-4 pl-12 font-bold tracking-wide text-7xl title'>Hy! I Am</h1>
        <h1 className='p-4 pl-12 font-bold tracking-wide text-orange-400 text-7xl title'>Aadesh Kulkarni</h1>
        <p className='p-4 pl-12 text-lg leading-8'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the</p>
        <div className='flex items-center justify-between p-4 pl-12'>
          <button className='w-48 px-8 py-4 text-xl font-semibold tracking-wide text-white rounded-md shadow-lg cursor-pointer hover:from-orange-700 hover:via-yellow-700 hover:to-orange-700 bg-gradient-to-r from-orange-500 via-yellow-500 to-orange-400 shadow-orange-500/50'>
            Hire Me
          </button>
          <button className='w-64 px-8 py-4 text-xl font-semibold tracking-wide text-black border border-orange-500 rounded-md cursor-pointer bg-gradient-to-r hover:from-orange-500 hover:via-yellow-500 hover:to-orange-400 hover:text-white'>
            Download CV
          </button>
        </div>
        <div className='grid grid-cols-4 p-4 mt-8 border-t border-b border-gray-100'>
          <div className='flex flex-col items-center justify-center'>
            <span className='p-2 text-3xl font-bold'>100+</span>
            <span className='p-2 text-sm text-gray-400 uppercase'>Projects completed</span>
          </div>
          <div className='flex flex-col items-center justify-center'>
            <span className='p-2 text-3xl font-bold'>5+</span>
            <span className='p-2 text-sm text-gray-400 uppercase'>Years Experience</span>
          </div>
          <div className='flex flex-col items-center justify-center'>
            <span className='p-2 text-3xl font-bold'>12</span>
            <span className='p-2 text-sm text-gray-400 uppercase'>Awards</span>
          </div>
          <div className='flex flex-col items-center justify-center'>
            <span className='p-2 text-3xl font-bold'>72+</span>
            <span className='p-2 text-sm text-gray-400 uppercase'>Happy Clients</span>
          </div>
        </div>
      </div>
      <div className='relative flex flex-col items-center justify-center'>
        <img src='facebook.svg' className='absolute w-20 p-2 bg-white border border-gray-200 rounded-full cursor-pointer hover:animate-ping top-24 left-36' />
        <img src='linkedin.svg' className='absolute w-20 p-2 bg-white border border-gray-200 rounded-full cursor-pointer hover:animate-ping top-8 right-32' />
        <img src='twitter.svg' className='absolute w-20 p-2 bg-white border border-gray-200 rounded-full cursor-pointer bottom-20 right-36 hover:animate-ping' />
        <img src='face.png' />
      </div>
    </div>
  )
}

export default Hero
