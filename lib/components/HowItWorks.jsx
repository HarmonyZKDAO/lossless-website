import React from 'react'

const HowItWorksBox = (props) => {
  return (
    <>
      <div
        className={`bg-default rounded-lg shadow-xl trans how-it-works-box px-6 py-8 sm:px-8 sm:py-12 lg:pb-20 sm:-mx-8 mb-10 sm:mb-10 sm:max-w-1/3 lg:max-w-sm`}
      >
        <div className='flex items-center space-x-2 text-green'>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            width='40'
            height='40'
            viewBox='0 0 24 24'
            fill='none'
            stroke='currentColor'
            strokeWidth='2'
            strokeLinecap='round'
            strokeLinejoin='round'
            className='feather feather-check text-green'
          >
            <polyline points='20 6 9 17 4 12'></polyline>
          </svg>
          <div className='text-xl ml-12 font-bold'>
            {props.title}
          </div>
        </div>

        <div className='mt-5 text-xs xs:text-sm sm:text-base lg:text-xl'>{props.description}</div>
      </div>
    </>
  )
}

export const HowItWorks = () => {
  return (
    <>
      <div className='bg-howitworks-section py-20 px-32'>
        <h1 className='flex justify-center items-center leading-10 sm:leading-tight'>
          <div>How it works</div>
        </h1>
        {/* <div className='mt-10 space-y-5 ml-15'>
          <div className='bg-default rounded-lg p-5 sm:w-2/4'>
            <div className='flex space-x-2 text-xl'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                width='40'
                height='40'
                viewBox='0 0 24 24'
                fill='none'
                stroke='currentColor'
                strokeWidth='2'
                strokeLinecap='round'
                strokeLinejoin='round'
                className='feather feather-check text-green'
              >
                <polyline points='20 6 9 17 4 12'></polyline>
              </svg>
              <span className='text-green'>Get tickets</span>
            </div>
            <div className='text-lg ml-12'>
              Deposit into any prize pool and instantly get tickets.
            </div>
          </div>
          <div className='bg-default rounded-lg p-5 sm:w-2/4'>
            <div className='flex space-x-2 text-xl'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                width='40'
                height='40'
                viewBox='0 0 24 24'
                fill='none'
                stroke='currentColor'
                strokeWidth='2'
                strokeLinecap='round'
                strokeLinejoin='round'
                className='feather feather-check text-green'
              >
                <polyline points='20 6 9 17 4 12'></polyline>
              </svg>
              <span className='text-green'>Win prizes</span>
            </div>
            <div className='text-lg ml-12'>
              As long as you have deposits you're eligible to win prizes. Prizes are made up of the
              all the interest earned on deposited money in the pools.
            </div>
          </div>
          <div className='bg-default rounded-lg p-5 sm:w-2/4'>
            <div className='flex space-x-2 text-xl'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                width='40'
                height='40'
                viewBox='0 0 24 24'
                fill='none'
                stroke='currentColor'
                strokeWidth='2'
                strokeLinecap='round'
                strokeLinejoin='round'
                className='feather feather-check text-green'
              >
                <polyline points='20 6 9 17 4 12'></polyline>
              </svg>
              <span className='text-green'>Never lose</span>
            </div>
            <div className='text-lg ml-12'>
              Remove your deposit at anytime. As long as you stay in the pools you continue to be
              eligible to win.
            </div>
          </div>
        </div> */}

        <div className='mt-15'>
          <div className='pool-container mx-auto flex flex-col sm:flex-row justify-between'>
            <HowItWorksBox
              title='Get tickets'
              description='Deposit into any prize pool and instantly get tickets.'
            />

            <HowItWorksBox
              title='Win prizes'
              description={`As long as you have deposits you're eligible to win prizes. Prizes are made up of the all the interest earned on deposited money in the pools.`}
            />

            <HowItWorksBox
              title='Never lose'
              description='Remove your deposit at anytime. As long as you stay in the pools you continue to be eligible to win.'
            />
          </div>
        </div>
      </div>
    </>
  )
}
