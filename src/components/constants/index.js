export const myProjects = [
  
  {
    id: 1,
    title: "Experimental and Numerical Analysis of Damped Flexure Mechanisms",
    description:
       "Designed and experimentally characterized additively manufactured titanium flexure blades impregnated with viscoelastic material to enhance passive damping in precision compliant mechanisms.",
    subDescription: [
      "Optimized design of additively manufactured titanium lattice flexure blades for passive vibration damping.",
      "Developed experimental test benches for free and forced oscillation measurements using laser vibrometry and accelerometers.",
      "Processed vibration data in Python to extract damping ratios and frequency response functions.",
      "Developed and validated multiphysics FEM models in COMSOL to correlate experimental and numerical dynamic behavior."
    ],
    href: "/assets/csem.pdf",
    logo: "",
    image: "/assets/testbench.png",
    tags: [
      {
        id: 1,
        name: "COMSOL",
        path: "/assets/logos/COMSOL.png",
      },
      {
        id: 2,
        name: "Solidworks",
        path: "/assets/logos/solidworks.png",
      },
      {
        id: 3,
        name: "python",
        path: "/assets/logos/python.svg",
      },
    ],
  },

  {
    id: 2,
    title: "Design of a Perpetual Calendar Watch Mechanism",
    description:
       "Designed and analyzed a mechanical perpetual calendar complication, focusing on precision mechanisms and horological engineering.",
    subDescription: [
      "Designed the kinematic architecture of a perpetual calendar mechanism capable of automatically accounting for varying month lengths.",
      "Developed detailed mechanical components and transmission systems for date, month, and leap-year indications.",
      "Analyzed the interaction between gears, cams, and levers to ensure reliable operation over long-term cycles.",
      "Applied principles of precision engineering and horological mechanics to achieve accurate and robust mechanism behavior."
    ],
    logo: "",
    image: "/assets/QP.png",
    tags: [
      {
        id: 1,
        name: "Fusion360",
        path: "/assets/logos/fusion.svg",
      },
      {
        id: 2,
        name: "Ansys",
        path: "/assets/logos/ANSS.svg",
      },
    ],
  },
  
  {
    id: 3,
    title: "Design of a Gyro Tourbillon",
    description:
      "Designed and assembled a fully parametric CAD model of a gyro tourbillon mechanism, including structural analysis of critical components.",
    subDescription: [
      "Developed a complete CAD model of a gyro tourbillon mechanism using CATIA, including detailed modeling of gears, cages, and structural components.",
      "Organized and modeled more than 60 interconnected mechanical parts, building a full hierarchical assembly structure.",
      "Performed dimensional analysis and precision measurements to ensure proper alignment and kinematic compatibility of components.",
      "Conducted finite element analysis (FEA) on critical parts to evaluate stress distribution and structural performance under operational loads."
    ],
    href: "/assets/Slides.pdf",
    logo: "",
    image: "/assets/Gyrotourbillon.png",
    tags: [
      {
        id: 1,
        name: "AutoCAD",
        path: "/assets/logos/autocad.svg",
      },
      {
        id: 2,
        name: "Catia",
        path: "/assets/logos/Catia.png",
      },
    ],
  },

  {
    id: 4,
    title: "Design of a Soda Gun",
    description:
       "Designed and optimized a smart soda dispensing system through concept design, parametric CAD modeling, and structural analysis.",
    subDescription: [
      "Developed the functional architecture of a smart soda dispensing system using functional analysis and morphological design methods.",
      "Designed the full mechanical layout of the soda gun including fluid selection mechanisms and ergonomic handling components.",
      "Implemented parametric CAD modeling and surface design techniques to enable flexible configuration of system components.",
      "Performed structural analysis and topology optimization using FEA to reduce material usage while maintaining mechanical integrity."
    ],
    href: "/assets/SodaGun.pdf",
    logo: "",
    image: "/assets/Sodagun.png",
    tags: [
      {
        id: 1,
        name: "Python",
        path: "/assets/Solid_Edge.png",
      },
      {
        id: 2,
        name: "Fenics",
        path: "/assets/Altair.png",
      },
    ],
  },

{
    id: 5,
    title: "Multifield Finite Element Implementation of Elastoplasticity",
    description:
      "Developed an automated finite element framework for elastoplastic material modeling using the theory of Generalized Standard Materials and a multifield variational formulation.",
    subDescription: [
      "Derived elastoplastic constitutive equations from thermodynamic energy potentials within the Generalized Standard Materials framework.",
      "Implemented a multifield finite element formulation solving displacement, internal variables, and thermodynamic forces simultaneously.",
      "Developed the computational framework in Python using FEniCSx, UFL, Basix and PETSc for automated PDE discretization and nonlinear solving.",
      "Validated the framework through numerical simulations of thick-walled pressure vessels under elastoplastic loading."
    ],
    href: "/assets/Thesis.pdf",
    logo: "",
    image: "/assets/ETH-pic.png",
    tags: [
      {
        id: 1,
        name: "Python",
        path: "/assets/logos/python.svg",
      },
      {
        id: 2,
        name: "Fenics",
        path: "/assets/fenics.png",
      },
    ],
  },

  {
    id: 6,
    title: "Digital Filter Design for Noise Reduction in Audio Signals",
    description:
      "Designed and compared digital filters to remove noise from an audio signal through frequency-domain analysis and signal processing techniques.",
    subDescription: [
      "Analyzed the frequency spectrum of a noisy audio signal in MATLAB to identify useful signal bands and noise frequencies.",
      "Designed and implemented Butterworth and Chebyshev IIR filters to attenuate high-frequency noise components.",
      "Developed FIR low-pass filters using windowing and frequency-sampling methods, optimizing filter order for performance and computational cost.",
      "Validated filter performance through MATLAB simulations and Simulink models using spectrum analysis and signal comparison."
    ],
    href: "/assets/Digital_Signal_Processing.pdf",
    logo: "",
    image: "/assets/Simulink.png",
    tags: [
      {
        id: 1,
        name: "MatLab",
        path: "/assets/logos/Matlab.png",
      },
      {
        id: 2,
        name: "Simulink",
        path: "/assets/simulink-logo.png",
      },
    ],
  },
  
  {
    id: 7,
    title: "CFD Analysis of NACA Airfoil",
    description:
      "Performed computational fluid dynamics simulations to analyze the aerodynamic behavior of a NACA airfoil under varying angles of attack.",
    subDescription: [
      "Developed a CFD model of a NACA airfoil within a structured computational domain, including mesh generation and turbulence modeling.",
      "Simulated airflow around the airfoil for multiple angles of attack to analyze velocity fields, pressure distribution, and wake development.",
      "Evaluated aerodynamic performance through lift and drag coefficient monitoring and pressure coefficient analysis.",
      "Identified the stall angle by comparing lift coefficient trends across simulations and validating convergence through residual analysis."
    ],
    href: "/assets/NACA.pdf",
    logo: "",
    image: "/assets/CFD.png",
    tags: [
      {
        id: 1,
        name: "CCM",
        path: "/assets/ccm-logo.webp",
      },
    ],
  },

  {
    id: 8,
    title: "Embedded Motor Control using Arduino Microcontroller",
    description:
      "Developed an embedded control system using an Arduino microcontroller to regulate motor speed through PWM signals and sensor-based feedback.",
    subDescription: [
      "Implemented motor speed control using PWM signals generated by Timer2 on an Arduino Uno (ATmega328P).",
      "Programmed direct register access (TCCR2A, TCCR2B, OCR2A, DDRB, PORTD) to configure timers and digital I/O at low level.",
      "Integrated a TMP36 temperature sensor and analog-to-digital conversion to dynamically adjust motor speed.",
      "Designed a control interface using a slide switch and RGB LED to provide operational modes and temperature-based visual feedback."
    ],
    href: "/assets/Microcontroller.pdf",
    logo: "",
    image: "/assets/microcontroller.png",
    tags: [
      {
        id: 1,
        name: "Arduino",
        path: "/assets/Arduino_Logo.png",
      },
    ],
  },

  {
    id: 9,
    title: "State-Space Modeling and Control of Aircraft Dynamics",
    description:
      "Developed a state-space model of aircraft longitudinal dynamics and designed a feedback controller to analyze stability and control response.",
    subDescription: [
      "Linearized a nonlinear aircraft longitudinal dynamics model using Jacobian matrices to obtain a state-space representation.",
      "Analyzed system stability and natural modes through eigenvalue analysis, identifying short-period and long-period oscillatory dynamics.",
      "Simulated aircraft response to elevator inputs in Simulink to study dynamic behavior across different excitation frequencies.",
      "Designed a state feedback controller using pole placement (Ackermann’s formula) to stabilize the system and reject disturbances."
    ],
    href: "/assets/Modeling.pdf",
    logo: "",
    image: "/assets/modes2.jpg",
    tags: [
      {
        id: 1,
        name: "MatLab",
        path: "/assets/logos/Matlab.png",
      },
      {
        id: 2,
        name: "Simulink",
        path: "/assets/simulink-logo.png",
      },
    ],
  },

];


