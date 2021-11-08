import React from "react";
import styled from "styled-components";
import resume from "../img/resume.jpg";
import PrimaryButton from "./PrimaryButton";

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
          I had always wanted to learn to code, but never had the time, as I was
          working as a Chef and Catering Director (more than) full time. When
          the pandemic hit and the office buildings that my catering program
          serviced were vacated, I took the opportunity to dive into a new
          career. For over a year now, I have dilligently tought myself the
          latest web development technologies and have had opportunities to work
          with all kinds of clients! This experience has helped foster a range
          of skills, from ideation to deployment and everything in between. Most
          recently I have recently enrolled in the software engineering program
          at the immersive coding bootcamp
          <span>
            <a
              target="blank"
              href="https://flatironschool.com/campus-and-online-coding-bootcamp/"
            >
              {" "}
              Flatiron School
            </a>
          </span>{" "}
          where I hope to continue to hone my skills and launch my career as a
          software engineer.
        </p>
        <div className="about-info">
          <div className="info-title">
            <p>Full Name</p>
            <p>Age</p>

            <p>Location</p>
          </div>
          <div className="info">
            <p>: Daniel Hyman</p>
            <p>: 29</p>
            <p>: New York City, United States</p>
          </div>
        </div>
        <PrimaryButton title={"Download Cv"} />
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
      width: 95%;
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
