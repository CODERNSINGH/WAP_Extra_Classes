"use client"

import { Signup } from '@/services/auth'
import React, { useState } from 'react'

export default function Page() {
  const [form, setForm] = useState({
    email: "",
    password: ""
  })

  function handleForm(e) {
    const { name, value } = e.target
    setForm(prev => ({ ...prev, [name]: value }))
  }

  function handleSubmit(e) {
    e.preventDefault()
    <Signup/>
  }

  return (
    <div>
      <h1 className='text-3xl font-bold'>Sign Up</h1>
      <form onSubmit={handleSubmit}>
        <input
          className='border m-10'
          type="email"
          name="email"
          placeholder='Enter Your Email'
          value={form.email}
          onChange={handleForm}
        />
        <input
          className='border m-10'
          type="password"
          name="password"
          placeholder='Password'
          value={form.password}
          onChange={handleForm}
        />
        <button type="submit">Submit</button>
      </form>
      <p className='m-10'>
        Don't have an account? <a className="text-blue-700" href="/auth">Create Account</a>
      </p>
    </div>
  )
}
