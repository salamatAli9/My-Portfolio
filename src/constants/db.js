import { createTheme } from "@mui/material";

import pf from "../assets/images/pf.webp";
import map from "../assets/images/map.svg";
import phone from "../assets/images/phone.svg";
import castro from "../assets/images/castro.png";
import design from "../assets/images/design.svg";
import anyhand from "../assets/images/anyhand.png";
import mob_dev from "../assets/images/mob_dev.svg";
import envelope from "../assets/images/envelope.svg";
import material from "../assets/images/material.webp";
import famracure from "../assets/images/famracure.png";
import development from "../assets/images/development.svg";
import theActorsLaunge from "../assets/images/theActorsLaunge.png";

const NAV_LIST = [
  { title: "Home", id: "hero", offset: 0 },
  { title: "Services", id: "service", offset: 0 },
  { title: "About", id: "about", offset: 0 },
  { title: "Skills", id: "accomplishments", offset: 0 },
  { title: "Projects", id: "projects", offset: 0 },
  { title: "Contact", id: "footer", offset: 0 },
];

const MARQUEE_CONTENT = [
  "WEB DEVELOPMENT",
  "HTML5",
  "CSS3",
  "JAVASCRIPT",
  "REACT-NATIVE",
  "REDUX-TOOLKIT",
  "REACT JS",
  "EXPO",
  "PHP",
  "LARAVEL",
  "FIGMA",
  "SPA",
  "MPA",
  "MYSQL",
  "MONGO DB",
  "REST API",
  "NODE JS",
  "ANGULAR JS",
  "WEB DESIGN",
  "NEXT JS",
];

const PROJECTS_DATA = [
  {
    delay: "0",
    link: "https://www.theactorslounge.co.uk/",
    image: theActorsLaunge,
    title: "The Actors Launge",
    description:
      "A modern and responsive website for a UK-based acting school. The project was built using Next TS, Tailwind CSS, Sanity, and Pipedrive.",
  },
  {
    delay: "0",
    link: "https://famracure.vercel.app/",
    image: famracure,
    title: "Famracure",
    description:
      "A healthcare platform that connects patients with doctors, allowing them to book appointments and access medical services online. The project was built using React JS, Tailwind CSS, and Laravel.",
  },
  {
    delay: "0",
    link: "https://perspectiveforge.onrender.com/",
    image: pf,
    title: "Perspective Forge",
    description:
      "A fully secure modern blog-site for developers and tech enthusiasts to get theirselves updated. Featuring authentication for users and admins, dual theme, data caching, modern dashboard with complete validation and error handling. This project is built using MERN Stack.",
  },
  {
    delay: "0",
    link: "https://shopcastro.netlify.app/",
    image: castro,
    title: "Castro",
    description:
      "An E-commerce platform that deals in clothing. The project was built using the MERN stack.",
  },
  {
    delay: "600",
    link: "https://anyhandy.netlify.app/",
    image: anyhand,
    title: "anyhand",
    description:
      "A marketplace when users can acquire heroes for their services, and heroes can provide their service as well by signing up to platform.",
  },
  {
    delay: "800",
    link: "https://4material.store/",
    image: material,
    title: "4Material",
    description:
      "A marketplace in the domain of construction, having automated quotation system removing the need of traditional e-commerce.",
  },
];

