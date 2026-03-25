import { useState } from "react";
import Project from "../components/Project";
import { myProjects } from "../components/constants";
import { motion, useMotionValue, useSpring } from "motion/react";
const Projects = () => {
  
  // Riquadro anteprima Progetto con mouse following
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { damping: 10, stiffness: 50 });
  const springY = useSpring(y, { damping: 10, stiffness: 50 });
  const handleMouseMove = (e) => {
    x.set(e.clientX + 20);
    y.set(e.clientY + 20);
  };
  
  const [preview, setPreview] = useState(null);
  return (
    <section id="projects"
      onMouseMove={handleMouseMove}
      className="relative c-space section-spacing"
    >
        <motion.p className='text-[#839cb5] sm:text-[18px] text-14-[px] uppercase tracking-wider text-center'
                               initial={{opacity: 0, y: 50}}
                               whileInView={{opacity: 1, y: 0}}
                               transition={{duration: 0.6, delay: 0.3}}
                               viewport={{ once: true }}
                               >What I've done so far</motion.p>
        <motion.h2 className='text-white font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px] text-center'
                               initial={{opacity: 0, y: 50}}
                               whileInView={{opacity: 1, y: 0}}
                               transition={{duration: 0.6, delay: 0.3}}
                               viewport={{ once: true }} 
                               >My Selected Projects</motion.h2>
      <div className="bg-gradient-to-r from-transparent via-neutral-700 to-transparent mt-12 h-[1px] w-full" />
      {myProjects.map((project) => (
        <Project key={project.id} {...project} setPreview={setPreview} />
      ))}

      {/* uncomment if you want to show project preview with mouse following */}
      
      {/* {preview && (
        <motion.img
          className="fixed top-0 left-0 z-50 object-cover h-56 rounded-lg shadow-lg pointer-events-none w-80"
          src={preview}
          style={{ x: springX, y: springY }}
        />
      )} */}
    </section>
  );
};

export default Projects;