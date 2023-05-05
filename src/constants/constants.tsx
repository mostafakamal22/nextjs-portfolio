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
import { BsClipboardData } from "react-icons/bs";
import { FaLanguage } from "react-icons/fa";

import { nanoid } from "nanoid";

//Projects Data
export interface Project {
  title: string;
  description: string;
  image: string;
  images: string[];
  tags: string[];
  source: string;
  visit: string | null;
  id: string;
}
[];

export const projects: Project[] = [
  {
    title: "TBT Dashboard and Data Visualization System",
    description:
      "A Full Stack MERN Application that allows admins to manage the Trans border Tourism system. It includes a dashboard with data visualization charts to help admins make informed decisions based on the data entered into the system.",
    image: "/images/cover/tbt-dashboard.webp",
    images: [
      "/images/TBT Dashboard/TBT Dashboard(1).webp",
      "/images/TBT Dashboard/TBT Dashboard(2).webp",
      "/images/TBT Dashboard/TBT Dashboard(3).webp",
      "/images/TBT Dashboard/TBT Dashboard(4).webp",
      "/images/TBT Dashboard/TBT Dashboard(5).webp",
      "/images/TBT Dashboard/TBT Dashboard(6).webp",
      "/images/TBT Dashboard/TBT Dashboard(7).webp",
      "/images/TBT Dashboard/TBT Dashboard(8).webp",
      "/images/TBT Dashboard/TBT Dashboard(9).webp",
      "/images/TBT Dashboard/TBT Dashboard(10).webp",
      "/images/TBT Dashboard/TBT Dashboard(11).webp",
      "/images/TBT Dashboard/TBT Dashboard(12).webp",
      "/images/TBT Dashboard/TBT Dashboard(13).webp",
      "/images/TBT Dashboard/TBT Dashboard(14).webp",
      "/images/TBT Dashboard/TBT Dashboard(15).webp",
      "/images/TBT Dashboard/TBT Dashboard(16).webp",
      "/images/TBT Dashboard/TBT Dashboard(17).webp",
      "/images/TBT Dashboard/TBT Dashboard(18).webp",
      "/images/TBT Dashboard/TBT Dashboard(19).webp",
      "/images/TBT Dashboard/TBT Dashboard(20).webp",
      "/images/TBT Dashboard/TBT Dashboard(21).webp",
      "/images/TBT Dashboard/TBT Dashboard(22).webp",
      "/images/TBT Dashboard/TBT Dashboard(23).webp",
      "/images/TBT Dashboard/TBT Dashboard(24).webp",
    ],
    tags: [
      "Reactjs",
      "Typescript",
      "Nodejs",
      "Express",
      "MongoDB",
      "Mongoose",
      "JWT",
      "Access & Refresh Tokens",
      "Cookies",
      "React-Router-Dom",
      "React-Hooks",
      "Redux-Toolkit-Query",
      "TailwindCSS",
      "ChartJs",
      "React-Chartjs",
    ],
    source: "https://github.com/mostafakamal22/trans-borders-tourism",
    visit: null,
    id: nanoid(),
  },
  {
    title: "Transborder Tourism Website",
    description:
      "A Landing Page built using HTML, Tailwind, and Javascript for the official website of Transborder Tourism. The website showcases the services and facilities offered by the company.",
    image: "/images/cover/tbt-website.webp",
    images: [
      "/images/TBT Website/TBT Website(1).webp",
      "/images/TBT Website/TBT Website(2).webp",
      "/images/TBT Website/TBT Website(3).webp",
      "/images/TBT Website/TBT Website(4).webp",
      "/images/TBT Website/TBT Website(5).webp",
      "/images/TBT Website/TBT Website(6).webp",
      "/images/TBT Website/TBT Website(7).webp",
      "/images/TBT Website/TBT Website(8).webp",
      "/images/TBT Website/TBT Website(9).webp",
      "/images/TBT Website/TBT Website(10).webp",
      "/images/TBT Website/TBT Website(11).webp",
      "/images/TBT Website/TBT Website(12).webp",
      "/images/TBT Website/TBT Website(13) Page Speed Insights 1.webp",
      "/images/TBT Website/TBT Website(14) Page Speed Insights 2.webp",
    ],
    tags: [
      "HTML",
      "CSS",
      "Javascript",
      "TailwindCSS",
      "SEO",
      "Performance Optimization",
      "Responsive Design",
      "Lazy Loading",
    ],
    source: "https://github.com/mostafakamal22/trans-border-tourism-website",
    visit: "https://tbtourism.com/",
    id: nanoid(),
  },
  {
    title: "Online E-Bank System",
    description:
      "A Full Stack MERN Application that allows users to create their secured online bank accounts and perform transactions such as deposit, withdraw, and transfer. The system also includes an efficient admin dashboard to handle account requests and manage users' bank accounts.",
    image: "/images/cover/e-bank.webp",
    images: [
      "/images/E-Bank/E-Bank(1).webp",
      "/images/E-Bank/E-Bank(2).webp",
      "/images/E-Bank/E-Bank(3).webp",
      "/images/E-Bank/E-Bank(4).webp",
      "/images/E-Bank/E-Bank(5).webp",
      "/images/E-Bank/E-Bank(6).webp",
      "/images/E-Bank/E-Bank(7).webp",
      "/images/E-Bank/E-Bank(8).webp",
      "/images/E-Bank/E-Bank(9).webp",
      "/images/E-Bank/E-Bank(10).webp",
      "/images/E-Bank/E-Bank(11).webp",
      "/images/E-Bank/E-Bank(12).webp",
      "/images/E-Bank/E-Bank(13).webp",
      "/images/E-Bank/E-Bank(14).webp",
      "/images/E-Bank/E-Bank(15).webp",
      "/images/E-Bank/E-Bank(16).webp",
      "/images/E-Bank/E-Bank(17).webp",
      "/images/E-Bank/E-Bank(18).webp",
      "/images/E-Bank/E-Bank(19).webp",
      "/images/E-Bank/E-Bank(20).webp",
      "/images/E-Bank/E-Bank(21).webp",
      "/images/E-Bank/E-Bank(22).webp",
      "/images/E-Bank/E-Bank(23).webp",
      "/images/E-Bank/E-Bank(24).webp",
      "/images/E-Bank/E-Bank(25).webp",
      "/images/E-Bank/E-Bank(26).webp",
      "/images/E-Bank/E-Bank(27).webp",
      "/images/E-Bank/E-Bank(28).webp",
      "/images/E-Bank/E-Bank(29).webp",
      "/images/E-Bank/E-Bank(30).webp",
      "/images/E-Bank/E-Bank(31).webp",
      "/images/E-Bank/E-Bank(32).webp",
      "/images/E-Bank/E-Bank(33).webp",
      "/images/E-Bank/E-Bank(34).webp",
      "/images/E-Bank/E-Bank(35).webp",
      "/images/E-Bank/E-Bank(36).webp",
      "/images/E-Bank/E-Bank(37).webp",
      "/images/E-Bank/E-Bank(38).webp",
      "/images/E-Bank/E-Bank(39).webp",
      "/images/E-Bank/E-Bank(40).webp",
      "/images/E-Bank/E-Bank(41).webp",
      "/images/E-Bank/E-Bank(42).webp",
      "/images/E-Bank/E-Bank(43).webp",
      "/images/E-Bank/E-Bank(44).webp",
      "/images/E-Bank/E-Bank(45).webp",
      "/images/E-Bank/E-Bank(46).webp",
      "/images/E-Bank/E-Bank(47).webp",
      "/images/E-Bank/E-Bank(48).webp",
      "/images/E-Bank/E-Bank(49).webp",
      "/images/E-Bank/E-Bank(50).webp",
      "/images/E-Bank/E-Bank(51).webp",
      "/images/E-Bank/E-Bank(52).webp",
      "/images/E-Bank/E-Bank(53).webp",
      "/images/E-Bank/E-Bank(54).webp",
      "/images/E-Bank/E-Bank(55).webp",
      "/images/E-Bank/E-Bank(56).webp",
      "/images/E-Bank/E-Bank(57).webp",
      "/images/E-Bank/E-Bank(58).webp",
      "/images/E-Bank/E-Bank(59).webp",
      "/images/E-Bank/E-Bank(60).webp",
      "/images/E-Bank/E-Bank(61).webp",
      "/images/E-Bank/E-Bank(62).webp",
      "/images/E-Bank/E-Bank(63).webp",
    ],
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
    visit: "https://ebank-2t3r.onrender.com",
    id: nanoid(),
  },
  {
    title: "Sprints E-Commerce Platform",
    description:
      "A Full Stack MERN Application that allows clients to navigate products, add products to cart and wishlist, and securely pay for products. The system also includes a modern dashboard for admins to manage products and user accounts.",
    image: "/images/cover/e-commerce.webp",
    images: [],
    tags: [
      "Reactjs",
      "React-Router-Dom",
      "React-Context",
      "React-Hooks",
      "TailwindCSS",
    ],
    source: "https://github.com/mostafakamal22/sprints-e-commerce-project",
    visit: null,
    id: nanoid(),
  },
  {
    title: "Twitter-like Tweeting System",
    description:
      "A Front-End Application that provides a simple tweeting system with features such as adding new tweets, liking tweets, and replying to tweets. It uses three State Management Systems (Redux, useReducer along with useContext, and ReduxToolkit) and lazy loading on profile images to enhance application performance.",
    image: "/images/cover/twitter.webp",
    images: [
      "/images/Twitter/Twitter-like-tweet-system(1).webp",
      "/images/Twitter/Twitter-like-tweet-system(2).webp",
      "/images/Twitter/Twitter-like-tweet-system(3).webp",
      "/images/Twitter/Twitter-like-tweet-system(4).webp",
      "/images/Twitter/Twitter-like-tweet-system(5).webp",
      "/images/Twitter/Twitter-like-tweet-system(6).webp",
      "/images/Twitter/Twitter-like-tweet-system(7).webp",
      "/images/Twitter/Twitter-like-tweet-system(8).webp",
      "/images/Twitter/Twitter-like-tweet-system(9).webp",
      "/images/Twitter/Twitter-like-tweet-system(10).webp",
      "/images/Twitter/Twitter-like-tweet-system(11).webp",
      "/images/Twitter/Twitter-like-tweet-system(12).webp",
    ],
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
    id: nanoid(),
  },
  {
    title: "Product Page with Cart Functionality",
    description:
      "A Front-End Application that allows users to view the optimal layout for the site based on their device's screen size, see hover states for all interactive elements on the page, open a lightbox gallery by clicking on the large product image, switch the large product image by clicking on the small thumbnail images, and add items to the cart. Users can also view the cart and remove items from it.",
    image: "/images/cover/product-page.webp",
    images: [
      "/images/Product page/Product-page(1).webp",
      "/images/Product page/Product-page(2).webp",
      "/images/Product page/Product-page(3).webp",
      "/images/Product page/Product-page(4).webp",
      "/images/Product page/Product-page(5).webp",
      "/images/Product page/Product-page(6).webp",
      "/images/Product page/Product-page(7).webp",
      "/images/Product page/Product-page(8).webp",
      "/images/Product page/Product-page(9).webp",
      "/images/Product page/Product-page(10).webp",
      "/images/Product page/Product-page(11).webp",
      "/images/Product page/Product-page(12).webp",
      "/images/Product page/Product-page(13).webp",
    ],
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
    id: nanoid(),
  },
];