const ACCOMPLISHMENTS = [
  {
    date: "05/2024 - 04/2026",
    headline: "Senior Software Engineer",
    company: "Terasols",
    content:
      "Led development of an Event Management platform with Stripe Payment APIs, including tax and fee reporting. Integrated Ollama LLM into a pantry management project for recipe generation. Designed and deployed CI/CD pipelines using GitLab and published custom NPM packages. Built full-stack applications with Python and Next.js. Provided mentorship and technical guidance to junior developers.",
  },
  {
    date: "02/2022 - 02/2024",
    headline: "Software Engineer (PHP)",
    company: "Rozee.pk",
    content:
      "Developed financial and wellness applications with advanced backend features. Designed RESTful APIs and integrated M&P APIs for logistics and financial operations. Optimized SQL queries, indexing, and database performance.",
  },
  {
    date: "09/2019 - 01/2022",
    headline: "Software Engineer (PHP)",
    company: "Pak Elektron Limited (PEL)",
    content:
      "Developed and maintained responsive web applications using PHP and JavaScript. Improved system performance and maintainability for enterprise-level projects. Collaborated with cross-functional teams to deliver high-performance internal web solutions.",
  },
  {
    date: "03/2019 - 07/2019",
    headline: "Software Engineer (PHP) (Internship)",
    company: "Systems Limited",
    content:
      "Built and enhanced backend functionality to support dynamic, data-driven features. Gained experience in manageable project tasks from initial development through to deployment.",
  },
];

const EDUCATION = [
  {
    date: "Jan, 2014 - Aug, 2018",
    headline: "BS-CS (University of Management and Sciences)",
    content:
      "Bachelor of Science in Computer Science (BS-CS) from the UOMS has equipped me with a comprehensive understanding of cutting-edge technologies and their practical applications.",
  },
  {
    date: "Oct, 2010 - March, 2012",
    headline: "ICS-Physics (CGC)",
    content:
      "Completed ICS-Physics at Central College, delving into the fascinating world of Physics and Computer Science. Equipped with a strong foundation in both disciplines.",
  },
];

const SKILLS = [
  { language: "JS", proficiency: "90%" },
  { language: "TS", proficiency: "75%" },
  { language: "React JS", proficiency: "80%" },
  { language: "React Native", proficiency: "80%" },
  { language: "Next JS", proficiency: "80%" },
  { language: "Node JS", proficiency: "60%" },
  { language: "Express JS", proficiency: "70%" },
  { language: "Mongo DB", proficiency: "80%" },
  { language: "SQL", proficiency: "80%" },
  { language: "PHP", proficiency: "95%" },
  { language: "Laravel", proficiency: "90%" },
  { language: "Tailwind CSS", proficiency: "90%" },
  { language: "Figma", proficiency: "60%" },
];

const EXPERTIES = ["coder", "player", "designer"];

const FOOTER_CONTENT = [
  {
    image: map,
    headline: "Address",
    link: "https://maps.app.goo.gl/wNywzvzVS6e3quEx6",
    content: "Pak Arab, Lahore",
  },
  {
    image: phone,
    headline: "Let's Talk",
    link: "tel:+92310-4489454",
    content: "0310-4489454",
  },
  {
    image: envelope,
    headline: "Send me email",
    link: "mailto:salamat.khalid9@gmail.com",
    content: "salamat.khalid9@gmail.com",
  },
];

const THEME = createTheme({
  palette: {
    primary: {
      main: "#ccc",
    },
  },
});

const SERVICES = [
  {
    delay: "0",
    img: design,
    headline: "website design",
    content:
      "Elevate your online presence with captivating website designs that seamlessly blend aesthetics and functionality. My designs are tailored to reflect your brand identity, ensuring a visually appealing and user-friendly experience for your visitors.",
  },
  {
    delay: "400",
    img: development,
    headline: "website development",
    content:
      "Transform your ideas into dynamic and responsive websites. My web development services encompass the latest technologies and coding standards, whether it is SPA or MPA I deliver seamless navigation and optimal performance.",
  },
  {
    delay: "800",
    img: mob_dev,
    headline: "mobile development",
    content:
      "Transform your ideas into dynamic and responsive mobile applications. My app development services encompass the latest technologies and coding standards, whether it is iOS or Android, I deliver seamless navigation and optimal performance.",
  },
];

export {
  THEME,
  SKILLS,
  SERVICES,
  NAV_LIST,
  EDUCATION,
  EXPERTIES,
  PROJECTS_DATA,
  FOOTER_CONTENT,
  ACCOMPLISHMENTS,
  MARQUEE_CONTENT,
};