const navLinks = [
  {
    name: "Home",
    link: "#home",
  },
   {
    name: "About",
    link: "#about",
  },
   {
    name: "Projects",
    link: "#projects",
  },
  {
    name: "Experience",
    link: "#experience",
  },
  {
    name: "Contact",
    link: "#contact",
  },
];

const words = [
  { text: "Ideas", imgPath: "/images/ideas.svg" },
  { text: "Concepts", imgPath: "/images/concepts.svg" },
  { text: "Designs", imgPath: "/images/designs.svg" },
  { text: "Code", imgPath: "/images/code.svg" },
  { text: "Ideas", imgPath: "/images/ideas.svg" },
  { text: "Concepts", imgPath: "/images/concepts.svg" },
  { text: "Designs", imgPath: "/images/designs.svg" },
  { text: "Code", imgPath: "/images/code.svg" },
];

const counterItems = [
  { value: 15, suffix: "+", label: "Years of Experience" },
  { value: 200, suffix: "+", label: "Satisfied Clients" },
  { value: 108, suffix: "+", label: "Completed Projects" },
  { value: 90, suffix: "%", label: "Client Retention Rate" },
];

const logoIconsList = [
  {
    imgPath: "/images/logos/company-logo-1.png",
  },
  {
    imgPath: "/images/logos/company-logo-2.png",
  },
  {
    imgPath: "/images/logos/company-logo-3.png",
  },
  {
    imgPath: "/images/logos/company-logo-4.png",
  },
  {
    imgPath: "/images/logos/company-logo-5.png",
  },
  {
    imgPath: "/images/logos/company-logo-6.png",
  },
  {
    imgPath: "/images/logos/company-logo-7.png",
  },
  {
    imgPath: "/images/logos/company-logo-8.png",
  },
  {
    imgPath: "/images/logos/company-logo-9.png",
  },
  {
    imgPath: "/images/logos/company-logo-10.png",
  },
  {
    imgPath: "/images/logos/company-logo-11.png",
  },
];

