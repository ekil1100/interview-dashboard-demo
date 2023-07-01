'use client'

import { redirect } from 'next/navigation'
import { useAuth } from './AuthProvider'

export default function Home() {
    const { isSignedIn } = useAuth()

    if (isSignedIn) {
        redirect('/dashboard')
    } else {
        redirect('/signIn')
    }
}
