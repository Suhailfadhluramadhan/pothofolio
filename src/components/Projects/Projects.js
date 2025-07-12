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

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={clone}
              isBlog={false}
              title="Spotyfy clone"
              description="spotyfy clone adalah sebuah website yang di bangun dengan astro.js untuk membuat tampilan yang semirip mungkin dengan spotyfy. dengan menerapkan resonsive design"
              ghLink="https://github.com/soumyajit4419/Editor.io"
              demoLink="https://spotifyproject-ten.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={leaf}
              isBlog={false}
              title="Plant AI"
              description="Used the plant disease dataset from Kaggle and trained a image classifer model using 'PyTorch' framework using CNN and Transfer Learning with 38 classes of various plant leaves. The model was successfully able to detect diseased and healthy leaves of 14 unique plants. I was able to achieve an accuracy of 98% by using Resnet34 pretrained model."
              ghLink="https://github.com/soumyajit4419/Plant_AI"
              demoLink="https://plant49-ai.herokuapp.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={suicide}
              isBlog={false}
              title="Ai For Social Good"
              description="Using 'Natural Launguage Processing' for the detection of suicide-related posts and user's suicide ideation in cyberspace  and thus helping in sucide prevention."
              ghLink="https://github.com/soumyajit4419/AI_For_Social_Good"
              // demoLink="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley" <--------Please include a demo link here
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={emotion}
              isBlog={false}
              title="Face Recognition and Emotion Detection"
              description="Trained a CNN classifier using 'FER-2013 dataset' with Keras and tensorflow backened. The classifier sucessfully predicted the various types of emotions of human. And the highest accuracy obtained with the model was 60.1%.
              Then used Open-CV to detect the face in an image and then pass the face to the classifer to predict the emotion of a person."
              ghLink="https://github.com/soumyajit4419/Face_And_Emotion_Detection"
              // demoLink="https://blogs.soumya-jit.tech/"      <--------Please include a demo link here
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
