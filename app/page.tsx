'use client'

import { useAuth } from './AuthProvider'

export default function Home() {
    const { isSignedIn, setIsSignedIn } = useAuth()
    return (
        <main>
            isSignedIn: {isSignedIn ? 'true' : 'false'}
            <button onClick={() => setIsSignedIn(true)}>signIn</button>
            <button onClick={() => setIsSignedIn(false)}>signOut</button>
        </main>
    )
}
