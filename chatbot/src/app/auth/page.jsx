"use client"

import React, { useState } from 'react'

export default function page() {
  const [form,setForm] = useState({
    email:"",
    password:""
  })

  function handleForm(e){
    setForm(e.target.values)
    console.log(form)
    
  }
  function handleSubmit(){
    console.log(form)
  }
  return (
    <div>
        <h1 className='text-3xl font-bold'>Sign Up</h1>
        <form onChange={handleForm} onSubmit={handleSubmit}>
            <input className='border m-10' type="email" placeholder='Enter Your Email'/>
            <input className='border m-10' type="password" placeholder='Password'/>
            <button type='sumit'>Submit</button>
        </form>
        <p className='m-10'>don't have account? <a className="text-blue-700" href="/auth">Create Account</a></p>
        
    </div>
  )
}
