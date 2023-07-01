'use client'

import { useContext } from 'react'
import { AuthContext } from './layout'

export default function Home() {
    const { isSignedIn, setIsSignedIn } = useContext(AuthContext)
    return (
        <main>
            isSignedIn: {isSignedIn ? 'true' : 'false'}
            <button onClick={() => setIsSignedIn(true)}>signIn</button>
            <button onClick={() => setIsSignedIn(false)}>signOut</button>
        </main>
    )
}
