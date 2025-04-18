"use client"

import { Login, Signup } from '@/services/auth'
import { useRouter } from 'next/navigation'
import React, { useContext, useState } from 'react'
import { AuthContext } from '@/app/context/auth'

export default function Page() {
  const router = useRouter()
  const { setIsLoggedIn } = useContext(AuthContext)
  const [isLoginMode, setIsLoginMode] = useState(true)
  const [form, setForm] = useState({
    email: "",
    password: ""
  })
  const [error, setError] = useState("")
  const [loading, setLoading] = useState(false)

  function handleForm(e) {
    const { name, value } = e.target
    setForm(prev => ({ ...prev, [name]: value }))
  }

  async function handleSubmit(e) {
    e.preventDefault()
    setError("")
    setLoading(true)

    try {
      if (isLoginMode) {
        // Login flow
        const response = await Login({email: form.email, password: form.password})
        setIsLoggedIn(true)
        router.push('/Dashboard')
      } else {
        // Signup flow
        await Signup({email: form.email, password: form.password})
        // Auto login after signup
        const loginResponse = await Login({email: form.email, password: form.password})
        setIsLoggedIn(true)
        router.push('/Dashboard')
      }
    } catch (err) {
      setError(err.message || "Authentication failed")
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <div className="p-8 border rounded shadow-md w-96">
        <h1 className='text-3xl font-bold mb-6'>{isLoginMode ? 'Login' : 'Sign Up'}</h1>
        
        {error && <p className="text-red-500 mb-4">{error}</p>}
        
        <form onSubmit={handleSubmit} className="flex flex-col">
          <input
            className='border p-2 mb-4 rounded'
            type="email"
            name="email"
            placeholder='Enter Your Email'
            value={form.email}
            onChange={handleForm}
            required
          />
          <input
            className='border p-2 mb-6 rounded'
            type="password"
            name="password"
            placeholder='Password'
            value={form.password}
            onChange={handleForm}
            required
          />
          <button 
            type="submit" 
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            disabled={loading}
          >
            {loading ? 'Processing...' : isLoginMode ? 'Login' : 'Create Account'}
          </button>
        </form>
        
        <p className='mt-6 text-center'>
          {isLoginMode ? "Don't have an account?" : "Already have an account?"} 
          <button 
            className="text-blue-700 ml-2"
            onClick={() => setIsLoginMode(!isLoginMode)}
          >
            {isLoginMode ? 'Create Account' : 'Login'}
          </button>
        </p>
      </div>
    </div>
  )
}