import falconi from "../img/falconi.png";
import bugTracker from "../img/bugTracker.png";
import store from "../img/store.png";
import stocks from "../img/stock.png";

const projects = [
  {
    id: 1,
    category: "React",
    image: bugTracker,
    link1: "https://peaceful-meadow-98604.herokuapp.com/",
    link2: "https://github.com/dahyman91/bug-tracker",
    title: "Bug Tracker",
    text: "Full stack project management tool built with React, Rails, Material UI, and ChartJS. Deployed on Heroku, please be patient while it boots.",
  },
  {
    id: 2,
    category: "React",
    image: store,
    link1: "https://ecommerce-material-ui-project.herokuapp.com/",
    link2: "https://github.com/dahyman91/ecommerce",
    title: "Ecommerce Site",
    text: "Fullstack E-commerce site built with React, Rails, and Material UI. Deployed on Heroku, please be patient while it boots.",
  },
  {
    id: 3,
    category: "React",
    image: stocks,
    link1: "https://financial-dashboard-project.netlify.app/",
    link2: "https://github.com/dahyman91/financial-dashboard",
    title: "Financial Dashboard",
    text: "A tool to track stocks and manage a stock portfolio. Built with React, Semantic UI and ChartJS.",
  },
  {
    id: 4,
    category: "CSS",
    image: falconi,
    link1: "https://falconimedia.com",
    title: "Falconi Media Agency Website",
    text: "Created with Bootstrap.",
  },
];

export default projects;
