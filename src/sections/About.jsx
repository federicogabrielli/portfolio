import React from 'react'
import { motion } from 'motion/react'
import { useMediaQuery } from 'react-responsive'


const About = () => {
    const isMobile = useMediaQuery({maxWidth: 853 });
    const text = `I am a Mechanical engineer with experience in the development and optimisation of complex mechanical systems, from concept definition to modeling, verification and testing. Strong background in 3D design and FEM validation, with hands-on collaboration with R&D teams and external partners within structured, multidisciplinary product development environments.`
  return (
    <section id='about' className='max-w-7xl mx-auto px-6 mt-20'>
    <motion.p className='text-[#839cb5] sm:text-[18px] text-14-[px] uppercase tracking-wider text-center'
                       initial={{opacity: 0, y: 50}}
                       whileInView={{opacity: 1, y: 0}}
                       transition={{duration: 0.6}}
                       viewport={{ once: true }}
                       >Introduction</motion.p>
    <motion.h2 className='text-white font-black md:text-[60px] sm:-[50px] xs:text-[40px] text-[30px] text-center'
                       initial={{opacity: 0, y: 50}}
                       whileInView={{opacity: 1, y: 0}}
                       transition={{duration: 0.6, delay: 0.3}}
                       viewport={{ once: true }} 
                       >Overview <span className="font-serif">&</span> Key Skills</motion.h2>


    <motion.p
      className={`text-neutral-300 mt-4 text-[17px] text-justify ${
        isMobile ? "px-11" : "px-28"
      }`}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      {text.split("").map((char, i) => (
        <motion.span
          key={i}
          variants={{
            hidden: { opacity: 0 },
            visible: { opacity: 1 }
          }}
          transition={{ delay: i * 0.007 }}
        >
          {char}
        </motion.span>
      ))}
    </motion.p>
    </section>
  )
}

export default About