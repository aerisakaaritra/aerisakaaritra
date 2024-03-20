import React from 'react'
import { Link } from 'react-router-dom'
import { arrow } from'../assets/icons'


const InfoBox = ({ text, link, btnText}) => (
  <div className='info-box'>
    <p className='font-medium sm:text-xl text-center'>{ text }</p>
    <Link to={ link } className='neo-brutalism-white neo-btn'>
      { btnText }
      <img src={ arrow } className='w-4 h-4 object-contain' />
    </Link>
  </div>
)

const renderContent = {
  1: (
    <div className='sm:text-xl sm:leading-snug text-center neo-brutalism-blue py-4 px-8 text-white mx-5'>
      <h1>Hey, this is <span><b>Aritra Dhoni</b></span><br />full stack developer and cloud enthusisast 🌐☁️</h1>
    </div>
  ),
  2: (
    <InfoBox  
      text = 'Currently an undergad student of information technology at Manipal University Japiur'
      link = '/about'
      btnText = 'learn more'
    />
  ),
  3: (
    <InfoBox  
      text = 'Looking ahead to contribute by my side of my work. Completed innovative projects as part of my development'
      link = '/projects'
      btnText = 'visit my portfolio'
    />
  ),
  4: (
    <InfoBox  
      text = 'Looking ahead to work with me ??. Do not hesitate to contact me'
      link = '/contact'
      btnText = "Let's talk"
    />
  )

}

const HomeInfo = ({ currentStage }) => {
  return renderContent[currentStage] || null
}

export default HomeInfo
