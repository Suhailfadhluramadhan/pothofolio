import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/imagee.png";
import Tilt from "react-parallax-tilt";
import { AiFillGithub} from "react-icons/ai";


function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span style={{ color: "#DAA520" }}> INTRODUCE </span>{" "}
              MYSELF
            </h1>
            <p className="home-about-body">
              I don't really know why I started learning it, but somehow it
              feels right now.
              <br />
              <br />
              I'm most comfortable with{" "}
              <i>
                <b style={{ color: "#DAA520" }}>Javascript</b>
              </i>
              , but I’ve been exploring technologies like{" "}
              <i>
                <b style={{ color: "#DAA520" }}> Go, Rust, and PHP </b>
              </i>{" "}
              as part of my learning journey.
              <br />
              <br />
              My field of Interest's are building new &nbsp;
              <i>
                <b style={{ color: "#DAA520" }}>
                  Web Technologies and Products{" "}
                </b>{" "}
                and also in areas related to{" "}
                <b style={{ color: "#DAA520" }}>Machine Learning</b>
              </i>
              <br />
              <br />
              Whenever possible, I also apply my passion for developing products
              with <b style={{ color: "#DAA520" }}>Node.js</b> and
              <i>
                <b style={{ color: "#DAA520" }}>
                  {" "}
                  Modern Javascript Library and Frameworks
                </b>
              </i>
              &nbsp; like
              <i>
                <b style={{ color: "#DAA520" }}> React.js</b>
              </i>
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img
                src={myImg}
                style={{ borderRadius: "100%" }}
                className="img-fluid"
                alt="avatar"
              />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <p>
              Feel free to <span style={{ color: "#DAA520" }}>connect </span>
              with me
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/El-softTech"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
