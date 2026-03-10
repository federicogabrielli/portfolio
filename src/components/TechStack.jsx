import React from 'react'
import { techStackIcons } from './constants'
import TechIcon from './Models/TechLogos/TechIcon'

const TechStack = () => {
  return (
    <div className='w-full h-full md:px-10 px-5'>
        <div className='tech-grid'>
            {techStackIcons.map((icon)=> (
                <div key={icon.name} className='card-border tech-card overflow-hidden group xl:rounded-full rouded-lg'></div> ))}
                <div className='tech-card animated-bg' />
            <div className='tech-card content'>
                <div className='tech-icon-wrapper'>
                    <TechIcon model={icon} />
                </div>
            </div>
        </div>
    </div>
  )
}

export default TechStack