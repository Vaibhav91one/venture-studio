import React from 'react'

type Props = {}

const JobDescription = (props: Props) => {
  return (
    <div className='w-full m-8'>
      <p className="text-slate-500">
        About the job
      </p>
      <div>
        <ul className="list-decimal mx-5 mt-3 space-y-1">
          <li className='text-lg'>
            Handle the UI/UX research design
          </li>
          <li className='text-lg'>
            Work on researching on latest web applications designs and trends
          </li>
          <li className='text-lg'>
            Work on conceptualizing and visualizing
          </li>
          <li className='text-lg'>
            Work on creating graphics content and other graphic related works
          </li>
        </ul>
      </div>

      <div className='mx-1'>
        <p className='mt-2 text-lg'>
          Benefits:
        </p>
        <ul className="list-disc mx-7 mt-1 space-y-1">
          <li className='text-lg'>
            Health insurance
          </li>
          <li className='text-lg'>
            Provident Fund
          </li>
        </ul>
      </div>

      <div className='mx-1'>
        <p className='mt-2 text-lg'>
          Schedule:
        </p>
        <ul className="list-disc mx-7 mt-1 space-y-1">
          <li className='text-lg'>
            Day Shift
          </li>
        </ul>
      </div>

      <div className='mx-1'>
        <p className='mt-2 text-lg'>
          Supplement pay types:
        </p>
        <ul className="list-disc mx-7 mt-1 space-y-1">
          <li className='text-lg'>
            Performance bonus
          </li>
          <li className='text-lg'>
            Yearly bonus
          </li>
        </ul>
      </div>
    
      <div className='mx-1'>
        <p className='mt-2 text-lg'>
          Work Location: In person
        </p>
      </div>

    </div>
  )
}

export default JobDescription