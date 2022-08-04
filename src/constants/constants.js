import {
  DiCss3,
  DiCssdeck,
  DiDatabase,
  DiGitBranch,
  DiMongodb,
  DiReact,
} from "react-icons/di";
import { SiAuthy, SiHtml5 } from "react-icons/si";

export const projects = [
  {
    title: "MERN E-Bank System",
    description:
      "A Full Stack MERN Application - from start to finish. it is an E-Bank system which users can create their secured online bank accounts so that they can (Deposit, Withdraw and Transfer) money anytime, also the system provide an efficient admins dashboard so that admins can handle users' account requests and users' bank account status easily.",
    image: "/images/e-bank.png",
    tags: [
      "Reactjs",
      "Nodejs",
      "Express",
      "MongoDB",
      "Mongoose",
      "JWT",
      "React-Router-Dom",
      "React-Hooks",
      "Redux-Toolkit",
      "Redux-Persist",
      "Redux-Persist-Encryption",
      "TailwindCSS",
    ],
    source: "https://github.com/mostafakamal22/Sprints-MERN-E-Banking-System",
    visit: "https://e-bank-mern-app.herokuapp.com",
    id: 0,
  },
  {
    title: "E-Commerce",
    description:
      "A Full Stack MERN Application - from start to finish. Clients could Navigate products, add products to cart, add products to wishlist, secure pay for products and more. Also the system provide a modern dashboard for admins so that they could do CRUD oprations on products, control carousel's images and users' account status.",
    image: "/images/e-commerce.png",
    tags: [
      "Reactjs",
      "React-Router-Dom",
      "React-Context",
      "React-Hooks",
      "TailwindCSS",
    ],
    source: "https://github.com/mostafakamal22/sprints-e-commerce-project",
    visit: "#0",
    id: 1,
  },
];

export const technologies = [
  {
    title: "Web Development Basics",
    paragraph: "HTML, CSS and JS(ES6).",
    icon: <SiHtml5 size={40} />,
    id: 0,
  },
  {
    title: "CSS Preprocessors",
    paragraph: "SASS",
    icon: <DiCssdeck size={40} />,
    id: 1,
  },
  {
    title: "CSS Frameworks",
    paragraph: "Bootstrap, Tailwind and Styled Components.",
    icon: <DiCss3 size={40} />,
    id: 2,
  },
  {
    title: "Front-End Frameworks",
    paragraph: "ReactJS",
    icon: <DiReact size={40} />,
    id: 3,
  },
  {
    title: "Front-End State Management",
    paragraph: "Redux, Redux-Toolkit And React-Context-Ruducer State System.",
    icon: <DiReact size={40} />,
    id: 4,
  },

  {
    title: "Back-End",
    paragraph: "NodeJS And MongoDB.",
    icon: <DiDatabase size={40} />,
    id: 5,
  },
  {
    title: "Back-End Frameworks",
    paragraph: "Express And Mongoose.",
    icon: <DiMongodb size={40} />,
    id: 6,
  },
  {
    title: "Authentication",
    paragraph: "Json Web Tokens(JWT).",
    icon: <SiAuthy size={40} />,
    id: 6,
  },
  {
    title: "Version Control",
    paragraph: "Git And Github.",
    icon: <DiGitBranch size={40} />,
    id: 6,
  },
];
