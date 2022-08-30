import React from 'react'
import Link from 'next/link'

import PoolTogetherLogo from 'assets/images/pooltogether-logo.svg'

import LosslessLogo from 'assets/images/Lossless_logo.svg'

export const HeaderLogo = (props) => {
  return <>
    <div
      className='nav--pool-logo-container justify-start flex items-center truncate sm:w-1/3 mx-auto sm:mx-0'
    >
      <Link
        href='/'
        as='/'
        shallow
      >
        <a
          title={'Back to home'}
          className='pool-logo flex justify-center items-center border-0 trans w-auto'
        >
          <img src={LosslessLogo} className="w-56"/>
        </a>
      </Link>
    </div>
  </>
}
