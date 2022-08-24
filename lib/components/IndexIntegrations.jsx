import React, { useEffect } from 'react'
import classnames from 'classnames'
import { useInView } from 'react-intersection-observer'
import { motion, useAnimation } from 'framer-motion'

import { ButtonLink } from 'lib/components/ButtonLink'
import { GridItem } from 'lib/components/GridItem'

import BotSvg from 'assets/images/logo-ttbot@2x.png'
import DharmaSvg from 'assets/images/dharma-logo.png'
import ZerionSvg from 'assets/images/zerion.svg'
import ZapperFiSvg from 'assets/images/zapperfi.svg'

export const IndexIntegrations = () => {
  const controls = useAnimation()
  const [ref, inView] = useInView()

  useEffect(() => {
    if (inView) {
      controls.start('visible')
    }
  }, [controls, inView])

  const containerVariants = {
    visible: {
      transition: {
        staggerChildren: 0.2
      }
    },
    hidden: {}
  }

  return (
    <>
      <div className='bg-secondary'>
        <div className='pool-container mx-auto pt-12 pb-6 sm:pt-20 sm:pb-16'>
          <div className='bg-card rounded-xl mx-auto text-center p-4 xs:p-12 sm:pt-12 sm:pb-12 sm:mt-10'>
            <div className='flex flex-col items-center'>
              <h2 className='mt-4 mb-8 text-center'>Check out our developer documentation</h2>
              <p className='text-sm xs:text-lg sm:text-xl max-w-lg text-center'>
                Learn about the Lossless protocol and emerging use cases
              </p>

              {/* <ButtonLink
                secondary
                textSize='2xl'
                href='https://docs.pooltogether.com'
                as='https://docs.pooltogether.com'
                className='my-8 w-3/4 sm:w-1/2'
              >
                Go to docs
              </ButtonLink> */}
              <a
                href='https://github.com/HarmonyZKDAO/lossless-website'
                className='rounded-lg border-2 mt-5 hover:text-purple border-green hover:bg-green px-5 py-3 text-xl font-semibold text-green bg-default transition-colors duration-300 ease-in-out'
              >
                Go to Docs
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
