import Image from 'next/image'
import React from 'react'
import FigmaImage from "../../public/icons/figma.png"
import IllustratorImage from "../../public/icons/illustrator.png"
import XDImage from "../../public/icons/xd.png"

type Props = {}

const JobRequirements = (props: Props) => {
    return (
        <div className='flex flex-row items-start justify-between mt-6 flex-wrap'>
            <div className='m-8'>
                <p className="text-slate-500">
                    Skills Required
                </p>
                <ul className='flex flex-col items-start justify-center mt-4 space-y-2'>
                    <li className='flex flex-row justify-center items-center space-x-2 p-2 border-2 rounded-2xl'>
                        <Image
                            src={FigmaImage}
                            alt='image'
                            width={20}
                            height={20}
                        />
                        <p className='font-bold'>
                            Figma
                        </p>
                    </li>
                    <li className='flex flex-row justify-center items-center space-x-2 p-2 border-2 rounded-2xl'>
                        <Image
                            src={IllustratorImage}
                            alt='image'
                            width={20}
                            height={20}
                        />
                        <p className='font-bold'>
                            Adobe Illustrator
                        </p>
                    </li>
                    <li className='flex flex-row justify-center items-center space-x-2 p-2 border-2 rounded-2xl'>
                        <Image
                            src={XDImage}
                            alt='image'
                            width={20}
                            height={20}
                        />
                        <p className='font-bold'>
                            Adobe XD
                        </p>
                    </li>
                </ul>
            </div>
            <div className='m-8'>
                <p className="text-slate-500">
                    Preferred Language
                </p>
                <p className='font-bold'>
                    English
                </p>
            </div>
            <div className='m-8'>
                <p className="text-slate-500">
                    Type
                </p>
                <p className='font-bold'>
                    Full time
                </p>
            </div>
            <div className='m-8'>
                <p className="text-slate-500">
                    Years of Experience
                </p>
                <p className='font-bold'>
                    3+ Years of Experience
                </p>
            </div>
        </div>
    )
}

export default JobRequirements