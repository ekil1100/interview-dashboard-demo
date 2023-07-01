'use client'

import { SidebarNav } from './SidebarNav'
import { useAuth } from '../AuthProvider'
import { redirect } from 'next/navigation'
import { LogOut } from 'lucide-react'
import { Button } from '@/components/ui/button'

const sidebarNavItems = [
    {
        title: 'Agents',
        href: '/dashboard',
    },
    {
        title: 'Settings',
        href: '/dashboard/settings',
    },
]

export default function DashboardLayout({
    children,
}: {
    children: React.ReactNode
}) {
    const { isSignedIn, setIsSignedIn } = useAuth()

    if (!isSignedIn) {
        redirect('/signIn')
    }

    return (
        <>
            <div className='hidden h-screen space-y-6 p-10 pb-16 md:block'>
                <div className='flex flex-col space-y-8 lg:flex-row lg:space-x-12 lg:space-y-0'>
                    <aside className='lg:w-1/5'>
                        <h2 className='mx-3 mb-8 flex items-center justify-between text-2xl font-bold tracking-tight'>
                            Gopher AI
                            <span>
                                <Button
                                    variant='outline'
                                    size='icon'
                                    onClick={() => setIsSignedIn(false)}
                                >
                                    <LogOut className='h-4 w-4' />
                                </Button>
                            </span>
                        </h2>
                        <SidebarNav items={sidebarNavItems} />
                    </aside>
                    <div className='flex-1'>{children}</div>
                </div>
            </div>
        </>
    )
}
