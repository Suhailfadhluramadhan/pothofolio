import React from "react";
import { Container, Row } from "react-bootstrap";
import Particle from "../Particle";

function ResumeNew() {
  return (
    <div>
      <Container fluid className="resume-section">
        <Particle />
        <Row style={{ justifyContent: "center", position: "relative" }}>
          {/* Tambahkan konten resume di sini nanti */}
        </Row>
      </Container>
    </div>
  );
}

export default ResumeNew;
