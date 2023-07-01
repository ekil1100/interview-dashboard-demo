import { createContext, useContext, useState } from 'react'

export const AuthContext = createContext({
    isSignedIn: false,
    setIsSignedIn: (isSignedIn: boolean) => {},
})

export function AuthProvider({ children }: { children: React.ReactNode }) {
    const [isSignedIn, setIsSignedIn] = useState(false)

    return (
        <AuthContext.Provider value={{ isSignedIn, setIsSignedIn }}>
            {children}
        </AuthContext.Provider>
    )
}

export function useAuth() {
    return useContext(AuthContext)
}
