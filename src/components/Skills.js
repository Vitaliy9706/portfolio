import React from 'react'

import { skills } from '@/data'
import Image from 'next/image';

const Skills = () => {
  return (
    <>
        <h2 className='font-bold dark:text-light text-8xl mt-64 w-full text-center md:text-6xl md:mt-32'>Skills</h2>
        <div className='py-12 relative flex-items-center justify-center'>
          <div className='grid grid-cols-8 md:grid-flow-row md:grid-cols-4'>
            {skills.map((skill, index) => {
              return (
                <div>
                  <Image src={skill.image} alt="" />
                </div>
              );
            })}
          </div>
        </div>
    </>
  )
}

export default Skills