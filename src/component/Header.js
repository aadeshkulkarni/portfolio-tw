import React from 'react'

const Header = () => {
  return (
    <div className="grid w-full h-32 grid-cols-2">
        <span className="flex items-center pl-16 ml-12 text-2xl font-semibold">Personal</span>
        <ul className="flex items-center justify-center">
            <li className="mx-6 text-orange-500 cursor-pointer">Home</li>
            <li className="mx-6 cursor-pointer">About Us</li>
            <li className="mx-6 cursor-pointer">Services</li>
            <li className="px-4 py-2 mx-6 border border-gray-800 rounded-md cursor-pointer">Contact Us</li>
        </ul>

    </div>
  )
}

export default Header