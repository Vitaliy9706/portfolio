import AnimatedText from '@/components/AnimatedText'
import HireMe from '@/components/HireMe'
import { LinkArrow } from '@/components/Icons'
import Layout from '@/components/Layout'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import profilePic from '../../public/images/profile/photo-me.jpeg'
import threedPic from '../../public/images/profile/3d1.png'
import rocketPic from '../../public/images/profile/rocket.png'
import lightBulb from '../../public/images/svgs/miscellaneous_icons_1.svg'
import { motion } from 'framer-motion'
import TransitionEffect from '@/components/TransitionEffect'


export default function Home() {
  return (
    <>
      <Head>
        <title>Vitaliy Oleinik | Web Developer in Abu Dhabi</title>
        <meta name="description" content="I am a skilled web developer based in Abu Dhabi, specializing in creating engaging and user-friendly websites. I will help you increase your sales" />
      </Head>
      <TransitionEffect />
      <main className='flex items-center text-dark w-full min-h-screen dark:text-light'>
        <Layout className='pt-0 md:pt-12 sm:pt-0'>
          <div className='flex items-center justify-between w-wull lg:flex-col'>
            <motion.div
            initial={{opacity:0, y:50}}
            animate={
                {opacity:1,
                y:0,
                transition:{
                    duration:1,
                }}
            } 
            className='w-1/2 md:w-full flex flex-col justify-center items-center self-center'>
              <Image src={threedPic} alt="Vitaliy Oleinik" className='w-full h-auto rounded-2xl lg:hidden md:inline-block md:w-full' />
            </motion.div>
            <div className='w-1/2 flex flex-col items-center self-center lg:w-full lg:text-center'>
              <AnimatedText text="Hello! I'm Vitaliy a web developer based in Abu Dhabi 🇦🇪" className='!text-6xl text-left  xl:!text-5xl lg:!text-center lg:!text-6xl md:!text-5xl sm:!text-3xl' />
              <p className='my-4 text-base font-medium  '>
                With a passion for crafting beautiful and functional web applications, I specialize in delivering exceptional digital experiences that drive results for my clients. Whether you need a stunning corporate website, an e-commerce platform, or a custom web application, I have the skills and expertise to bring your vision to life.
              </p>
              <div className='flex items-center self-start mt-2 lg:self-center'>
                <Link href="/myResume.pdf" target={"_blank"} 
                className="flex items-center bg-dark text-light p-2.5 px-6 rounded-lg text-lg dark:bg-light hover:dark:bg-dark hover:dark:text-light hover:dark:border-light dark:text-dark font-semibold hover:bg-light hover:text-dark 
                border-solid border-2 border-transparent hover:border-dark md:p-2 md:px-4 md:text-base">
                  Resume 
                </Link>
                <Link href="mailto:vitalya0602@gmail.com" className='ml-4 text-lg font-medium capitalize  text-primary underline md:text-base'>Contact</Link>
              </div>
            </div>
          </div>
        </Layout>

        <HireMe />
        <div className='absolute right-8 bottom-8 inline-block w-[16rem] lg:w-[8rem] md:hidden'>
          <Image src={rocketPic} alt="Vitaliy Oleinik" className='w-full h-auto' />
        </div>
      </main>
    </>
  )
}
