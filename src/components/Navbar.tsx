import React from 'react'
import Image from 'next/image'
import { NAV_LINKS } from '@/constants'
import Link from 'next/link'
import { ArrowDown, ArrowDown01, ArrowDownNarrowWide, BaggageClaim, Bell, ChevronDown, Currency, DollarSign, Icon, LucideSquareArrowDown, LucideSquareSplitHorizontal, MessageCircleReply, MoveLeft, ShoppingBasket, ShoppingBasketIcon } from 'lucide-react'

type Props = {}

const Navbar = (props: Props) => {
    return (
        <nav className="flexBetween max-container relative z-30 p-4">
            <div>
                <p className="text-red-500 font-semibold bg-slate-200 px-5 py-4">
                    Logo
                </p>
            </div>

            <ul className="h-full hidden lg:gap-14 sm:flex">
                <div className='font-normal text-slate-400 flexCenter space-x-2 cursor-pointer mx-4 p-3 rounded-3xl transition-all hover:text-white hover:bg-red-500'>
                    <BaggageClaim />
                    <Link key={NAV_LINKS[0].key} href={NAV_LINKS[0].href}>
                        {NAV_LINKS[0].label}
                    </Link>
                </div>
                <div className='font-normal text-slate-500 flexCenter space-x-2 cursor-pointer mx-2 p-3 rounded-3xl transition-all hover:text-white hover:bg-red-500'>
                    <MessageCircleReply />
                    <Link key={NAV_LINKS[1].key} href={NAV_LINKS[1].href}>
                        {NAV_LINKS[1].label}
                    </Link>
                </div>
                <div className='font-normal text-slate-500 flexCenter space-x-2 cursor-pointer mx-2 p-3 rounded-3xl transition-all hover:text-white hover:bg-red-500'>
                    <DollarSign />
                    <Link key={NAV_LINKS[2].key} href={NAV_LINKS[2].href}>
                        {NAV_LINKS[2].label}
                    </Link>
                </div>
            </ul>

            <div className="flexCenter space-x-3">
                <Bell />
                <div className='rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 p-4' >
                </div>
                <ChevronDown/>
            </div>
        </nav>
    )
}

export default Navbar