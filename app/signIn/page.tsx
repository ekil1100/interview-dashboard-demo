import { Button } from '@/components/ui/button'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'

function SignIn() {
    return (
        <main className='grid h-screen place-content-center gap-4'>
            <Avatar className='h-28 w-28'>
                <AvatarImage src='https://github.com/shadcn.png' />
                <AvatarFallback>CN</AvatarFallback>
            </Avatar>
            <Button>Sign In</Button>
        </main>
    )
}

export default SignIn
