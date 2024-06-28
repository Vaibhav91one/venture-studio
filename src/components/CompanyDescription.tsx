import React from 'react'
import AtlassianImage from '../../public/icons/atlassian.png'
import Image from 'next/image'

type Props = {}

const CompanyDescription = (props: Props) => {
  return (
    <div className='m-8'>
      <div className='flex flex-row items-center space-x-4'>
        <Image
          src={AtlassianImage}
          alt='image'
          width={50}
          height={50}
        />
        <p>
          Atlassian
        </p>
      </div>
      <div className='flex flex-col sm:grid grid-cols-2 grid-rows-3 gap-5'>
        <div className='flex flex-col items-start space-y-2 my-6'>
          <p className='text-slate-500'>
            Company size
          </p>
          <p className='font-semibold'>
            1k - 2k Employees
          </p>
        </div>
        <div className='flex flex-col items-start space-y-2 my-6'>
          <p className='text-slate-500'>
            Type
          </p>
          <p  className='font-semibold'>
            Private
          </p>
        </div>
        <div className='flex flex-col items-start space-y-2 my-6'>
          <p className='text-slate-500'>
            Sector
          </p>
          <p  className='font-semibold'>
            Information Technology, Infrastructure
          </p>
        </div>
        <div className='flex flex-col items-start space-y-2 my-6'>
          <p className='text-slate-500'>
            Funding
          </p>
          <p  className='font-semibold'>
            Bootstrapped
          </p>
        </div>
        <div className='flex flex-col items-start space-y-2 my-6'>
          <p className='text-slate-500'>
            Founded In
          </p>
          <p  className='font-semibold'>
            2019
          </p>
        </div>

        <div className='flex flex-col items-start space-y-2 my-6'>
          <p className='text-slate-500'>
            Founded By
          </p>
          <p  className='font-semibold'>
            Scott Farquhar, Mike Cannon-Brookes
          </p>
        </div>
      </div>
    </div>
  )
}

export default CompanyDescription