const abilities = [
  {
    imgPath: "/images/seo.png",
    title: "Quality Focus",
    desc: "Delivering high-quality results while maintaining attention to every detail.",
  },
  {
    imgPath: "/images/chat.png",
    title: "Reliable Communication",
    desc: "Keeping you updated at every step to ensure transparency and clarity.",
  },
  {
    imgPath: "/images/time.png",
    title: "On-Time Delivery",
    desc: "Making sure projects are completed on schedule, with quality & attention to detail.",
  },
];

const techStackImgs = [
  {
    name: "SolidWorks",
    imgPath: "/assets/logos/solidworks.png",
    scale: 3,
    hoverHeight: "80%"
  },
  {
    name: "Catia",
    imgPath: "/assets/logos/Catia.png",
    hoverHeight: "70%"
  },
  {
    name: "Inventor",
    imgPath: "/assets/logos/inventor.png",
    hoverHeight: "70%"
  },
  {
    name: "Fusion 360",
    imgPath: "/assets/logos/fusion.svg",
    hoverHeight: "60%"
  },
    {
    name: "AutoCAD",
    imgPath: "/assets/logos/autocad.svg",
    hoverHeight: "50%"
  },
     {
    name: "Comsol Multiphysics",
    imgPath: "/assets/logos/COMSOL.png",
    hoverHeight: "80%"
  },
      {
    name: "Ansys",
    imgPath: "/assets/logos/ANSS.svg",
    hoverHeight: "70%"
  },
      {
    name: "Python",
    imgPath: "/assets/logos/python.svg",
    hoverHeight: "90%"
  },
      {
    name: "JavaScript",
    imgPath: "/assets/logos/javascript.svg",
    hoverHeight: "50%"
  },
      {
    name: "MatLab & Simulink",
    imgPath: "/assets/logos/Matlab.png",
    hoverHeight: "70%"
  },
];

