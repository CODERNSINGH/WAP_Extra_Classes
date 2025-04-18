"use client"
import React, { useContext, useEffect } from 'react'
import { AuthContext } from '@/app/context/auth'
import { useRouter } from 'next/navigation'
import { Logout } from '@/services/auth'

export default function Dashboard() {
    const router = useRouter()
    const { isLoggedIn, setIsLoggedIn, loading } = useContext(AuthContext)

    useEffect(() => {
        // If not logged in and not still loading, redirect to auth page
        if (!loading && !isLoggedIn) {
            router.push('/auth')
        }
    }, [isLoggedIn, loading, router])

    const handleLogout = async () => {
        try {
            await Logout()
            setIsLoggedIn(false)
            router.push('/auth')
        } catch (error) {
            console.error("Logout failed:", error)
        }
    }

    if (loading) {
        return <div className="flex justify-center items-center min-h-screen">Loading...</div>
    }

    if (!isLoggedIn) {
        return null // Don't render anything while redirecting
    }

    return (
        <div className="p-6">
            <h1 className="text-3xl font-bold mb-6">Dashboard</h1>
            <p className="mb-4">Welcome to your dashboard!</p>
            
            <button 
                onClick={handleLogout}
                className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
            >
                Logout
            </button>
        </div>
    )
}