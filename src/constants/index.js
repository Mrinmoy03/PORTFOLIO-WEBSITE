export const navLinks = [
  {
    id: 1,
    name: 'Home',
    href: '#home',
  },
 
  {
    id: 2,
    name: 'About',
    href: '#about',
  },
  {
    id: 3,
    name: 'Work',
    href: '#work',
  },
  {
    id: 4,
    name: 'Contact',
    href: '#contact',
  },
];



export const myProjects = [
  {
    title: 'Zentery- Gaming Website  Clone',
    desc: 'An award-winning website recreated using React.js, Tailwind CSS, and GSAP. This Bento Box-style website features dynamic animations, scroll triggers, and interactive elements.',
    subdesc:
      'Additionally, an AI-generated website, ZENTRY_NEXUS, has been integrated as an add-on to showcase AI capabilities.',
    href: 'https://zentry-clone-react.netlify.app/',
    code: "https://github.com/Mrinmoy03/Zentry",
    texture: '/textures/project/project1.mp4',
    logo: '/assets/zentry.jpg',
    logoStyle: {
      backgroundColor: '#13202F',
      border: '0.2px solid #17293E',
      boxShadow: '0px 0px 60px 0px #2F6DB54D',
    },
    spotlight: '/assets/spotlight2.png',
    tags: [
      {
        id: 1,
        name: 'React.js',
        path: '/assets/react.svg',
      },
      {
        id: 2,
        name: 'TailwindCSS',
        path: 'assets/tailwindcss.png',
      },
      {
        id: 3,
        name: 'Gsap',
        path: '/assets/gsap.svg',
      },
      
    ],
  },
  
  {
    title: 'Blog and News',
    desc: 'Blog News App is a responsive React.js web application that combines real-time news updates with a personal blogging platform. Users can read the latest news, write and manage blogs, and bookmark favorite articles — all in one place',
    subdesc:
      'Built as a unique Software-as-a-Service app built with React.js, CSS, API handling, and local storage, designed for optimal performance and scalability.',
    href: 'https://blog-news-app.netlify.app/',
    code: "https://github.com/Mrinmoy03/Blog-and-News",
    texture: '/textures/project/project2.mp4',
    logo: '/assets/project-logo1.png',
    logoStyle: {
      backgroundColor: '#2A1816',
      border: '0.2px solid #36201D',
      boxShadow: '0px 0px 60px 0px #AA3C304D',
    },
    spotlight: '/assets/spotlight1.png',
    tags: [
      {
        id: 1,
        name: 'React.js',
        path: '/assets/react.svg',
      },
      {
        id: 2,
        name: 'CSS',
        path: 'assets/css.svg',
      },
      
    ],
  },
 
  {
    title: 'Apple 15Pro - Apple Website Clone',
    desc: 'A full-scale recreation of the Apple iPhone 15 Pro product page, blending immersive GSAP animations with interactive Three.js 3D effects. From custom scroll-triggered transitions to real-time animated 3D models, this project showcases high-performance front-end development and design precision. Every interaction and animation was carefully crafted to mirror Apples elegant user experience while enhancing performance and responsiveness across devices.',
    subdesc:
      'Built for modern browsers with a focus on smooth performance, responsive design, and immersive visual storytelling.',
    href: 'https://roaring-seahorse-89795e.netlify.app/',
    code: "https://github.com/Mrinmoy03/Apple-iPhone-15Pro-website",
    texture: '/textures/project/project3.mp4',
    logo: '/assets/apple.svg',
    logoStyle: {
      backgroundColor: '#60f5a1',
      background:
        'linear-gradient(0deg, #60F5A150, #60F5A150), linear-gradient(180deg, rgba(255, 255, 255, 0.9) 0%, rgba(208, 213, 221, 0.8) 100%)',
      border: '0.2px solid rgba(208, 213, 221, 1)',
      boxShadow: '0px 0px 60px 0px rgba(35, 131, 96, 0.3)',
    },
    spotlight: '/assets/spotlight3.png',
    tags: [
      {
        id: 1,
        name: 'React.js',
        path: '/assets/react.svg',
      },
      {
        id: 2,
        name: 'TailwindCSS',
        path: 'assets/tailwindcss.png',
      },
      {
        id: 3,
        name: 'GSAP',
        path: '/assets/gsap.svg',
      },
      {
        id: 4,
        name: 'Three.js',
        path: '/assets/threejspng.png',
      },
    ],
  },
  {
    title: 'Brain Wave - Online Banking Platform',
    desc: 'A modern and visually refined UI/UX design website built using React.js and Tailwind CSS. The layout features sleek parallax effects and a clean, grid-based bento box structure that enhances both aesthetics and usability. Designed with a strong focus on smooth user interaction, visual hierarchy, and responsive behavior across all device',
    subdesc:
      'Crafted to showcase modern design principles, this project blends elegant motion, modular components, and intuitive user experience—ideal for portfolios, creative studios, and product showcases.',
    href: 'https://brainwave003-react-app.netlify.app/',
     code: "https://github.com/Mrinmoy03/BrainWave",
    texture: '/textures/project/project4.mp4',
    logo: '/assets/brainwave-symbol.svg',
    logoStyle: {
      backgroundColor: '#0E1F38',
      border: '0.2px solid #0E2D58',
      boxShadow: '0px 0px 60px 0px #2F67B64D',
    },
    spotlight: '/assets/spotlight4.png',
    tags: [
      {
        id: 1,
        name: 'React.js',
        path: '/assets/react.svg',
      },
      {
        id: 2,
        name: 'TailwindCSS',
        path: 'assets/tailwindcss.png',
      },
   
    ],
  },
  
];

