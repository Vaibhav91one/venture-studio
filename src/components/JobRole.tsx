import React from 'react'
import { CircleDollarSign, Coins, Dot, LocateIcon, MapPin } from 'lucide-react'

type Props = {}

const JobRole = (props: Props) => {
    return (
        <div className='flex flex-col justify-center items-start m-8'>
            <div className='flex flex-col md:items-center md:flex-row md:space-x-5 space-y-5 mb-4'>
                <p className='text-4xl font-bold text-wrap'>
                    Senior Product Designer
                </p>
                <div className='flex flex-row items-center space-x-3 pb-5'>
                <p className="text-slate-400 text-nowrap text-xs">
                    posted 2 days ago
                </p>
                <div className='flex flex-row items-center justify-center w-fit px-2  text-center bg-green-50 text-green-600 rounded-3xl border-2 border-green-300'>
                    <Dot className="text-slate-500" />
                    <p className='text-xs font-semibold text-center'>
                        Open
                    </p>
                </div>
                </div>
               

            </div>
            <div className='flex flex-row space-x-3'>
                <div className='flex flex-row items-center justify-center space-x-2 text-slate-500'>
                    <MapPin />
                    <p>Delaware, USA</p>
                </div>
                <Dot className='text-slate-500' />
                <div className='flex flex-row items-center justify-center space-x-2 text-slate-500'>
                    <CircleDollarSign />
                    <p>$300k-$400k</p>
                </div>
            </div>
        </div>
    )
}

export default JobRole