import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hello everyone, I’m{" "}
            <span style={{color: "#DAA520" }}>Suhail Fadhlu Ramadhan.</span>
            <br />
            I’m currently an undergraduate student majoring in Informatics
            Engineering and I have a strong interest in becoming a software
            engineer. I’m continuously upgrading my skills to meet the standards
            and expectations of the role.
          </p>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
