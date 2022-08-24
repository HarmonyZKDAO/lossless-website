import React from 'react'

import { ButtonLink } from 'lib/components/ButtonLink'

export const IndexPoolToken = (props) => {
  return (
    <>
      <div id='token' className='bg-darkened text-center pt-12 pb-6 sm:pt-20 sm:pb-16'>
        <div className='pool-container mx-auto'>
          <h1 className='text-center'>
            <span
              role='img'
              aria-label='sparkles emoji'
              className='relative mx-2 text-2xl lg:text-3xl -t-1 lg:-t-2'
            >
              ✨
            </span>{' '}
            <span className='text-flashy'>POOL</span> Token{' '}
            <span
              role='img'
              aria-label='sparkles emoji'
              className='relative mx-2 text-2xl lg:text-3xl -t-1 lg:-t-2'
            >
              ✨
            </span>
          </h1>

          <p className='text-xl text-center mt-10 mx-auto lg:max-w-4xl'>
            The PoolTogether Protocol is controlled by POOL token holders.
            <br className='hidden lg:block' />
            &nbsp;All changes to the protocol are submitted and approved.
            <br className='hidden lg:block' />
            &nbsp;The protocol automatically distributes the POOL token to anyone who deposits into
            the protocol.
          </p>

          <div className='mt-10'>
            {/* <div className='sm:w-7/12 lg:w-1/2 sm:mx-auto my-6'>
              <ButtonLink
                textSize='xl'
                width='w-full'
                as={`https://app.pooltogether.com`}
                href={`https://app.pooltogether.com`}
              >
                Deposit to receive POOL tokens
              </ButtonLink>
            </div> */}
            <a
              id='poolBtn'
              href='https://lossless-ui.vercel.app/'
              className='w-full rounded-lg border-2 text-slate900 border-blue-2 bg-blue-2 px-5 py-2 text-xl font-semibold hover:text-blue-2 hover:bg-darkened transition-colors duration-300 ease-in-out'
            >
              Deposit to receive POOL tokens
            </a>
            {/* <div className='sm:w-7/12 lg:w-1/2 sm:mx-auto my-10'>
              <ButtonLink
                tertiary
                textSize='xl'
                width='w-full'
                as={`https://medium.com/p/fca9ab8b8ba2`}
                href={`https://medium.com/p/fca9ab8b8ba2`}
              >
                Learn about governance
              </ButtonLink>
            </div> */}
            <div className='flex justify-center items-center mt-10'>
              <a
                href='https://github.com/HarmonyZKDAO/lossless-website'
                rel='noreferrer noopener nofollow'
                className='text-blue-2 hover:underline hover:text-blue-2 w-max-content'
              >
                <div className='flex space-x-1'>
                  <span>Learn about governance</span>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    width='24'
                    height='24'
                    viewBox='0 0 24 24'
                    fill='none'
                    stroke='currentColor'
                    strokeWidth='2'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    className='feather feather-external-link'
                  >
                    <path d='M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6'></path>
                    <polyline points='15 3 21 3 21 9'></polyline>
                    <line x1='10' y1='14' x2='21' y2='3'></line>
                  </svg>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
