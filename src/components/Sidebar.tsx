import { Delete, DeleteIcon, Eye, LucideDelete, MessageSquare, Pencil, PersonStandingIcon, Trash, UserCheck, Users } from 'lucide-react'
import React from 'react'

type Props = {}

const Sidebar = (props: Props) => {
    return (
        <>
            <div className='flex flex-col space-y-4'>
                <div className='flex flex-row items-center justify-between space-x-4'>
                    <button className='flex flex-row space-x-2 items-center justify-between border-2 rounded-xl px-10 py-2 text-red-500 border-red-400'>
                        <Trash className='size-4' />
                        <p className='font-semibold'>
                            Delete job
                        </p>
                    </button>
                    <button className='flex flex-row space-x-2 items-center justify-between border-2 rounded-xl px-10 py-2 text-white bg-red-500 border-red-400'>
                        <Pencil className="size-4" />
                        <p className='font-semibold'>
                            Edit job
                        </p>
                    </button>
                </div>
                <div className='flex flex-col'>
                    <div className='flex flex-row items-center justify-between p-5 my-3 mx-2'>
                        <div className='flex flex-row items-center justify-between space-x-2'>
                            <Users className='size-5' />
                            <p>
                                Applicants
                            </p>
                        </div>
                        <p className='font-bold'>
                            400
                        </p>
                    </div>
                    <div className='flex flex-row items-center justify-between p-5 my-3 mx-2'>
                        <div className='flex flex-row items-center justify-between space-x-2'>
                            <UserCheck className='size-5' />
                            <p>
                                Matches
                            </p>
                        </div>
                        <p className='font-bold'>
                            100
                        </p>
                    </div>
                    <div className='flex flex-row items-center justify-between p-5 my-3 mx-2'>
                        <div className='flex flex-row items-center justify-between space-x-2'>
                            <MessageSquare className='size-5' />
                            <p>
                                Messages
                            </p>
                        </div>
                        <p className='font-bold'>
                            147
                        </p>
                    </div>
                    <div className='flex flex-row items-center justify-between p-5 my-3 mx-2'>
                        <div className='flex flex-row items-center justify-between space-x-2'>
                            <Eye className='size-5' />
                            <p>
                                Views
                            </p>
                        </div>
                        <p className='font-bold'>
                            800
                        </p>
                    </div>

                </div>
            </div>
        </>
    )
}

export default Sidebar