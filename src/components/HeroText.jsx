import { FlipWords } from "./FlipWords"
import { motion } from "motion/react"

const HeroText = () => {
  return (
    <div className="z-10 mt-20 text-center md:mt-40 md:text-left rounded-3xl bg-clip-text">
        {/* DesktopView */}
        <div className="flex-col hidden md:flex c-space">
            <motion.h1 className="text-4xl font-medium"
                       initial={{opacity: 0, x: -50}}
                       animate={{opacity: 1, x: 0}}
                       transition={{delay: 1 }} >
            Hi, I am Federico Gabrielli</motion.h1>
            <div className="flex flex-col items-start">
              <motion.p className="text-5xl font-medium text-neutral-300"
                       initial={{opacity: 0, x: -50}}
                       animate={{opacity: 1, x: 0}}
                       transition={{delay: 1.2 }}
                       >A Mechanical Engineer </motion.p>
               <motion.p className="text-3xl font-light text-neutral-300"
                       initial={{opacity: 0, x: -50}}
                       animate={{opacity: 1, x: 0}}
                       transition={{delay: 1.4 }}
                       >dedicated to designing and modeling </motion.p>
              <motion.div 
                       initial={{opacity: 0, x: -50}}
                       animate={{opacity: 1, x: 0}}
                       transition={{delay: 1.6 }}
                       ><FlipWords words={["Precision-driven", "High-performance", "Reliable and Efficient"]} className="font-black text-white text-7xl"/></motion.div>
              <motion.p className="text-5xl font-medium text-neutral-300"
                       initial={{opacity: 0, x: -50}}
                       animate={{opacity: 1, x: 0}}
                       transition={{delay: 1.8 }}
                       >Mechanical Systems</motion.p>
            </div>
        </div>
        {/* MobileView */}
        <div className="flex- flex-col space-y-6 md:hidden">
          <motion.p className="text-4xl font-medium"
                       initial={{opacity: 0, x: -50}}
                       animate={{opacity: 1, x: 0}}
                       transition={{delay: 1 }}
                       >Hi, I am Federico Gabrielli</motion.p>
          <div>
            <motion.p className="text-2xl font-medium text-neutral-300"
                       initial={{opacity: 0, x: -50}}
                       animate={{opacity: 1, x: 0}}
                       transition={{delay: 1.2 }}
                       >Designing and Modeling</motion.p>
              <motion.div
                       initial={{opacity: 0, x: -50}}
                       animate={{opacity: 1, x: 0}}
                       transition={{delay: 1.5 }}
                       ><FlipWords words={["Precision-driven", "High-performance", "Reliable and Efficient"]}  className="font-bold text-white text-3xl"/></motion.div>
              <motion.p className="text-xl font-black text-neutral-300"
                       initial={{opacity: 0, x: -50}}
                       animate={{opacity: 1, x: 0}}
                       transition={{delay: 1.8 }}
                       >Mechanical Solutions</motion.p>
          </div>
        </div>
        </div>
  )
}

export default HeroText