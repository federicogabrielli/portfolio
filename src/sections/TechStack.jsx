import React from 'react'
import { techStackIcons } from '../components/constants'
import TechIcon from '../components/Models/TechLogos/TechIcon'
import { techStackImgs } from '../components/constants';
import { motion } from 'motion/react';

const TechStack = () => {
  return (
    <div className='w-full h-full md:px-10 px-5'>
        <motion.div className='tech-grid'
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true }}
                    variants={{
                        hidden: {},
                        show: {
                          transition: {
                            delayChildren: 1,
                            staggerChildren: 0.18 }}}}>
           {techStackImgs.map((techStackIcon, index) => (
            <motion.div
              key={index}
              className="card-border tech-card overflow-hidden group xl:rounded-full rounded-lg"
              variants={{
              hidden: { opacity: 0, filter: "blur(6px)"},
              show: { opacity: 1, filter: "blur(0px)"}}}
              transition={{ duration: 0.5, ease: "easeOut" }}>
              <div className="tech-card-animated-bg"
                   style={{ "--hover-height": techStackIcon.hoverHeight }} />
              <div className="tech-card-content">
                <div className="tech-icon-wrapper">
                  <img src={techStackIcon.imgPath} alt="" />
                </div>
                <div className="w-full flex justify-center">
                  <p>{techStackIcon.name}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
  );
};

export default TechStack