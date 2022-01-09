import css1 from "../img/portImages/cv_css.png";
import css2 from "../img/portImages/ms.png";
import react1 from "../img/portImages/react_styled.png";
import img2 from "../img/portImages/maya-4.jpg";
import img3 from "../img/portImages/maya-3.jpg";

const projects = [
  {
    id: 1,
    category: "CSS",
    image: css1,
    link1: "https://falconimedia.com",
    link2: "https://www.google.com",
    title: "Falconi Media Company Website",
    text: "Created with only HTML and CSS.",
  },
  {
    id: 2,
    category: "React",
    image: "../img/ecommerce.jpg",
    link1: "https://ecommerce-material-ui-project.herokuapp.com/",
    link2: "https://www.google.com",
    title: "Ecommerce Site",
    text: "Fullstack E-commerce website built with React and Rails, using Material UI",
  },

  {
    id: 3,
    category: "React",
    image: img2,
    link1: "https://financial-dashboard-project.netlify.app/",
    link2: "https://www.google.com",
    title: "Financial Dashboard",
    text: "A tool to track stocks and manage a portfolio. Built with React, Semantic UI and ChartJS.",
  },
  {
    id: 6,
    category: "React",
    image: react1,
    link1: "https://www.google.com",
    link2: "https://www.google.com",
    title: "Responsive Portfolio Website",
    text: "Created using different technologies such as Material UI, Styled-Components and more...",
  },
];

export default projects;
