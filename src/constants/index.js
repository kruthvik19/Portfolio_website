import {
  frontend,
  backend,
  database,
  prototyping,
  javascript,
  html,
  css,
  git,
  docker,
  postgresql,
  coverhunt,
  dcc,
  kelhel,
  microverse,
  practitioner,
  foundation,
  azure,
  deloitte,
  typescript,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  angular,
  video,
  userman
} from "../assets";

export const navLinks = [
  {
    id: 'about',
    title: 'About',
  },
  {
    id: 'projects',
    title: 'Projects',
  },
  {
    id: 'contact',
    title: 'Contact',
  },
];

const services = [
  {
    title: "Front-End Development",
    icon: frontend,
  },
  {
    title: "Back-End Development",
    icon: backend,
  },
  {
    title: "DataBase Management",
    icon: database,
  },
  {
    title: "Debugging and Testing",
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
    name: 'React JS',
    icon: reactjs,
  },
   {
     name: 'Redux Toolkit',
   icon: redux,
  },
   {
    name: 'Tailwind CSS',
     icon: tailwind,
   },
   {
    name: 'Node JS',
    icon: nodejs,
   },
   {
    name: 'Mongo Db',
    icon: mongodb,
   },
   {
    name: 'Angular',
    icon: angular
   },

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
    name: 'docker',
    icon: docker,
  },
];

const experiences = [
  {
    title: 'Full-Stack Developer Intern',
    company_name: 'Subhanu Technologies & Solutions',
    icon: coverhunt,
    iconBg: '#333333',
    date: 'Jul 2024 - Present',
  },
  {
    title: 'Full-Stack Developer Intern',
    company_name: 'Audaz Ventures',
    icon: kelhel,
    iconBg: '#333333',
    date: 'Aug 2022 - Sep 2022',
  },
  {
    title: 'B.E CSE',
    company_name: 'VTU University, Mysore',
    icon: dcc,
    iconBg: '#333333',
    date: 'July 2019 - June 2023',
  },
];

const certificates = [
  {
    id: "project-1",
    name: "Advanced Web Developer Course",
    description: "View my verified achievement from Udemy",
    image: foundation,
    repo: "#",
    demo: " https://drive.google.com/file/d/1u6TlJe8WuAQItD3UJn0DvHwqe-h8YnqZ/view?usp=sharing",
  },
  {
    id: "project-2",
    name: "Full-Stack JavaScript Course",
    description:
      "View my verified achievement from Udemy",
    image: practitioner,
    repo: "#",
    demo: "https://drive.google.com/file/d/17OIgOq4kz3BqX-gJze4RfOWEzNu8xK9K/view?usp=sharing",
  },
  {
    id: "project-3",
    name: "Python For Beginners",
    description: "View my verified achievement from Udemy",
    image: azure,
    repo: "#",
    demo: "https://drive.google.com/file/d/10UQr6TBzRRUr2d0OeQFAlyBS3QwyLJn6/view?usp=sharing",
  },
];

const projects = [
  {
    id: "project-1",
    name: "Task Manager Application",
    description: "Built with React.js on the frontend and Node.js/Express on the backend, the application utilizes REST APIs for communication, and Redux for state management.",
    image: deloitte,
    repo: "#",
    demo: "https://merry-zabaione-59cdd1.netlify.app",
  },
  {
    id: "project-2",
    name: "Video Blog-App",
    description:
      "This project is a Video Management Application built with React, Chakra UI, Firebase, and React Router. The app allows users to browse, create, update, and search for videos. It also supports user authentication via Google Sign-In.",
    image: video,
    repo: "#",
    demo: "https://github.com/kruthvik19/React-Video-Blog-App",
  },
  {
    id: "project-3",
    name: "User Management ",
    description: "This project is a User Management System built using Node.js and EJS templates. It allows for creating, editing, updating, and managing user information through a simple and intuitive interface.",
    image: userman,
    repo: "#",
    demo: "https://github.com/kruthvik19/User_managementMERN",
  },
];

export { services, technologies, experiences, projects,certificates };
