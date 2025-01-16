'use client'

import { motion, useAnimation, Variant } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { useEffect } from 'react'

interface ScrollAnimationProps {
  children: React.ReactNode
  direction?: 'up' | 'down' | 'left' | 'right' | 'fade'
}

const variants = {
  hidden: {
    opacity: 0,
    x: 0,
    y: 0
  },
  visible: {
    opacity: 1,
    x: 0,
    y: 0
  }
}

export function ScrollAnimation({ children, direction = 'up' }: ScrollAnimationProps) {
  const controls = useAnimation()
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  useEffect(() => {
    if (inView) {
      controls.start('visible')
    }
  }, [controls, inView])

  let initial = { ...variants.hidden }

  switch (direction) {
    case 'up':
      initial.y = 50
      break
    case 'down':
      initial.y = -50
      break
    case 'left':
      initial.x = 50
      break
    case 'right':
      initial.x = -50
      break
    case 'fade':
      // No change needed, just fades in
      break
  }

  return (
    <motion.div
      ref={ref}
      animate={controls}
      initial={initial}
      variants={variants}
      transition={{ duration: 0.5, ease: 'easeOut' }}
    >
      {children}
    </motion.div>
  )
}

