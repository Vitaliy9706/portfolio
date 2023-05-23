import Link from 'next/link'
import React from 'react'
import Layout from './Layout'

const Footer = () => {
  return (
    <footer className='w-full border-t-2 border-solid border-dark dark:text-light dark:border-light font-medium text-lg sm:text-base'>
        <Layout className='py-8 flex items-center justify-between lg:flex-col lg:py-6'>
            <span>{new Date().getFullYear()} &copy; All rights reserved.</span>
            <Link href="https://vitaliy.digital" className='lg:py-2'>Vitaliy Oleinik</Link>
            <Link href="mailto:vitalya0602@gmail.com" className='underline underline-offset-2 text-primary'>Say hello</Link>
        </Layout>
    </footer>
  )
}

export default Footer