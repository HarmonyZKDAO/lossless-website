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
            <div className='grid'>

            </div>
            <a
              id='poolBtn'
              href='https://lossless-ui.vercel.app/'
              className='w-full rounded-lg border-2 text-slate900 border-green bg-green px-5 py-2 text-xl font-semibold hover:text-green hover:bg-darkened transition-colors duration-300 ease-in-out'
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
            <div className='mt-10'>
              <a
                href='https://github.com/HarmonyZKDAO/lossless-website'
                rel="noreferrer noopener nofollow"
                className='text-green hover:underline hover:text-green'
              >
                Learn about governance
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
