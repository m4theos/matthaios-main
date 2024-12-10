import React from "react";
import "../styles/Projects.css";
import FolderOpenRoundedIcon from "@material-ui/icons/FolderOpenRounded";
import GitHubIcon from "@material-ui/icons/GitHub";
import OpenInBrowserIcon from "@material-ui/icons/OpenInBrowser";
import FadeInSection from "./FadeInSection";
import "react-responsive-carousel/lib/styles/carousel.min.css"; 
import Carousel from "react-bootstrap/Carousel";
import ExternalLinks from "./ExternalLinks";

class Projects extends React.Component {
  constructor() {
    super();
    this.state = {
      expanded: true,
      activeKey: "1"
    };
    this.handleSelect = this.handleSelect.bind(this);
  }
  handleSelect(eventKey) {
    this.setState({
      activeKey: eventKey
    });
  }
  render() {
    const spotlightProjects = {
      "RefuelCy": {
        title: "refuelcy",
        desc: "An iOS app for Cyprus that displays nearby gas stations with updated fuel prices and station details. Features include real-time data integration from the Ministry of Energy's API, map-based loading, district-based clustering, and profile authentication.",
        techStack: "SWIFT, NODE.JS, GOOGLE CLOUD CONSOLE",
        link: "https://github.com/m4theos/refuelcy-docs/blob/main/README.md", 
        open: "", 
        image: "/assets/black.png" 
      },
      "MAnycast2 Dashboard": {
        title: "manycast2",
        desc: "A dashboard for identifying and displaying anycast servers, developed in collaboration with the DACS department at the University of Twente. The system retrieves and visualizes server data, providing real-time insights and monitoring through an interactive interface.",
        techStack: "FLASK, MYSQL, REACT.JS, DOCKER",
        link: "https://github.com/mariosch02/Manycast2",
        open: "https://manycast.net/app",
        image: "/assets/black.png" 
      }
    };
    const projects = {
      "matheos.me": {
        desc: "A modern, interactive portfolio website built with React.js featuring smooth animations, dynamic content loading, and responsive design.",
        techStack: "React.js, JavaScript, CSS3",
        link: "https://github.com/m4theos/matthaios-main",
        open: "https://matheos.me"
      },
      "MAnycast2": {
        desc: "A dashboard for identifying and displaying anycast servers, developed in collaboration with DACS department. The system retrieves and visualizes server data, providing real-time insights and monitoring.",
        techStack: "Flask, MySQL, React, Docker",
        link: "https://github.com/mariosch02/Manycast2",
        open: "https://manycast.net"
      },
      "RefuelCy": {
        desc: "An iOS app for Cyprus that displays nearby gas stations with updated fuel prices and station details. Features include real-time data from Ministry of Energy's API and map-based loading.",
        techStack: "Swift, Node.js, Google Cloud Console",
        link: "https://github.com/m4theos/refuelcy-docs/blob/main/README.md",
        open: ""
      },
      "Movie Database": {
        desc: "A simple TypeScript application for managing and exploring movies, featuring modern design patterns and comprehensive movie information management.",
        techStack: "TypeScript, React.js, Css",
        link: "https://github.com/m4theos/movie-database",
        open: ""  
      },
      "React Social Media": {
        desc: "A simple social media platform built with TypeScript and React.js, implementing core social networking features and real-time interactions.",
        techStack: "TypeScript, React.js, Firebase",
        link: "https://github.com/m4theos/react-social-media",
        open: "" 
      }
    };

    return (
      <div id="projects">
        <div className="section-header ">
          <span className="section-title">/ projects</span>
        </div>
        <Carousel>
          {Object.keys(spotlightProjects).map((key, i) => (
            <Carousel.Item>
              <img
                className="d-block w-100"
                src={spotlightProjects[key]["image"]}
                alt={key}
              />
              <div className="caption-bg">
                <Carousel.Caption>
                  <h3>{spotlightProjects[key]["title"]}</h3>
                  <p>
                    {spotlightProjects[key]["desc"]}
                    <p className="techStack">
                      {spotlightProjects[key]["techStack"]}
                    </p>
                  </p>
                  <ExternalLinks
                    githubLink={spotlightProjects[key]["link"]}
                    openLink={spotlightProjects[key]["open"]}
                  ></ExternalLinks>
                </Carousel.Caption>
              </div>
            </Carousel.Item>
          ))}
        </Carousel>
        <div className="project-container">
          <ul className="projects-grid">
            {Object.keys(projects).map((key, i) => (
              <FadeInSection delay={`${i + 1}00ms`}>
                <li className="projects-card">
                  <div className="card-header">
                    <div className="folder-icon">
                      <FolderOpenRoundedIcon
                        style={{ fontSize: 35 }}
                      ></FolderOpenRoundedIcon>
                    </div>
                    <ExternalLinks
                      githubLink={projects[key]["link"]}
                      openLink={projects[key]["open"]}
                    ></ExternalLinks>
                  </div>

                  <div className="card-title">{key}</div>
                  <div className="card-desc">{projects[key]["desc"]}</div>
                  <div className="card-tech">{projects[key]["techStack"]}</div>
                </li>
              </FadeInSection>
            ))}
          </ul>
        </div>
      </div>
    );
  }
}

export default Projects;
