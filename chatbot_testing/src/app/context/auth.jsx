"use client"

import { useEffect, useState, createContext } from "react"
import { isUserLoggedIn } from "@/helpers/auth"

export const AuthContext = createContext(null);

const AuthProvider = ({children}) => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // Check if user is logged in when component mounts
        const checkAuthStatus = () => {
            const loggedIn = isUserLoggedIn();
            setIsLoggedIn(loggedIn);
            setLoading(false);
        };
        
        checkAuthStatus();
    }, []);

    return (
        <AuthContext.Provider value={{isLoggedIn, setIsLoggedIn, loading}}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;