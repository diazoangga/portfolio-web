import {
  frontend,
  backend,
  ux,
  prototyping,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  git,
  figma,
  docker,
  postgresql,
  trafficlight,
  facerecognition,
  python,
  tensorflow,
  pytorch,
  regbraking,
  movie,
  nyeusi,
  space,
  coverhunt,
  dcc,
  kelhel,
  microverse,
  lanedetection,
  github,
  linkedin,
  medium,
} from '../assets';

export const navLinks = [
  {
    id: 'github',
    link: 'https://www.github.com/diazoangga',
    path: github,
  },
  {
    id: 'linkedin',
    link: 'https://www.linkedin.com/in/diazangga/',
    path: linkedin,
  },
  {
    id: 'medium',
    link: 'https://www.medium.com/@diazoangga',
    path: medium,
  },
];

const services = [
  // {
  //   title: 'Frontend Developer',
  //   icon: frontend,
  // },
  {
    title: 'Backend Developer',
    icon: backend,
  },
  {
    title: 'Automation Enginner',
    icon: ux,
  },
  {
    title: 'AI Engineer',
    icon: prototyping,
  },
];

const technologies = [
  {
    name: 'HTML 5',
    icon: html,
  },
  {
    name: 'CSS 3',
    icon: css,
  },
  {
    name: 'JavaScript',
    icon: javascript,
  },
  {
    name: 'TypeScript',
    icon: typescript,
  },
  {
    name: 'Python',
    icon: python,
  },
  {
    name: 'TensorFlow',
    icon: tensorflow,
  },
  {
    name: 'PyTorch',
    icon: pytorch,
  },
  {
    name: 'React JS',
    icon: reactjs,
  },
  // {
  //   name: 'Redux Toolkit',
  //   icon: redux,
  // },
  {
    name: 'Tailwind CSS',
    icon: tailwind,
  },
  // {
  //   name: 'Node JS',
  //   icon: nodejs,
  // },
  // {
  //   name: 'Rails',
  //   icon: rubyrails,
  // },
  // {
  //   name: 'graphql',
  //   icon: graphql,
  // },
  {
    name: 'postgresql',
    icon: postgresql,
  },
  {
    name: 'git',
    icon: git,
  },
  {
    name: 'figma',
    icon: figma,
  },
  {
    name: 'docker',
    icon: docker,
  },
];

const experiences = [
  {
    title: 'Full Stack Developer (Part-time)',
    company_name: 'Homi Coffee',
    icon: microverse,
    iconBg: '#333333',
    date: 'May 2023 - Present',
  },
  {
    title: 'Backend Developer (Trial)',
    company_name: 'TKA Developments',
    icon: coverhunt,
    iconBg: '#333333',
    date: 'Aug 2023 - Aug 2023',
  },
  {
    title: 'Automation Engineer',
    company_name: 'Subaru Japan',
    icon: kelhel,
    iconBg: '#333333',
    date: ' Jul 2020 - June 2022',
  },
  {
    title: 'Control System Intern',
    company_name: 'Yokogawa Indonesia',
    icon: dcc,
    iconBg: '#333333',
    date: 'Jul 2017 - Sep 2017',
  },
];

const projects = [
  {
    id: 'project-1',
    name: 'lane detection',
    description: 'A trained lane detection program implemented in CARLA Simulator.',
    tags: 'TensorFlow, Python, ONNX',
    image: lanedetection,
    repo: 'https://github.com/diazoangga/lanenet-lane-detection',
    demo: 'https://youtu.be/hVNoFlDc4bc',
  },
  {
    id: 'project-2',
    name: 'face detection',
    description:
      'A face detection program to classify face and non-face images.',
    tags: 'TensorFlow, Python',
    image: facerecognition,
    repo: 'https://github.com/diazoangga/face-detection',
    demo: 'https://github.com/diazoangga/face-detection',
  },
  {
    id: 'project-3',
    name: 'Regenerative Braking',
    description: 'This is a python-based program predicting the efficiency and stored electric energy from a regenerative braking system with user inputs: initial speed, braking power, and power inverter settings.',
    tags: 'Python',
    image: regbraking,
    repo: '-',
    demo: '-',
  },
  {
    id: 'project-4',
    name: 'Business Intelligence',
    description: `Integrating financial performance and customer behavior to enhance decision making on analyzing business strategic plan including business positioning through initiating dashboard and DBMS.`,
    tags: 'React.js, Django, Asprise, Docker',
    image: movie,
    repo: 'https://github.com/diazoangga/HomiReport-Backend',
    demo: '-',
  },
  // {
  //   id: 'project-5',
  //   name: 'Nyeusi Fest Site',
  //   description:
  //     'This is a demo concert website for a music festival called Nyeusi.',
  //   tags: [
  //     {
  //       name: 'nextjs',
  //       color: 'blue-text-gradient',
  //     },
  //     {
  //       name: 'supabase',
  //       color: 'green-text-gradient',
  //     },
  //     {
  //       name: 'css',
  //       color: 'pink-text-gradient',
  //     },
  //   ],
  //   image: nyeusi,
  //   repo: 'https://github.com/shaqdeff/Nyeusi-Fest-Site',
  //   demo: 'https://shaqdeff.github.io/Nyeusi-Fest-Site/',
  // },
];

const research = [
  {
    id: 'research-1',
    name: 'Regenerative Braking',
    description: 
      'Published in: 2018 5th International Conference on Electric Vehicular Technology (ICEVT). \
      Studying about the effect of supercapacitor utilization on regenerative braking system regarding the efficiency, braking power, and energy storage.',
    tags: [
      {
        name: 'tensorflow',
        color: 'blue-text-gradient',
      },
      {
        name: 'python',
        color: 'green-text-gradient',
      },
    ],
    image: regbraking,
    repo: 'https://github.com/diazoangga/lanenet-lane-detection',
    demo: 'https://ieeexplore.ieee.org/document/8628374',
  },
  {
    id: 'research-2',
    name: 'Intelligent Light Traffic Control System',
    description:
      'Published in: Earth and Space 2018. Designing an intelligent traffic light control system for one of adjacent traffic light intersections in Bandung using the ANFIS method.',
    tags: [
      {
        name: 'tensorflow',
        color: 'blue-text-gradient',
      },
      {
        name: 'python',
        color: 'green-text-gradient',
      },
    ],
    image: trafficlight,
    repo: 'https://github.com/shaqdeff/Leaderboard',
    demo: 'https://ascelibrary.org/doi/10.1061/9780784481899.092',
  },
  // {
  //   id: 'project-3',
  //   name: 'Regenerative Braking Simulator',
  //   description: 'This is a single-page calculator app built with React',
  //   tags: [
  //     {
  //       name: 'nextjs',
  //       color: 'blue-text-gradient',
  //     },
  //     {
  //       name: 'supabase',
  //       color: 'green-text-gradient',
  //     },
  //     {
  //       name: 'css',
  //       color: 'pink-text-gradient',
  //     },
  //   ],
  //   image: math,
  //   repo: 'https://github.com/shaqdeff/Math-Magicians',
  //   demo: 'https://inspiring-medovik-37d3b3.netlify.app/',
  // },
]

export { services, technologies, experiences, projects, research };
