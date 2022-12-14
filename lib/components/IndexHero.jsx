import React, { useState } from 'react'
import { ReactFitty } from 'react-fitty'

import { ButtonLink } from 'lib/components/ButtonLink'
import { TVLAndWeeklyPrizesBanner } from 'lib/components/TVLAndWeeklyPrizesBanner'
import { WistiaPlayer } from 'lib/components/WistiaPlayer'
import { IndexHeroFeaturedIn } from 'lib/components/IndexHeroFeaturedIn'
import { IndexHowItWorks } from 'lib/components/IndexHowItWorks'
import { HowItWorks } from './HowItWorks'

import Squiggle from 'assets/images/squiggle.svg'
import SquiggleMobile from 'assets/images/squiggle-mobile.svg'

export const IndexHero = (props) => {
  const [playVideo, setPlayVideo] = useState(false)

  const startVideo = (e) => {
    e.preventDefault()
    setPlayVideo(true)

    setTimeout(() => {
      setPlayVideo(false)
    }, 500)
  }

  return (
    <>
      <div className='relative pt-10'>
        <div className='pool-container pb-10 md:pb-20 flex flex-col sm:flex-row justify-between pt-12 mx-auto'>
          <div className='flex justify-center items-center relative hero-text-left mb-12 sm:mb-0'>
            <div className='w-3/4 xs:w-7/12 sm:w-full mx-auto'>
              <ReactFitty className='font-bold leading-none text-center'>
                <span className='text-flashy'>Save, pool funds,</span>
              </ReactFitty>

              <ReactFitty className='mt-2 font-bold leading-none text-center'>
                <span className='text-flashy'>& win prizes together</span>
              </ReactFitty>

              <div className='my-12'>
                <p className='text-lg'>
                  Lossless is an open source and decentralized protocol for no-loss prize games
                </p>
              </div>

              <div className='flex justify-center items-center text-center'>
                <a
                  id='poolBtn'
                  href='https://lossless-ui.vercel.app/'
                  className='w-full rounded-lg border-2 text-slate900 border-blue-2 bg-blue-2 px-5 py-2 text-xl font-semibold hover:text-blue-2 hover:bg-slate900 transition-colors duration-300 ease-in-out'
                >
                  Join the Pool
                </a>
              </div>
            </div>
          </div>

          <div>
            <button
              onClick={startVideo}
              className='bg-vid-holo flex items-start justify-center trans'
              role='img'
            >
              <div className='bg-vid-holo--inner flex items-center justify-center'>
                <WistiaPlayer play={playVideo} />

                <div className='bg-vid-circle rounded-full flex items-center justify-center hover:bg-highlight-2 trans'>
                  <div className='bg-vid-tri' />
                </div>
              </div>
            </button>
          </div>
        </div>

        {/* <TVLAndWeeklyPrizesBanner /> */}

        {/* <IndexHeroFeaturedIn /> */}

        <div className='my-10'>
          <HowItWorks />
          {/* <IndexHowItWorks /> */}
        </div>

        {/* <div className='pool-container text-center relative flex flex-col sm:flex-row mt-10 mb-16 sm:my-20 mx-auto'>
          <div className='bg-card rounded-xl mx-auto w-full sm:w-full py-8 sm:py-8 lg:px-12 lg:py-12 text-center sm:text-left'>
            <h1 className='text-center'>PoolTogether</h1>

            <img src={Squiggle} className='hidden xs:block mx-auto my-4' />
            <img src={SquiggleMobile} className='xs:hidden mx-auto my-4' />

            <div className='text-xs sm:text-2xl text-center mt-7'>
              is an open source and decentralized
              <br /> protocol for no-loss prize games
            </div>
          </div>
        </div> */}
      </div>
    </>
  )
}
