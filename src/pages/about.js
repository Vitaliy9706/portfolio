import AnimatedText from '@/components/AnimatedText'
import Layout from '@/components/Layout'
import Skills from '@/components/Skills'
import Experience from '@/components/Experience'
import { useInView, useMotionValue, useSpring } from 'framer-motion'
import Head from 'next/head'
import Image from 'next/image'
import React, { useEffect, useRef } from 'react'
import profilePic from '../../public/images/profile/photo-me.jpeg'
import TransitionEffect from '@/components/TransitionEffect'

const AnimatedNumbers = ({value}) => {
const ref = useRef(null);

const motionValue = useMotionValue(0);
const springValue = useSpring(motionValue, { duration: 3000 })
const isInView = useInView(ref, {once: true});

useEffect(() => {
    if(isInView){
        motionValue.set(value);
    }
}, [isInView, value, motionValue])

useEffect(() => {
    springValue.on("change", (latest) => {
        if(ref.current && latest.toFixed(0) <= value ){
            ref.current.textContent = latest.toFixed(0);
        }
    })
}, [springValue, value])

    return <span ref={ref}></span>
}

const about = () => {
  return (
    <>
    <Head>
        <title>About Me | Vitaliy Oleinik</title>
        <meta name="description" content="I'm Vitaliy, a web developer in Abu Dhabi. I can build you e-commerce platform, landing page or any other project that you can imagine" />
    </Head>
    <TransitionEffect />
    <main className='flex w-full flex-col items-center justify-center'>
        <Layout className='pt-16'>
            <AnimatedText text="Let me tell you about myself" className='mb-16 lg:!text-7xl sm:!text-6xl xs:text-4xl sm:mb-8' />
            <div className='grid w-full grid-cols-8 gap-16 sm:gap-8'>
                <div className='col-span-3 flex flex-col items-start justify-start xl:col-span-4 md:order-2 md:col-span-8'>
                    <h2 className='mb-4 text-lg font-bold uppercase text-dark/75 dark:text-light/75'>About Me</h2>
                    <p className='font-medium dark:text-light'>
                    I'm Vitaliy, a dedicated and experienced web developer based in Abu Dhabi. With a strong background in web development 
                    and a keen eye for design, I strive to create visually appealing and highly functional websites that leave a lasting 
                    impression on users.
                    </p>
                    <h3 className='mt-4 text-lg font-bold uppercase text-dark/75 dark:text-light/75'>My Journey</h3>
                    <p className='my-4 font-medium dark:text-light'>
                    I discovered my passion for web development during my early college years. The ever-evolving nature of technology fascinated 
                    me, and I quickly realized the immense potential of the internet as a platform for innovation and growth. 
                    Determined to make a mark in the digital world, I embarked on a journey to master various web technologies and develop 
                    my skills as a web developer.
                    </p>
                </div>
                <div
                className='col-span-2 relative h-auto rounded-2xl border-2 border-solid border-dark dark:border-light bg-light dark:bg-dark p-8 xl:col-span-4 md:col-span-8 md:order-1'>
                    <div className='absolute top-0 -right-3 -z-10 w-[102%] h-[103%] rounded-[2rem] bg-dark dark:bg-light' />
                    <Image src={profilePic} alt="Vitaliy Oleinik - web developer" className='w-full h-auto rounded-2xl' />
                </div>
                <div className='col-span-2 flex flex-col items-end justify-between xl:col-span-8 xl:flex-row xl:items-center md:order-3'>
                    <div className='flex flex-col items-end justify-center xl:items-center'>
                        <span className='inline-block dark:text-light text-7xl font-bold md:text-6xl sm:text-5xl xs:text-4xl'>
                            <AnimatedNumbers value={15} />+
                        </span>
                        <h2 className='text-xl font-medium capitalize text-dark/75 dark:text-light/75 xl:text-center md:text-lg sm:text-base xs:text-sm'>satisfied clients</h2>
                    </div>
                    <div className='flex flex-col items-end justify-center xl:items-center'>
                        <span className='inline-block dark:text-light text-7xl font-bold md:text-6xl sm:text-5xl xs:text-4xl'>
                        <AnimatedNumbers value={20} />+
                        </span>
                        <h2 className='text-xl font-medium capitalize text-dark/75 dark:text-light/75 xl:text-center md:text-lg sm:text-base xs:text-sm'>completed projects</h2>
                    </div>
                    <div className='flex flex-col items-end justify-center xl:items-center'>
                        <span className='inline-block dark:text-light text-7xl font-bold md:text-6xl sm:text-5xl xs:text-4xl'>
                        <AnimatedNumbers value={3} />+
                        </span>
                        <h2 className='text-xl font-medium capitalize text-dark/75 dark:text-light/75 xl:text-center md:text-lg sm:text-base xs:text-sm'>years of experience</h2>
                    </div>
                </div>
            </div>
            <Skills />
        </Layout>
    </main>
    
    </>
  )
}

export default about