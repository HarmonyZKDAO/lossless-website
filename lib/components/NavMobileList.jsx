import * as React from 'react'
import classnames from 'classnames'
import { motion } from 'framer-motion'
import { NavMobileListItem } from 'lib/components/NavMobileListItem'

const variants = {
  open: {
    transition: { staggerChildren: 0.07, delayChildren: 0.1 }
  },
  closed: {
    transition: { staggerChildren: 0.05, staggerDirection: -1 }
  }
}

const links = [
  {
    label: 'Home',
    href: '/',
    as: '/'
  },
  {
    label: 'Developers',
    href: 'https://github.com/HarmonyZKDAO/lossless-website',
    as: 'https://github.com/HarmonyZKDAO/lossless-website'
  },
  {
    label: 'App',
    href: 'https://lossless-ui.vercel.app/',
    as: 'https://lossless-ui.vercel.app/'
  }
]

export const NavMobileList = (props) => (
  <motion.ul variants={variants} className={classnames('nav-mobile-list', props.className)}>
    {links.map((link, index) => (
      <NavMobileListItem
        toggleOpen={props.toggleOpen}
        link={link}
        index={index}
        key={`nav-mobile-listitem-${index}`}
      />
    ))}
  </motion.ul>
)
