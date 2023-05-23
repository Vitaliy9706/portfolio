import fs from 'fs'
import matter from 'gray-matter'
import md from 'markdown-it'
import Head from 'next/head'
import Layout from '@/components/Layout'
import AnimatedText from '@/components/AnimatedText'
import { motion } from 'framer-motion'
import TransitionEffect from '@/components/TransitionEffect'

export async function getStaticPaths() {
    const files = fs.readdirSync('posts');
    const paths = files.map((fileName) => ({
        params: {
            slug: fileName.replace('.md', '')
        }
    }))

    return {
        paths,
        fallback: false
    }
}

export async function getStaticProps({ params: { slug } }) {
    const fileName = fs.readFileSync(`posts/${slug}.md`, 'utf-8');
    const { data: frontmatter, content } = matter(fileName);
    return {
        props: {
            frontmatter,
            content
        }
    }
}

export default function PostPage({ frontmatter, content }) {
    return (
        <>
        <Head>
            <title>Vitaliy Oleinik | Blog</title>
            <meta name="description" content="Web developer in Abu Dhabi" />
        </Head>
        <TransitionEffect />
        <main className='flex w-full flex-col items-center justify-center mb-16'>
            <Layout className='pt-16 flex flex-col items-center'>
                <AnimatedText className='mb-16 lg:!text-7xl sm:!text-6xl xs:text-4xl sm:mb-8 dark:text-light' text={frontmatter.title} />
                <motion.div
                initial={{opacity:0, y:50}}
                animate={
                    {opacity:1,
                    y:0,
                    transition:{
                        duration:1,
                    }}
                }
                className="prose w-100 prose-img:rounded-xl prose-a:text-primary sm:text-base sm:w-full dark:prose-invert" dangerouslySetInnerHTML={{ __html: md().render(content) }} />

            </Layout>
        </main>
    
    </>
    )
}