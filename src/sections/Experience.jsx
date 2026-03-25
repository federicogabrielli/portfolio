import React from 'react'
import { motion } from 'motion/react'
import { expCards } from '../components/constants'
import GlowCard from '../components/GlowCard'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import ScrollTrigger from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger);

const Experience = () => {
  useGSAP(()=> {
    gsap.utils.toArray('.timeline-card').forEach((card)=> {
      gsap.from(card, {
        xPercent: -100,
        opacity: 0,
        transformOrigin: 'left left',
        duration: 1,
        ease: 'power2.inOut',
        scrollTrigger: {
          trigger: card,
          start: 'top 80%',
        }
      })
    })

gsap.set('.gradient-line', {
  scaleY: 0,
  transformOrigin: 'top top',
});

gsap.to('.gradient-line', {
  scaleY: 1,
  ease: 'none',
  scrollTrigger: {
    trigger: '.timeline-wrapper',
    start: 'top center',
    end: '80% center',
    scrub: true,
  }
});

    gsap.utils.toArray('.expText').forEach((text)=> {
      gsap.from(text, {
        xPercent: 0,
        opacity: 0,
        duration: 1,
        ease: 'power2.inOut',
        scrollTrigger: {
          trigger: text,
          start: 'top 60%',
        }
      })
    })

    
  }, []);
  
  return (
    <section id='experience' className='relative c-space section-spacing'>
        <motion.h2 className='text-white font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px] text-center'
                               initial={{opacity: 0, y: 50}}
                               whileInView={{opacity: 1, y: 0}}
                               transition={{duration: 0.6, delay: 1}}
                               viewport={{ once: true }} 
                               >Work Experience</motion.h2>
        <div className='mt-32 relative'>
          <div className='relative z-50 xl:space-y-32 space-y-10'>
            {expCards.map((card, index)=> (
            <div key={card.title} className='exp-card-wrapper'>
                <div className='xl:w-2/6'>
                  <GlowCard card={card} index={index} >
                    <div>
                      <img src={card.imgPath} alt={card.title}/>
                    </div>
                  </GlowCard>
                </div>

                <div className='xl:w-4/6'>
                  <div className="flex items-start">
                    <div className="timeline-wrapper">
                      <div className="timeline" />
                        <div className="gradient-line w-1 h-full" />
                      </div>

                      <div className="expText flex xl:gap-20 md:gap-10 gap-5 relative z-20">
                        <div className="timeline-logo">
                         <img src={card.logoPath} alt="logo" />
                       </div>
                      <div>
                      <h1 className="font-semibold text-3xl">{card.title}</h1>
                      <p className="my-5 text-white">{card.date}</p>
                      <p className="text-[#839cb5] italic">Responsibilities</p>
                      <ul className="list-disc ms-5 mt-5 flex flex-col gap-5 text-white">
                        {card.responsibilities.map((responsibility) => (
                          <li key={responsibility} className="text-lg">{responsibility}</li>))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>))}


<div className="mt-10 flex flex-col items-center">
  <a
    href="assets/CV.pdf"
    download
    className="group cursor-pointer"
  >
    <motion.div className="cv-card rounded-xl p-8 text-center max-w-520px"
                initial={{opacity: 0, y: 50}}
                whileInView={{opacity: 1, y: 0}}
                transition={{duration: 1}}
                viewport={{ once: true }} >
      <h3 className="text-2xl font-semibold">RESUME</h3>
      <p className="text-neutral-300 mt-2">
        Click here to download the PDF version of my resume
      </p>
    </motion.div>
  </a>
</div>
                              
            
          </div>
        </div>  
    </section>
  )
}

export default Experience