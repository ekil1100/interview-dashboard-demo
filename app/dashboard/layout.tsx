import { Separator } from '@/components/ui/separator'
import { SidebarNav } from './SidebarNav'

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
    return (
        <>
            <div className='hidden h-screen space-y-6 p-10 pb-16 md:block'>
                <div className='flex flex-col space-y-8 lg:flex-row lg:space-x-12 lg:space-y-0'>
                    <aside className='lg:w-1/5'>
                        <h2 className='mx-3 h-16 text-2xl font-bold tracking-tight'>
                            Gopher AI
                        </h2>
                        <SidebarNav items={sidebarNavItems} />
                    </aside>
                    <div className='flex-1'>{children}</div>
                </div>
            </div>
        </>
    )
}
