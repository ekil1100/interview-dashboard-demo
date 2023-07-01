import { createContext, useContext, useLayoutEffect, useState } from 'react'

export const AuthContext = createContext({
    isSignedIn: false,
    setIsSignedIn: (isSignedIn: boolean) => {},
})

export function AuthProvider({ children }: { children: React.ReactNode }) {
    const [isSignedIn, setter] = useState<boolean>(false)

    function setIsSignedIn(isSignedIn: boolean) {
        localStorage.setItem('isSignedIn', isSignedIn.toString())
        setter(isSignedIn)
    }

    useLayoutEffect(() => {
        setter(localStorage.getItem('isSignedIn') === 'true')
    }, [])

    return (
        <AuthContext.Provider value={{ isSignedIn, setIsSignedIn }}>
            {children}
        </AuthContext.Provider>
    )
}

export function useAuth() {
    return useContext(AuthContext)
}
