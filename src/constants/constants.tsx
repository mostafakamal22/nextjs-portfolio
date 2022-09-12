import {
  DiCss3,
  DiCssdeck,
  DiDatabase,
  DiGitBranch,
  DiMongodb,
  DiReact,
  DiTerminal,
} from "react-icons/di";
import { SiAuthy, SiHtml5 } from "react-icons/si";

import { IoCall } from "react-icons/io5";
import { RiWhatsappFill } from "react-icons/ri";
import { GrMail } from "react-icons/gr";

//Projects Data
export interface Project {
  title: string;
  description: string;
  image: string;
  tags: string[];
  source: string;
  visit: string;
  id: number;
}
[];

export const projects: Project[] = [
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
  {
    title: "Twitter Tweet System",
    description:
      "A Front-End Application - It Provides a simple tweets system (add new tweet, like tweet and reply to tweet) by using Three State Management Systems [Redux, useReducer along with useContext and ReduxToolkit]. also uses lazy loading on profile images to enhance application performance.",
    image: "/images/twitter.png",
    tags: [
      "Reactjs",
      "React-Router-Dom",
      "React-Context",
      "React-Hooks",
      "Redux-Toolkit",
      "Redux",
      "Lazy-Loading",
    ],
    source:
      "https://github.com/mostafakamal22/React-Twitter-Tweet-System/tree/reduxToolkit-query",
    visit: "https://mostafakamal22.github.io/twitter-tweet-system/",
    id: 2,
  },
  {
    title: "Product Page",
    description:
      "A Front-End Application - where users should be able to View the optimal layout for the site depending on their device's screen size, See hover states for all interactive elements on the page, Open a lightbox gallery by clicking on the large product image, Switch the large product image by clicking on the small thumbnail images and Add items to the cart View the cart and remove items from it",
    image: "/images/product-page.png",
    tags: [
      "Reactjs",
      "TypeScript",
      "Sass",
      "React-Hooks",
      "LocalStorage",
      "Lazy-Loading",
      "Framer-Motion",
      "Swiper",
      "Jest",
      "React-Testing-Library",
    ],
    source:
      "https://github.com/mostafakamal22/React-TS-Sass-Ecommerce-Product-Page",
    visit: "https://mostafakamal22.github.io/ecommerce-product-page/",
    id: 3,
  },
];

//Technologies Data
export const technologies: readonly {
  title: string;
  paragraph: string;
  icon: JSX.Element;
  id: number;
}[] = [
  {
    title: "Web Development Basics",
    paragraph: "HTML, CSS, JS(ES6) and TypeScript.",
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
    paragraph: "ReactJS And Basics Of NextJS.",
    icon: <DiReact size={40} />,
    id: 3,
  },
  {
    title: "Front-End State Management",
    paragraph:
      "Redux, Redux-Toolkit And React-UseContext-UseRuducer State Management System.",
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
    id: 7,
  },
  {
    title: "Unit Testing",
    paragraph: "Jest And React Testing Library",
    icon: <DiTerminal size={40} />,
    id: 8,
  },
  {
    title: "Version Control",
    paragraph: "Git And Github.",
    icon: <DiGitBranch size={40} />,
    id: 9,
  },
];

//Acomplishments data
export const acomplishments: readonly {
  number: number;
  text: string;
}[] = [{ number: 15, text: "Github Projects" }];

//Footer data
export const contacts: readonly {
  title: string;
  text: string;
  link: string;
  icon: JSX.Element;
}[] = [
  {
    title: "Call",
    text: "+201008871950",
    link: "tel:+201008871950",
    icon: <IoCall size={15} />,
  },
  {
    title: "Email",
    text: "mk1319@fayoum.edu.eg",
    link: "mailto:mk1319@fayoum.edu.eg",
    icon: <GrMail size={15} />,
  },
  {
    title: "WhatsApp",
    text: "+201008871950",
    link: "https://wa.me/201008871950",
    icon: <RiWhatsappFill size={15} />,
  },
];
