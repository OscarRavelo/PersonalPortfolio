import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: 'portfolio', // e.g: 'Name | Developer'
  lang: 'es', // e.g: en, es, fr, jp
  description: 'Welcome to my  PortFolio', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: '',
  name: 'Oscar Ravelo',
  subtitle: "I'm a Full Stack Web Dev",
  cta: '',
};

// ABOUT DATA
export const aboutData = {
  img: 'profile.jpg',
  paragraphOne: 'Oscar Ravelo, Web Developer. 29 years old located in Spain',
  paragraphTwo:
    'Im Javascript addict, self taught programmer and Full Stack Web Developer. I have been programming for three years now, which from two years Ive been  learning about web developing.',
  paragraphThree: 'Open to work in challeging areas',

  resume: '', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'project1.jpg',
    title: 'TODO LIST',
    info: 'A todo list for productivity',
    info2: '',
    url: 'https://todo-cat.herokuapp.com/',
    repo: 'https://github.com/OscarRavelo/TodoAppBlitz', // if no repo, the button will not show up
  },
];

// CONTACT DATA
export const contactData = {
  cta: '',
  btn: 'Send me an Email',
  email: 'oscar91ravelo@gmail.com',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: nanoid(),
      name: 'twitter',
      url: 'https://twitter.com/Punkk1x',
    },
    {
      id: nanoid(),
      name: 'linkedin',
      url: 'https://www.linkedin.com/in/oscar-enrique-ravelo-noguera-310684156/',
    },
    {
      id: nanoid(),
      name: 'github',
      url: 'https://github.com/OscarRavelo',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: true, // set to false to disable the GitHub stars/fork buttons
};
