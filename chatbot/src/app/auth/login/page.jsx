"use client"

import { Login, Signup } from '@/services/auth'
import React, { useState } from 'react'

export default function Page() {
  const [form, setForm] = useState({
    email: "",
    password: ""
  })

  function handleForm(e) {
    setForm({
        ...form,[e.target.name]:e.target.value,
    });
  }

  async function handleSubmit(e) {
    try {
      e.preventDefault()

      const response = await Login(form)

      // Check if the response is JSON
      if (response.headers.get('content-type')?.includes('application/json')) {
        const data = await response.json()
        const { token } = data
        localStorage.setItem("Token", token)
      } else {
        throw new Error("Unexpected response format")
      }
    } catch (err) {
      alert(err.message || "An error occurred")
      console.log(err)
    }
  }

  return (
    <div>
      <h1 className='text-3xl font-bold'>Log In</h1>
      <h1></h1>
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
