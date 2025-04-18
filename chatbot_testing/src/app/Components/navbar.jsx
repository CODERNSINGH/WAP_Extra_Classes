"use client"
import React, { useContext } from 'react'
import Link from 'next/link'
import { AuthContext } from '@/app/context/auth'
import { Logout } from '@/services/auth'
import { useRouter } from 'next/navigation'

export default function Navbar() {
  const { isLoggedIn, setIsLoggedIn } = useContext(AuthContext)
  const router = useRouter()

  const handleLogout = async () => {
    try {
      await Logout()
      setIsLoggedIn(false)
      router.push('/auth')
    } catch (error) {
      console.error("Logout failed:", error)
    }
  }

  return (
    <div>
      <nav className='flex justify-between items-center py-4 px-6 text-white bg-gray-800'> 
        <div>
          <h1 className='text-2xl font-bold'>MyApp</h1>
        </div>
        <ul className='flex gap-6'>
          <Link href='/' className="hover:text-gray-300">Home</Link>
          <Link href='/about' className="hover:text-gray-300">About</Link>
          {isLoggedIn && (
            <Link href='/Dashboard' className="hover:text-gray-300">Dashboard</Link>
          )}
        </ul>
        <div>
          {isLoggedIn ? (
            <button 
              onClick={handleLogout}
              className='bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded'
            >
              Logout
            </button>
          ) : (
            <Link 
              href='/auth'
              className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'
            >
              Login
            </Link>
          )}
        </div>
      </nav>
    </div>
  )
}