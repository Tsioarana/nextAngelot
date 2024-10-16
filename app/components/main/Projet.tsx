import React from 'react'
import ProjectCard from '../sub/ProjectCard'

const Projet = () => {
  return (
    <div className='flex flex-col items-center justify-center py-20'>
        <h1 className='text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-20 '>
            My Project
        </h1>
        <div className='h-full w-full flex flex-col md:flex-row gap-10 px-10'>
            <ProjectCard
                src='/NextWebsite.png'
                title='modern nextjs portfolio'
                description='Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto, nobis.'
            />
            <ProjectCard
                src='/CardImage.png'
                title='modern nextjs portfolio'
                description='Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto, nobis.'
            />
            <ProjectCard
                src='/SpaceWebsite.png'
                title='modern nextjs portfolio'
                description='Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto, nobis.'
            />
        </div>
    </div>
  )
}

export default Projet
