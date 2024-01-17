'use client';

import Image from "next/image";
import styled from "styled-components";
import Header from "../shared/header";
import ExperienceNode from "./experienceNode";
import hannah from "../../assets/images/hannah.png";
import { useEffect, useState } from "react";

const Container = styled.div`
    position: relative;
    display: flex;
    min-height: 100px;
    width: 100%;
    z-index: 990;
    padding-top: 72px;

    display: flex;
    justify-content: center;
`;

const Content = styled.div`
    width: 80%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 64px;

    @media(max-width: 1023px) {
      width: 100%;
    }
`;

const ExperienceAndEducation = styled.div`
  display: flex;
  flex-direction: row;
  gap: 24px;
  width: 100%;

  @media(max-width: 700px) {
    flex-direction: column;
  }

  .education, .experiences {
    width: 50%;
    display: flex;
    flex-direction: column;
    gap: 24px;
    @media(max-width: 700px) {
      width: 100%;
    }
  }

  .heading {
    text-transform: uppercase;
    width: 100%;
    text-align: center;
    font-size: 24px;
    font-weight: 600;
  }
`;
const Intro = styled.div`
  display: flex;
  align-items: center;
  gap: 72px;

  @media(max-width: 1023px) {
    width:100%;
    flex-direction: column;
  }

  .description {
    width: 50%;
    font-size: 19px;
    font-weight: 500;
    line-height: 30px;

    @media(max-width: 1023px) {
      width:100%;
    }
  }

  .hannah img {
    width: 300px;
    object-fit: cover;
    border-radius: 50%;

    @media(max-width: 300px) {
      width:100%;
      height: auto;
    }
  }

  .personalInfo{ 
    width: 30%;
    display: flex;
    flex-direction: column;
    gap: 24px;

    @media(max-width: 500px) {
      width:100%;
    }

    @media(min-width: 500px) and (max-width: 1023px) {
      width:100%;
      flex-direction: row;
    }
    
    .box {
      width: 100%;
      border: 1px solid var(--primary);
      border-radius: 20px;
      padding: 16px;

      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: flex-start;
      gap: 16px;

      .label {
        color: var(--tertiary);
        font-weight: 600;
      }
    }
  }
`;

const About: React.FC = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }
    const personalInfo = [
      {
        label: "Location",
        info: "Ålesund, Norway"
      }, {
        label: "Languages",
        info: "Norwegian (native), English, Cebuano"
      },
        
    ];
    const expertise = [

    ];
    const education = {
      years: "June 2010 - March 2014",
      university: "University of San Jose - Recoletos",
      url: "https://usjr.edu.ph",
      degree: "Bachelor of Science in Information Technology", 
      additionInfo: "Major in Web Applications Development"
    };
    const experiences = [
      {
        years: "November 2020 - present",
        company: "Axbit AS",
        url: "https://axbit.com/en",
        position: "Software Engineer", 
        additionInfo: "Front-end developer: React, Typescript, Git, Figma, Strapi, Umbraco, Wordpress"
      },
      {
        years: "September 2018 - November 2020",
        company: "Zegeba AS",
        url: "https://zegeba.com",
        position: "Software Developer", 
        additionInfo: "Full stack developer: Javascript, jQuery, VueJS, NodeJs, Bootstrap, Git"
      },
      {
        years: "December 2016 - April 2018",
        company: "Wise Consulting AS",
        url: "https://www.wise.no/en/",
        position: "IT Konsulent", 
        additionInfo: "Full stack developer: .NET, Javascript, SQL, Bootstrap, TortoiseSVN"
      },
      {
        years: "April 2014 - April 2016",
        company: "Alliance Software Inc.",
        url: "https://www.alliance.com.ph/index.html",
        position: "Associate Technical Specialist", 
        additionInfo: `Developer: PHP/LAMP, AWS, Wordpress, Javascript, Bootstrap, TortoiseSVN \n Team Lead & Project Liaison`
      }
    ];

    return (
        <Container id="about">
          <Content>
            <Header text="About"/>
            <Intro>
            <div className="hannah">
              <Image
                src={hannah}
                alt=""
                height="300"
                width="300"
                />
            </div>
            <div className="description">
              As an experienced front-end developer, I thrive in both independent projects and collaborative development teams. My skill set encompasses various languages and frameworks, including JavaScript, TypeScript, Node.js, Vue.js, and React. In addition to this, I bring strong expertise in HTML and CSS, allowing me to seamlessly transform design sketches from Figma into polished and functional interfaces.
            </div>
            <div className="personalInfo">
              {personalInfo.map(p => {
                return (
                  <div className="box" key={Math.random()}>
                    <div className="label">{p.label}</div>
                    <div>{p.info}</div>
                  </div>
                )
              })}
            </div>
            </Intro>
            <ExperienceAndEducation>
              <div className="experiences">
                <div className="heading">Experiences</div>
                {experiences.map(exp => {
                  return (
                    <ExperienceNode
                      key={Math.random()}
                      data={exp}
                    />
                  )
                })}
              </div>
              <div className="education">
                <div className="heading">Education</div>
                <ExperienceNode 
                  isExperience={false}
                  data={education}
                />
              </div>

            </ExperienceAndEducation>

          </Content>
        </Container>
    );
};

export default About;
