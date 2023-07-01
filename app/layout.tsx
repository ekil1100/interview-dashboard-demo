'use client'

import './globals.css'
import { Inter } from 'next/font/google'
import { createContext, useState } from 'react'

const inter = Inter({ subsets: ['latin'] })

export const AuthContext = createContext({
    isSignedIn: false,
    setIsSignedIn: (isSignedIn: boolean) => {},
})

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    const [isSignedIn, setIsSignedIn] = useState(false)

    return (
        <html lang='en'>
            <body className={inter.className}>
                <AuthContext.Provider value={{ isSignedIn, setIsSignedIn }}>
                    {children}
                </AuthContext.Provider>
            </body>
        </html>
    )
}