export const calculateSizes = (isSmall, isMobile, isTablet) => {
  return {
    deskScale: isSmall ? 0.05 : isMobile ? 0.06 : 0.065,
    deskPosition: isMobile ? [0.5, -4.5, 0] : [0.25, -5.5, 0],
    cubePosition: isSmall ? [4, -5, 0] : isMobile ? [5, -5, 0] : isTablet ? [5, -5, 0] : [9, -5.5, 0],
    reactLogoPosition: isSmall ? [3, 4, 0] : isMobile ? [5, 4, 0] : isTablet ? [5, 4, 0] : [12, 3, 0],
    ringPosition: isSmall ? [-5, 7, 0] : isMobile ? [-10, 10, 0] : isTablet ? [-12, 10, 0] : [-24, 10, 0],
    targetPosition: isSmall ? [-5, -10, -10] : isMobile ? [-9, -10, -10] : isTablet ? [-11, -7, -10] : [-13, -13, -10],
  };
};

export const workExperiences = [
  {
    id: 1,
    name: 'Framer',
    pos: 'Web Developer',
    duration: '2024 - Present',
    title: "Framer serves as my go-to tool for creating interactive prototypes. I use it to bring designs to  life, allowing  to experience the user flow and interactions before development.",
    icon: '/assets/framer.svg',
    animation: 'victory',
  },
  {
    id: 2,
    name: 'GSAP',
    pos: 'Web Developer',
    duration: '2024 - Present',
    title: "GSAP is my go-to tool for creating smooth, high-performance animations on the web. I leverage it to build dynamic, interactive, and fluid animations that enhance the user experience. Whether it's scroll-triggered effects, complex timelines, or subtle micro-interactions, GSAP helps bring websites to life with precision and ease.",
    icon: '/assets/gsap.svg',
    animation: 'clapping',
  },
  {
    id: 3,
    name: 'GitHub',
    pos: 'Web Developer',
    duration: '2023 - Present',
    title: "GitHub is my primary platform for version control and collaborative development. I use it to manage project repositories, track changes, and collaborate efficiently with teams. GitHub enables me to ensure code quality, handle versioning, and streamline the development process, making it an essential part of my workflow for both personal and team projects",
    icon: '/assets/github.svg',
    animation: 'salute',
  },
];
