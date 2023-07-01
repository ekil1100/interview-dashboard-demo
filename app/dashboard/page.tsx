import { Button } from '@/components/ui/button'
import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from '@/components/ui/table'

const agents = [
    {
        id: '1',
        name: 'Jane Cooper',
        status: 'Running',
    },
    {
        id: '2',
        name: 'Lakeisha Webb',
        status: 'Idle',
    },
    {
        id: '3',
        name: 'kiehn.mae',
        status: 'Stopped',
    },
]

export default function Agents() {
    return (
        <div className='space-y-6'>
            <div className='flex justify-end'>
                <Button>Add Agent</Button>
            </div>
            <Table>
                <TableHeader>
                    <TableRow>
                        <TableHead className='w-[400px]'>Name</TableHead>
                        <TableHead>Status</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {agents.map((agent) => (
                        <TableRow key={agent.id}>
                            <TableCell className='font-medium'>
                                {agent.name}
                            </TableCell>
                            <TableCell>{agent.status}</TableCell>
                            <TableCell className='text-right'>
                                <Button variant='outline' size='sm'>
                                    Edit
                                </Button>
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </div>
    )
}
