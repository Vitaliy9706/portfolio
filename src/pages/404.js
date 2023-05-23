import Link from 'next/link'
import Layout from '@/components/Layout'
import Head from 'next/head'
import TransitionEffect from '@/components/TransitionEffect'
import { motion } from 'framer-motion'
import Image from 'next/image'
import threedPic from '../../public/images/profile/404-computer.svg'

const NotFound = () => {
    return (
        <>
      <Head>
        <title>Vitaliy Oleinik | Web Developer in Abu Dhabi</title>
        <meta name="description" content="Welcome to my portfolio website. I am a skilled web developer based in Abu Dhabi, specializing in creating engaging and user-friendly websites. Browse through my projects and contact me to discuss your web development needs." />
      </Head>
      <TransitionEffect />
      <main className='flex items-center text-dark w-full min-h-screen dark:text-light'>
        <Layout className='pt-0 md:pt-12 sm:pt-0'>
          <div className='flex flex-col items-center justify-between w-wull'>
            <motion.div
            initial={{opacity:0, y:50}}
            animate={
                {opacity:1,
                y:0,
                transition:{
                    duration:1,
                }}
            } 
            className='w-1/4 md:w-full flex flex-col justify-center items-center self-center'>
              <Image src={threedPic} alt="Vitaliy Oleinik" className='w-full h-auto rounded-2xl lg:hidden md:inline-block md:w-full' />
            </motion.div>
            <div class="mx-auto max-w-screen-sm text-center">
                <h1 className="mb-4 text-7xl tracking-tight font-extrabold lg:text-9xl text-primary-600 dark:text-primary-500">404</h1>
                <p className="mb-4 text-3xl tracking-tight font-bold text-gray-900 md:text-4xl dark:text-white">Something's missing.</p>
                <p className="mb-8 text-lg font-light text-gray-500 dark:text-gray-400">Sorry, we can't find that page. You'll find lots to explore on the home page. </p>
                <Link href="/" className="bg-dark text-light p-2.5 px-6 rounded-lg text-lg dark:bg-light hover:dark:bg-dark hover:dark:text-light hover:dark:border-light dark:text-dark font-semibold hover:bg-light hover:text-dark 
                border-solid border-2 border-transparent hover:border-dark md:p-2 md:px-4 md:text-base">Back to Homepage</Link>
            </div>
          </div>
        </Layout>
      </main>
    </>
    );
}

export default NotFound