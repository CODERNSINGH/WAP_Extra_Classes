"use client"
import React, { useContext } from 'react'
import { AuthContext } from '../context/auth'

export default function Dashboard() {

    const globalData = useContext(AuthContext)
    const isLoggedIn = globalData.isLoggedIn

    console.log(globalData)
    if (!isLoggedIn){
        return <>Please Login First</>
    }
  return (
    <div>
        <h1>Sher hai Narendra singh</h1>
        
    </div>
  )
}
