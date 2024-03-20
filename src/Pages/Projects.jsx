import React from 'react'
import { projects } from '../constants'
import { Link } from 'react-router-dom'
import { arrow } from '../assets/icons'
import CTA from '../components/CTA'

const Projects = () => {
  return (
    <section className='max-container'>

      <h1 className='head-text'>My <span className='blue-gradient_text font-semibold drop-shadow'>Projects</span></h1>

      <div className='mt-5 flex flex-col gap-3 text-slate-500'>
        <p>Here are some handful of projects developed by using my proficient skills. My continious contribution to technical field defines my advanced working and integrating skills. Therefore specialized in Web Development and Cloud Solutions.
        They are open-source, feel free to explore the codebase and contribute your ideas for enhancements.
        Collaboration in highly appreciated!!🤝.
        </p>
      </div>

      <div className='flex flex-wrap my-20 gap-16'>
        {projects.map((project) => (
          <div className='lg:w-[400px] w-full' key={project.name}>
            <div className='block-container w-12 h-12'>
              <div className={`btn-back rounded-xl ${project.theme}`}/>

              <div className='btn-front flex rounded-xl justify-center items-center'>
                <img 
                  src={project.iconUrl} 
                  alt='project icon' 
                  className='w-1/2 h-1/2 object-contain'
                />
              </div>
            </div>

            <div className='flex flex-col mt-5'>
              <h4 className='text-2xl font-poppins font-semibold'>{project.name}</h4>
              <p className='m-2 text-slate-500'>{project.description}</p>
              <div className='items-center mt-5 flex gap-2 font-poppins'>
                <Link to={project.link} target='_blank' rel='noopener noreferrer' className='font-semi-bold text-blue-600'>
                  Live Link
                </Link>
                <img src={arrow} alt="arrow" className='w-4 h-4 object-contain'/>
              </div>
            </div>
          </div>
        ))}
      </div>

      <hr className='border-slate-200'/>

      <CTA />
    </section>
  )
}

export default Projects