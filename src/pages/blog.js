import AnimatedText from '@/components/AnimatedText'
import Layout from '@/components/Layout'
import Head from 'next/head'
import React from 'react'
import fs from 'fs'
import matter from 'gray-matter'
import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'
import TransitionEffect from '@/components/TransitionEffect'

export async function getStaticProps() {
    //Get all posts
    const files = fs.readdirSync('posts');
    const posts = files.map((fileName) => {
        const slug = fileName.replace('.md', '');
        const readFile = fs.readFileSync(`posts/${fileName}`, 'utf-8');
        const { data: frontmatter } = matter(readFile);

        return {
            slug,
            frontmatter
        }
    })

    return {
        props: {
            posts
        }
    }
}

const blog = ({ posts }) => {
  return (
    <>
        <Head>
            <title>Blog | Vitaliy Oleinik</title>
            <meta name="description" content="Read a blog of web developer in Abu Dhabi" />
        </Head>
        <TransitionEffect />
        <main className='flex w-full flex-col items-center justify-center mb-16'>
            <Layout className='pt-16'>
                <AnimatedText className='mb-16 lg:!text-7xl sm:!text-6xl xs:text-4xl sm:mb-8' text="Read some usefull content" />
                <motion.div
                initial={{opacity:0, y:50}}
                animate={
                    {opacity:1,
                    y:0,
                    transition:{
                        duration:1,
                    }}
                } 
                className="grid gap-8 grid-cols-2 sm:grid-cols-1">
                    {posts.map(({ slug, frontmatter }) => (
                        <article key={slug} className="p-6 bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
                                <div className="flex justify-between items-center mb-5 text-gray-500">
                                    <span className="bg-primary text-white text-xs font-medium inline-flex items-center px-2.5 py-0.5 rounded dark:bg-primary-200 dark:text-primary-800">
                                        {frontmatter.tags}
                                    </span>
                                    <span className="text-sm">{frontmatter.date}</span>
                                </div>
                                <h2 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white"><Link href={`/blog/${slug}`}>{frontmatter.title}</Link></h2>
                                <p className="mb-5 font-light text-gray-500 dark:text-gray-400">{frontmatter.shortDesc}</p>
                                <div className="flex justify-between items-center">
                                    <div className="flex items-center space-x-4">
                                        <span className="font-medium dark:text-white">
                                            Vitaliy Oleinik
                                        </span>
                                    </div>
                                    <Link href={`/blog/${slug}`} className="inline-flex items-center font-medium text-primary-600 dark:text-primary-500 hover:underline dark:text-light">
                                        Read more
                                        <svg className="ml-2 w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                                    </Link>
                                </div>
                            
                                
                            
                        </article>
                    ))}                
                </motion.div> 
                



            </Layout>
        </main>
    
    </>
  )
}

export default blog