const techStackIcons = [
  {
    name: "React Developer",
    modelPath: "/models/react_logo-transformed.glb",
    scale: 1,
    rotation: [0, 0, 0],
  },
  {
    name: "Python Developer",
    modelPath: "/models/python-transformed.glb",
    scale: 0.8,
    rotation: [0, 0, 0],
  },
  {
    name: "Backend Developer",
    modelPath: "/models/node-transformed.glb",
    scale: 5,
    rotation: [0, -Math.PI / 2, 0],
  },
  {
    name: "Interactive Developer",
    modelPath: "/models/three.js-transformed.glb",
    scale: 0.05,
    rotation: [0, 0, 0],
  },
  {
    name: "Project Manager",
    modelPath: "/models/git-svg-transformed.glb",
    scale: 0.05,
    rotation: [0, -Math.PI / 4, 0],
  },
];

const expCards = [
  {
    review:
      "Mr. Gabrielli demonstrated strong analytical and problem-solving skills. The amount and complexity of the tasks entrusted to him were ambitious for a student staying only six months in our group. Nevertheless, he managed to become rapidly involved in all activities, showing an excellent ability to understand difficult concepts, and quickly reaching full autonomy. He was well organized, communicated easily with the other members of the group, and was fully comfortable presenting his results. His work showed rigor, curiosity, and initiative, and we were very satisfied with the results he obtained.", 
    imgPath: "/assets/CSEM_logo.png",
    logoPath: "/assets/CSEM_logo.png",
    title: "R&D Intern",
    date: "August 2025 - February 2026",
    responsibilities: [
"Designed dedicated mechanical test setups to support modeling and experimental verification of dynamic mechanical systems.",
"Performed free and forced oscillation tests to characterize system dynamics and validate analytical and numerical models.",
"Supported prototype assembly and experimental campaigns, contributing to the validation of mechanical design.",
"Executed calculations to evaluate stiffness, stress limits and dynamic behaviour of structural components under operational conditions.",
"Developed and correlated 3D FEM models in COMSOL to predict structural response and dynamic behaviour of mechanical systems.",
"Developed Python routines for advanced time- and frequency-domain post-processing of experimental data and model validation.",
"Operated non-contact optical measurement systems to support high-precision experimental verification and dynamic measurements."
    ],
  },
  {
    review:
      "Mr. Gabrielli was able to grasp and apply the intricate theoretical concepts remarkably quickly, and to implement them effectively in his work. Throughout the project, he demonstrated strong analytical thinking, a critical and reflective attitude, a well-organized and structured approach to problem solving, and an impressive capacity for independent learning. Mr. Gabrielli is highly motivated, persistent, and hard-working. He quickly integrated into our research group, and his friendly attitude made it pleasant to work with him.",
    imgPath: "/assets/eth-long.png",
    logoPath: "/assets/eth.png",
    title: "Master's Project",
    date: "July 2024 - December 2024",
    responsibilities: [
"Developed a multiphysics FEM formulation for coupled field problems based on variational energy principles and continuum mechanics foundations.",
"Implemented constitutive and system models in Python using variational formulations for automated numerical simulations.",
"Performed numerical verification and convergence studies to assess stability, accuracy and robustness of the developed models.",
"Developed modular and reduced-order numerical models to support automated simulation workflows and parametric studies.",
"Translated continuum mechanics formulations into computable FEM implementations suitable for advanced numerical analysis.",
"Validated numerical implementations through benchmark problems and comparison with reference analytical solutions."
    ],
  },
];

const expLogos = [
  {
    name: "logo1",
    imgPath: "/images/logo1.png",
  },
  {
    name: "logo2",
    imgPath: "/images/logo2.png",
  },
  {
    name: "logo3",
    imgPath: "/images/logo3.png",
  },
];

