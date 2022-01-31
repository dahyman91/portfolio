import React from "react";
import styled from "styled-components";
import resume from "../img/resume.jpg";
import PrimaryButton from "./PrimaryButton";
import Resume from "../img/resume.pdf.pdf";

function ImageSection() {
  return (
    <ImageSectionStyled>
      <div className="left-content">
        <img src={resume} alt="" />
      </div>
      <div className="right-content">
        <h4>
          My Programming<span> Journey</span>
        </h4>
        <p className="paragraph">
          I’ve been curious about the world of software development since
          college, but my time-intensive jobs as a Chef and Catering Director
          made a career pivot seem unrealistic. When the pandemic hit and the
          office buildings that my catering program serviced vacated, I took the
          opportunity to dive into a new field. Since March 2020, I have
          diligently taught myself the latest web development technologies and
          had opportunities to work with all kinds of clients. I’ve gained a
          range of skills, from ideation to deployment and everything in
          between. In January 2022, I graduated from the software engineering
          program at the immersive coding bootcamp
          <span>
            <a target="blank" href={Resume}>
              {" "}
              Flatiron School
            </a>
          </span>
          , and {"I’m"} looking forward to joining a team of inspiring,
          like-minded engineers.
        </p>
        <div className="about-info">
          <div className="info-title">
            <p>Full Name:</p>
            <p>Age:</p>

            <p>Location:</p>
          </div>
          <div className="info">
            <p>Daniel Hyman</p>
            <p>30</p>
            <p>Brooklyn, New York</p>
          </div>
        </div>
        <PrimaryButton target="blank" link={Resume} title={"View Resume"} />
      </div>
    </ImageSectionStyled>
  );
}

const ImageSectionStyled = styled.div`
  margin-top: 5rem;
  display: flex;
  @media screen and (max-width: 1000px) {
    flex-direction: column;
    .left-content {
      margin-bottom: 2rem;
    }
  }
  .left-content {
    width: 100%;
    img {
      width: 80%;
      border-radius: 10%;
      object-fit: cover;
    }
  }
  .right-content {
    width: 100%;
    h4 {
      font-size: 2rem;
      color: var(--white-color);
      span {
        font-size: 2rem;
      }
    }
    .paragraph {
      padding: 1rem 0;
    }
    .about-info {
      display: flex;
      padding-bottom: 1.4rem;
      .info-title {
        padding-right: 3rem;
        p {
          font-weight: 600;
        }
      }
      .info-title,
      .info {
        p {
          padding: 0.3rem 0;
        }
      }
    }
  }
`;
export default ImageSection;
