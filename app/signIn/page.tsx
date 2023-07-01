'use client'

import { Button } from '@/components/ui/button'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { useAuth } from '../AuthProvider'
import { redirect } from 'next/navigation'

function SignIn() {
    const { isSignedIn, setIsSignedIn } = useAuth()

    if (isSignedIn) {
        redirect('/dashboard')
    }

    return (
        <main className='grid h-screen place-content-center gap-4'>
            <Avatar className='h-28 w-28'>
                <AvatarImage src='https://github.com/shadcn.png' />
                <AvatarFallback>Like</AvatarFallback>
            </Avatar>
            <Button
                onClick={() => {
                    setIsSignedIn(true)
                    redirect('/dashboard')
                }}
            >
                Sign In
            </Button>
        </main>
    )
}

export default SignIn
