import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/leaf.png";
import emotion from "../../Assets/Projects/emotion.png";
import clone from "../../Assets/Projects/Spoty.png";
import chatify from "../../Assets/Projects/Smp.png";
import suicide from "../../Assets/Projects/suicide.png";
import infofilm from "../../Assets/Projects/Infofilm.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong style={{ color: "#DAA520" }}>Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title="my-cbt"
              description="Website ujian online yang di bangun dengan Mongodb,Express,React.js dan Node.js. website ini di lengkapi dengan fitur realtime chat menggunakan socket.io dan juga di lengkapi dengan generate AI untuk membantu guru membuat soal"
              ghLink="https://github.com/Suhailfadhluramadhan/fe-mern"
              demoLink="https://my-cbt.netlify.app"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={infofilm}
              isBlog={false}
              title="infofilm"
              description="sebuah website yang berisi tentang informasi film yang di bangun dengan react.js dan menggunakan API dari OMDB. website ini juga di lengkapi dengan fitur pencarian film dan juga detail film"
              ghLink="https://github.com/Suhailfadhluramadhan/infoFilm"
              demoLink="https://infofilm.vercel.app"
            />
          </Col>

        
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
