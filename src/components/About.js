import React from "react";
import "../styles/About.css";
import FadeInSection from "./FadeInSection";

class About extends React.Component {
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
    const one = (
      <p>
        I recently graduated with a <b>Bachelor's in Computer Science</b> from
        <a href="https://www.utwente.nl/"> University of Twente</a>, where I also served as a
        <b> Teaching Assistant</b>. 
      </p>
    );
    const two = (
      <p>
        Outside of work, I'm passionate about exploring new technologies and creating innovative solutions. 
        I'm particularly interested in business, books, and staying active through gym workouts. 
      </p>
    );

    const tech_stack = [
      "Python",
      "Java",
      "Node.js",
      "React.js",
      "REST APIs",
      "SQL"
    ];

    return (
      <div id="about">
        <FadeInSection>
          <div className="section-header ">
            <span className="section-title">/ about me</span>
          </div>
          <div className="about-content">
            <div className="about-description">
              {[one]}
              {"Here are some technologies I've been working with:"}
              <ul className="tech-stack">
                {tech_stack.map(function (tech_item, i) {
                  return (
                    <FadeInSection delay={`${i + 1}00ms`} key={i}>
                      <li>{tech_item}</li>
                    </FadeInSection>
                  );
                })}
              </ul>
              {[two]}
            </div>
            <div className="about-image">
              <img src={"/assets/me.jpg"} alt="Profile" />
            </div>
          </div>
        </FadeInSection>
      </div>
    );
  }
}

export default About;