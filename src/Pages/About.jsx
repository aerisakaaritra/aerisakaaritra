import React from 'react'
import { skills, experiences } from '../constants'
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component'
import 'react-vertical-timeline-component/style.min.css'
import CTA from '../components/CTA'

const About = () => {
  return (
    <section className='max-container'>

      <h1 className='head-text'>Hi again, this is <span className='blue-gradient_text font-semibold drop-shadow'>Aritra Dhoni</span></h1>

      <div className='mt-5 flex flex-col gap-3 text-slate-500'>
        <p>Pursuing my computer science degree from Manipal University Jaipur specializing in Dynamic Website Development and Cloud Computing. Altough these hands-on learning helped me developing several Application, Still gaining my proficiency at it's best.</p>
      </div>

      <div className='py-10 flex flex-col'> {/*skills div starts here*/}
        <h3 className='subhead-text'>Skills</h3>

        <div className='flex mt-16 flex-wrap gap-12'>
          {skills.map((skill) => (
            <div className='block-container w-20 h-20' key={skill.name}>

              <div className='btn-back rounded-xl'/>
              <div className='btn-front rounded-xl flex justify-center items-center'>
                <img src={skill.imageUrl} alt={skill.imageUrl} className='w-1/2 h-1/2 object-contain' />
              </div>

            </div>
          ))}
        </div>
      </div>

      {/* Expirience div starts here */}
      {/* <div className='py-16'>
        <h3>Experience</h3>

        <div className='mt-5 flex flex-col gap-3 text-slate-500'>
          <p>Here are the expirince I've gained during my preparation phase. Still leveling up my skills and myself and looking ahead to learn
            with smart people.😊
          </p>
        </div>

        the rundown div animation
        <div className='mt-12 flex'>
          <VerticalTimeline>
            {experiences.map((experience) => (
              <VerticalTimelineElement 
                key={experience.company_name}
                date={experience.date}
                icon={
                  <div className='flex justify-center items-center w-full h-full'>
                    <img
                      src={experience.icon}
                      alt={experience.company_name}
                      className= 'w-[60%] h-[60%] object-contain' 
                    />
                  </div>
                }
                contentStyle={{
                  borderBottom: '8px',
                  borderStyle: 'solid',
                  borderBottomColor: experience.iconBg,
                  boxShadow: 'none'
                }}
              >
                <div>
                  <h3 className='text-black text-xl font-poppins font-semibold'>
                    {experience.title}
                  </h3>
                  <p className='text-black font-medium font-base' style={{margin: 0}}>
                    {experience.company_name}
                  </p>
                </div>

                <ul className='my-5 list-disc ml-5 space-y-2'>
                  {experience.points.map((points, index) => (
                    <li key={`experience-point-${index}`} className='text-black-500/50 font-normal pl-1 text-sm'>{points}</li>
                  ))} 
                </ul>
              </VerticalTimelineElement>
            ))}
          </VerticalTimeline>
        </div>
      </div> */}

      <hr className='border-slate-200'/>

      <CTA />
    </section>
  )
}

export default About