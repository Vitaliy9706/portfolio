import AnimatedText from '@/components/AnimatedText'
import Layout from '@/components/Layout'
import TransitionEffect from '@/components/TransitionEffect'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import project1 from '../../public/images/projects/norke1.png'
import project2 from '../../public/images/projects/realestate.png'
import project3 from '../../public/images/projects/mingespromogos.png'
import project4 from '../../public/images/projects/protec.png'
import project5 from '../../public/images/projects/tour.png'
import project6 from '../../public/images/projects/coffeeshop.png'
import project7 from '../../public/images/projects/lpmquiz.png'

const FeaturedProjects = ({type, title, summary, img, link}) => {
    return (
        <article className='w-full flex items-center justify-between rounded-3xl border border-solid border-dark dark:border-light p-12 lg:flex-col lg:p-8 xs:rounded-2xl xs:rounded-br-3xl xs:p-4'>
            <Link href={link} target="_blank" className='w-1/2 cursor-pointer overflow-hidden rounded-lg lg:w-full'>
                <Image src={img} alt={title} className="w-full h-auto" />
            </Link>
            <div className='w-1/2 flex flex-col items-start justify-between pl-6 lg:w-full lg:pl-0 lg:pt-6'>
                <span className='bg-primary text-white font-medium inline-flex items-center px-2.5 py-0.5 rounded dark:bg-primary-200 dark:text-primary-800 font-medium text-xl xs:text-base'>{type}</span>
                <Link href={link} target="_blank" className='hover:underline underline-offset-5'>
                    <h2 className='my-2 w-full text-left text-4xl dark:text-light font-bold sm:text-base'>{title}</h2>
                </Link>
                <p className='my-2 font-medium text-dark dark:text-light'>{summary}</p>
                <div className='mt-2 flex items-center'>
                    <Link href={link} target="_blank" className='rounded-lg bg-dark text-light dark:bg-light dark:text-dark p-2 px-6 text-lg font-semibold sm:px-4 sm:text-base'>Visit Project</Link>
                </div>
            </div>
        </article>
    )
}
const Project = ({type, title, img, link}) => {
    return (
        <article className='relative flex w-full flex-col items-center justify-center rounded-2xl  rounded-br-2xl  border  border-solid  border-dark bg-light p-6  shadow-2xl dark:border-light dark:bg-dark  xs:p-4 ">'>
            <Link href={link} target="_blank" className='w-full cursor-pointer overflow-hidden rounded-lg'>
                <Image src={img} alt={title} className="w-full h-auto rounded-t-lg" />
            </Link>
            <div className='w-full flex flex-col items-start justify-between mt-4 p-5'>
                <span className='bg-primary text-white font-medium inline-flex items-center px-2.5 py-0.5 rounded dark:bg-primary-200 dark:text-primary-800 font-medium'>{type}</span>
                <Link href={link} target="_blank" className='hover:underline underline-offset-5 pt-2'>
                    <h2 className='mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white'>{title}</h2>
                </Link>
                <div className='mt-2 flex items-center'>
                    <Link href={link} target="_blank" className='rounded-lg bg-dark dark:bg-light dark:text-dark text-light p-2 px-6 font-semibold'>Visit</Link>
                </div>
            </div>
        </article>
    )
}

const projects = () => {
  return (
    <>
        <Head>
            <title>Vitaliy Oleinik | Projects</title>
            <meta name="description" content="Web developer in Abu Dhabi" />
        </Head>
        <TransitionEffect />
        <main className='flex w-full flex-col items-center justify-center mb-16'>
            <Layout className='pt-16'>
                <AnimatedText className='mb-16 lg:!text-7xl sm:mb-8 sm:!text-6xl xs:!text-4xl' text="Your Imagination Is Unlimited" />

                <div className='grid grid-cols-12 gap-24 gap-y-32 xl:gap-x-16 lg:gap-x-8 md:gap-y-24 sm:gap-x-0'>
                    <div className='col-span-12'>
                        <FeaturedProjects 
                            title="Quiz system for LPM Resturants" 
                            summary="To track performance of the employees, LPM company has decided to order quiz system development, that will save time and automate routine.
                            It's compleatly custom solution, build with HTML, CSS, JavaScript, PHP and mySQL. This web app allows to register user, create quizes and assign quiz to a users, check the results straight
                            after completion, send an emails to the user."
                            link="https://onlinelpmtest.com/"
                            type="Featured project"
                            img={project7}

                        />
                    </div>
                    <div className='col-span-6 sm:col-span-12'>
                     <Project
                     title="Website for rental apartments" 
                     link="https://en.norke.ru/"
                     type="Wordpress"
                     img={project1}
                     />
                    </div>
                    <div className='col-span-6 sm:col-span-12'>
                    <Project
                     title="Real Estate Listing Website" 
                     link="https://garantia35.ru/"
                     type="Wordpress"
                     img={project2}
                     />
                    </div>
                    <div className='col-span-6 sm:col-span-12'>
                    <Project
                     title="Website with booking system" 
                     link="https://mingespramogos.lt/"
                     type="Wordpress"
                     img={project3}
                     />
                    </div>
                    <div className='col-span-6 sm:col-span-12'>
                    <Project
                     title="Coolant catalog" 
                     link="https://protec.kz/"
                     type="Wordpress"
                     img={project4}
                     />
                    </div>
                    <div className='col-span-6 sm:col-span-12'>
                    <Project
                     title="Travel servicies website" 
                     link="https://tourandaluz.com/"
                     type="Wordpress"
                     img={project5}
                     />
                    </div>
                    <div className='col-span-6 sm:col-span-12'>
                    <Project
                     title="Coffeeshop responsive landing page" 
                     link="https://coffeeshop.vitaliy.digital/"
                     type="Landing Page"
                     img={project6}
                     />
                    </div>

                </div>
            </Layout>
        </main>
    
    </>
  )
}

export default projects