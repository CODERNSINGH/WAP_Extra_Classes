import React from 'react'
// import './globals.css'
// import {a} from 'react-router'
export default function Navbar() {
  return (
    <div>
        <nav className='flex justify-evenly py-2 content-center text-white bg-gray-800'> 
            <div><h1 className='text-4xl'>MyApp</h1></div>
            <ul className='flex gap-20'>
                <a href='/'>Home</a>
                <a href='/about'>About</a>
                <a href='/Dashboard'>Dashboard</a>
                
            </ul>
            <a href='/auth' className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'>Login</a>
        </nav>
    </div>
  )
}
