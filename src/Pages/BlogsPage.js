import React from "react";
import styled from "styled-components";
import Title from "../Components/Title";
import "../img/semantic.png";
import { MainLayout, InnerLayout } from "../styles/Layouts";

function BlogsPage() {
  const blogs = [
    {
      id: 1,
      image:
        "https://d33wubrfki0l68.cloudfront.net/554c3b0e09cf167f0281fda839a5433f2040b349/ecfc9/img/header_logo.svg",
      link: "https://medium.com/@dahyman91/getting-started-in-react-native-6570d7648904",
      title: "Getting Started in React Native",
    },
    {
      id: 2,
      image:
        "https://www.stevethedev.com/storage/app/uploads/public/5aa/d54/a47/5aad54a47d2e0123286333.png",
      link: "https://medium.com/@dahyman91/scoping-and-its-relationship-to-the-javascript-engine-85a1df9a9404",
      title: "Scoping and its Relationship to the JavaScript Engine",
    },
    {
      id: 3,
      image:
        "https://res.cloudinary.com/practicaldev/image/fetch/s--O9SgYXPo--/c_imagga_scale,f_auto,fl_progressive,h_900,q_auto,w_1600/https://thepracticaldev.s3.amazonaws.com/i/ubchff5lthflk5witqkm.png",
      link: "https://medium.com/@dahyman91/learning-semantic-ui-f3e1516fb7d2",
      title: "Learning Semantic-UI",
    },
    {
      id: 4,
      image:
        "https://image.spreadshirtmedia.net/image-server/v1/mp/products/T1459A839MPA4459PT28D14331525FS3570/views/1,width=550,height=550,appearanceId=839,backgroundColor=F2F2F2/progress-bar-67-still-loading-sticker.jpg",
      link: "https://medium.com/@dahyman91/what-ive-built-and-what-s-next-7a8cd548a2ab",
      title: "What I’ve Built and What’s Next",
    },
  ];
  return (
    <MainLayout>
      <BlogsStyled>
        <Title title={"Blog Posts"} span={"Blog Posts"} />
        <InnerLayout className={"blog"}>
          {blogs.map((blog) => {
            return (
              <a target="blank" href={blog.link}>
                <div key={blog.id} className={"blog-item"}>
                  <div className="image">
                    <img src={blog.image} alt="" />
                  </div>
                  <div className="title">
                    <h2>{blog.title}</h2>
                  </div>
                </div>
              </a>
            );
          })}
        </InnerLayout>
      </BlogsStyled>
    </MainLayout>
  );
}

const BlogsStyled = styled.div`
  .blog {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-column-gap: 2rem;
    grid-row-gap: 3rem;
    @media screen and (max-width: 770px) {
      grid-template-columns: repeat(1, 1fr);
    }
    .blog-item {
      background-color: var(--background-dark-grey);
      padding: 1rem 1rem;
    }
    .image {
      width: 100%;
      overflow: hidden;
      padding-bottom: 0.5rem;
      img {
        width: 100%;
        height: 80%;
        object-fit: cover;
        transition: all 0.4s ease-in-out;
        &:hover {
          cursor: pointer;
          transform: rotate(3deg) scale(1.1);
        }
      }
    }

    .title {
      h2 {
        font-size: 1.8rem;
        padding: 2rem 0;
        color: var(--white-color);
        cursor: pointer;
        transition: all 0.4s ease-in-out;
        &:hover {
          color: var(--primary-color);
        }
      }
    }
  }
`;

export default BlogsPage;
