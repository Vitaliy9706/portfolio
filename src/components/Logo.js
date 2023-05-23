import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'
import profilePic from '../../public/images/profile/photo-me.jpeg'

const MotionLink = motion(Link);

const Logo = () => {
  return (
    <div className='flex items-center justify-center mt-2'>
        <Link href="/"
        className='w-16 h-16  text-light flex items-center justify-center dark:border-primary border border-solid border-transparent rounded-full text-2xl font-bold mr-2'
        >
          <Image src={profilePic} alt="Vitaliy Oleinik" className='w-14 h-14 rounded-full' />
        </Link>
        <Link href="/" className="font-medium dark:text-white">
          <div>Vitaliy Oleinik</div>
        </Link>
    </div>
  )
}

export default Logo