const testimonials = [
  {
    name: "Esther Howard",
    mentions: "@estherhoward",
    review:
      "I can’t say enough good things about Adrian. He was able to take our complex project requirements and turn them into a seamless, functional website. His problem-solving abilities are outstanding.",
    imgPath: "/images/client1.png",
  },
  {
    name: "Wade Warren",
    mentions: "@wadewarren",
    review:
      "Working with Adrian was a fantastic experience. He transformed our outdated website into a modern, user-friendly platform. His attention to detail and commitment to quality are unmatched. Highly recommend him for any web dev projects.",
    imgPath: "/images/client3.png",
  },
  {
    name: "Guy Hawkins",
    mentions: "@guyhawkins",
    review:
      "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
    imgPath: "/images/client2.png",
  },
  {
    name: "Marvin McKinney",
    mentions: "@marvinmckinney",
    review:
      "Adrian was a pleasure to work with. He turned our outdated website into a fresh, intuitive platform that’s both modern and easy to navigate. Fantastic work overall.",
    imgPath: "/images/client5.png",
  },
  {
    name: "Floyd Miles",
    mentions: "@floydmiles",
    review:
      "Adrian’s expertise in web development is truly impressive. He delivered a robust and scalable solution for our e-commerce site, and our online sales have significantly increased since the launch. He’s a true professional!",
    imgPath: "/images/client4.png",
  },
  {
    name: "Albert Flores",
    mentions: "@albertflores",
    review:
      "Adrian was a pleasure to work with. He understood our requirements perfectly and delivered a website that exceeded our expectations. His skills in both frontend and backend dev are top-notch.",
    imgPath: "/images/client6.png",
  },
];

const socialImgs = [
  {
    name: "insta",
    url: "https://www.instagram.com/",
    imgPath: "/images/insta.png",
  },
  {
    name: "fb",
    url: "https://www.facebook.com/",
    imgPath: "/images/fb.png",
  },
  {
    name: "x",
    url: "https://www.x.com/",
    imgPath: "/images/x.png",
  },
  {
    name: "linkedin",
    url: "https://www.linkedin.com/",
    imgPath: "/images/linkedin.png",
  },
];

export {
  words,
  abilities,
  logoIconsList,
  counterItems,
  expCards,
  expLogos,
  testimonials,
  socialImgs,
  techStackIcons,
  techStackImgs,
  navLinks,
};

export const slideIn = (direction, type, delay, duration) => {
  return {
    hidden: {
      x: direction === "left" ? "-100%" : direction === "right" ? "100%" : 0,
      y: direction === "up" ? "100%" : direction === "down" ? "100%" : 0,
    },
    show: {
      x: 0,
      y: 0,
      transition: {
        type: type,
        delay: delay,
        duration: duration,
        ease: "easeOut",
      },
    },
  };
};

const styles = {
  paddingX: "sm:px-16 px-6",
  paddingY: "sm:py-16 py-6",
  padding: "sm:px-16 px-6 sm:py-16 py-10",

  heroHeadText:
    "text-center font-black text-white lg:text-[80px] sm:text-[60px] xs:text-[50px] text-[40px] lg:leading-[98px] mt-2",
  heroSubText:
    "text-center text-[#dfd9ff] font-medium lg:text-[30px] sm:text-[26px] xs:text-[20px] text-[16px] lg:leading-[40px]",

  sectionHeadText:
    "text-center text-white font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px]",
  sectionSubText:
    "text-center sm:text-[18px] text-[14px] text-secondary uppercase tracking-wider",
};


const mySocials = [
  {
    name: "WhatsApp",
    href: "https://wa.me/393473929423",
    icon: "/assets/socials/whatsApp.svg",
  },
  {
    name: "Linkedin",
    href: "https://www.linkedin.com/in/federico-gabrielli-648609189/",
    icon: "/assets/socials/linkedIn.svg",
  },
  {
    name: "Instagram",
    href: "https://www.instagram.com/federicogabriellii/",
    icon: "/assets/socials/instagram.svg",
  },
];


export { styles, mySocials };
