import { createContext, useContext, useState } from 'react'

export const AuthContext = createContext({
    isSignedIn: localStorage.getItem('isSignedIn') === 'true',
    setIsSignedIn: (isSignedIn: boolean) => {},
})

export function AuthProvider({ children }: { children: React.ReactNode }) {
    const [isSignedIn, setter] = useState(
        localStorage.getItem('isSignedIn') === 'true',
    )

    function setIsSignedIn(isSignedIn: boolean) {
        localStorage.setItem('isSignedIn', isSignedIn.toString())
        setter(isSignedIn)
    }

    return (
        <AuthContext.Provider value={{ isSignedIn, setIsSignedIn }}>
            {children}
        </AuthContext.Provider>
    )
}

export function useAuth() {
    return useContext(AuthContext)
}