//Technologies Data
export const technologies: readonly {
  title: string;
  paragraph: string;
  icon: JSX.Element;
  id: string;
}[] = [
  {
    title: "Web Development Basics",
    paragraph: "HTML, CSS, JS(ES6) and TypeScript.",
    icon: <SiHtml5 size={40} />,
    id: nanoid(),
  },
  {
    title: "CSS Preprocessors",
    paragraph: "SASS",
    icon: <DiCssdeck size={40} />,
    id: nanoid(),
  },
  {
    title: "CSS Frameworks",
    paragraph: "Bootstrap, Tailwind and Styled Components.",
    icon: <DiCss3 size={40} />,
    id: nanoid(),
  },
  {
    title: "Front-End Frameworks",
    paragraph: "ReactJS And NextJS.",
    icon: <DiReact size={40} />,
    id: nanoid(),
  },
  {
    title: "Front-End State Management",
    paragraph:
      "Redux, Redux-Toolkit And React-UseContext-UseRuducer State Management System.",
    icon: <DiReact size={40} />,
    id: nanoid(),
  },

  {
    title: "Back-End",
    paragraph: "NodeJS And MongoDB.",
    icon: <DiDatabase size={40} />,
    id: nanoid(),
  },
  {
    title: "Back-End Frameworks",
    paragraph: "Express And Mongoose.",
    icon: <DiMongodb size={40} />,
    id: nanoid(),
  },
  {
    title: "Authentication",
    paragraph: "Json Web Tokens(JWT).",
    icon: <SiAuthy size={40} />,
    id: nanoid(),
  },
  {
    title: "Unit Testing",
    paragraph: "Jest And React Testing Library",
    icon: <DiTerminal size={40} />,
    id: nanoid(),
  },
  {
    title: "Data Visualization",
    paragraph: "ChartJs And React-Chartjs",
    icon: <BsClipboardData size={40} />,
    id: nanoid(),
  },
  {
    title: "Conversational AI",
    paragraph: "ChatGPT",
    icon: <FaLanguage size={40} />,
    id: nanoid(),
  },
  {
    title: "Version Control",
    paragraph: "Git And Github.",
    icon: <DiGitBranch size={40} />,
    id: nanoid(),
  },
];

//Acomplishments data
export const acomplishments: readonly {
  number: number;
  text: string;
}[] = [
  { number: 24, text: "Github Projects" },
  { number: 1, text: "Github Padge" },
  { number: 5, text: "LinkedIn Skill Padges" },
];

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
