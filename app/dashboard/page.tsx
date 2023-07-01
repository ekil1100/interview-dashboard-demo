'use client'

import { Button } from '@/components/ui/button'
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from '@/components/ui/table'
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from '@/components/ui/dialog'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Switch } from '@/components/ui/switch'
import { useState } from 'react'
import { DialogClose } from '@radix-ui/react-dialog'
import { faker } from '@faker-js/faker'

const initialAgents = [
    {
        id: 1,
        name: 'Jane Cooper',
        status: 'Running',
    },
    {
        id: 2,
        name: 'Lakeisha Webb',
        status: 'Running',
    },
    {
        id: 3,
        name: 'kiehn.mae',
        status: 'Stopped',
    },
]

export default function Agents() {
    const [name, setName] = useState(faker.person.fullName())
    const [agents, setAgents] = useState(initialAgents)

    return (
        <>
            <div className='space-y-6'>
                <div className='flex justify-end'>
                    <Dialog>
                        <DialogTrigger asChild>
                            <Button>Add Agent</Button>
                        </DialogTrigger>
                        <DialogContent>
                            <DialogHeader>
                                <DialogTitle>Create Agent</DialogTitle>
                                <DialogDescription>
                                    Create a new agent to start accepting
                                    conversations
                                </DialogDescription>
                            </DialogHeader>
                            <div className='grid gap-4 py-4'>
                                <div className='grid grid-cols-4 items-center gap-4'>
                                    <Label
                                        htmlFor='name'
                                        className='text-right'
                                    >
                                        Name
                                    </Label>
                                    <Input
                                        id='name'
                                        type='text'
                                        value={name}
                                        className='col-span-3'
                                        onChange={(e) =>
                                            setName(e.target.value)
                                        }
                                    />
                                </div>
                            </div>
                            <DialogFooter>
                                <DialogClose asChild>
                                    <Button
                                        onClick={() => {
                                            setAgents([
                                                ...agents,
                                                {
                                                    id: agents.length + 1,
                                                    name: name,
                                                    status: 'Stopped',
                                                },
                                            ])
                                            setName(faker.person.fullName())
                                        }}
                                    >
                                        Create
                                    </Button>
                                </DialogClose>
                            </DialogFooter>
                        </DialogContent>
                    </Dialog>
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
                                <TableCell className='space-x-2 text-right'>
                                    <Dialog>
                                        <DialogTrigger asChild>
                                            <Button variant='outline' size='sm'>
                                                Edit
                                            </Button>
                                        </DialogTrigger>
                                        <DialogContent>
                                            <DialogHeader>
                                                <DialogTitle>
                                                    Edit Agent
                                                </DialogTitle>
                                            </DialogHeader>
                                            <div className='grid gap-4 py-4'>
                                                <div className='grid grid-cols-4 items-center gap-4'>
                                                    <Label
                                                        htmlFor='name'
                                                        className='text-right'
                                                    >
                                                        Name
                                                    </Label>
                                                    <Input
                                                        id='name'
                                                        type='text'
                                                        value={agent.name}
                                                        className='col-span-3'
                                                        onChange={(e) => {
                                                            agent.name =
                                                                e.target.value
                                                            setAgents([
                                                                ...agents,
                                                            ])
                                                        }}
                                                    />
                                                </div>
                                                <div className='grid grid-cols-4 items-center gap-4'>
                                                    <Label
                                                        htmlFor='status'
                                                        className='text-right'
                                                    >
                                                        Status
                                                    </Label>
                                                    <div className='flex items-center gap-2'>
                                                        <Switch
                                                            id='status'
                                                            checked={
                                                                agent.status ===
                                                                'Running'
                                                            }
                                                            className='col-span-3'
                                                            onCheckedChange={(
                                                                e,
                                                            ) => {
                                                                agent.status = e
                                                                    ? 'Running'
                                                                    : 'Stopped'
                                                                setAgents([
                                                                    ...agents,
                                                                ])
                                                            }}
                                                        />
                                                        <span className='text-sm'>
                                                            {agent.status}
                                                        </span>
                                                    </div>
                                                </div>
                                            </div>
                                            <DialogFooter>
                                                <DialogClose asChild>
                                                    <Button>Save</Button>
                                                </DialogClose>
                                            </DialogFooter>
                                        </DialogContent>
                                    </Dialog>
                                    <Button
                                        variant='destructive'
                                        size='sm'
                                        onClick={() => {
                                            setAgents(
                                                agents.filter(
                                                    (a) => a.id !== agent.id,
                                                ),
                                            )
                                        }}
                                    >
                                        Delete
                                    </Button>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </div>
        </>
    )
}
