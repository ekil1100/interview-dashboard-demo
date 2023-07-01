'use client'

import { redirect } from 'next/navigation'
import { useAuth } from './AuthProvider'
import { useLayoutEffect } from 'react'

export default function Home() {
    const { isSignedIn } = useAuth()

    useLayoutEffect(() => {
        if (isSignedIn) {
            redirect('/dashboard')
        } else {
            redirect('/signIn')
        }
    }, [])
}
