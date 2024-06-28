import React from 'react'
import { MAIN_SECTION_TOGGLE } from '@/constants'
import InfoSection from './InfoSection'
import Sidebar from './Sidebar'

type Props = {}

const MainSection = (props: Props) => {
  return (
    <>
    <div className='max-container padding-container relative z-30 py-5'>

      <div className='flex items-start justify-start flex-wrap '>
        {MAIN_SECTION_TOGGLE.map((link) => (
          <p key={link.key} className='font-semibold border-b-2 border-white p-5 m-5 transition-all hover:text-red-500 hover:border-b-2 hover:border-red-500'>
            {link.label}
          </p>
        ))}

      </div>
      <div className='flex flex-col justify-between max-container lg:flex-row  relative z-30'>
        <div className='w-2/3'>
        <InfoSection />
        </div>
        <div>
        <Sidebar />
        </div>
      </div>
      </div>
    </>

  )
}

export default MainSection