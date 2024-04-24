import { FaAward } from "react-icons/fa";
import { VscFolderLibrary } from "react-icons/vsc";

import { Card, Col, Container, Image, Nav, NavLink, Row, Stack } from "react-bootstrap";
import "./About.css";

const About = () => {
  return (
    <Container className=" containers text-center mt-1" id="about">
      <Stack>
        <h5>Get To Know</h5>
        <h2>About Me</h2>
      </Stack>
      <Row className="justify-content-center gap-5">
        <Col lg={3} xs={10} md={4} className=" mb-5 mb-md-0">
          <div className="aboutme">
            <div className="imgbox">
              <Image src="/images/pejman kiamehr.png" alt="کیامهر" title="kiamehr" className=" d-lg-none  me w-100 object-fit-cover" />
              <Image src="/images/pejman kiamehr.png" alt="پژمان کیامهر" title="pejman kiamehr" className=" d-none d-lg-block me w-100 object-fit-cover" />
            </div>
          </div>
        </Col>
        <Col lg={6} md={10} className="  ms-0 ms-md-5">
          <Row xs={1} md={3} className="gy-4">
            <Col>
              <Card className=" text-white ">
                <Card.Body>
                  <Card.Title className="iconcard">
                    <FaAward />
                  </Card.Title>
                  <Card.Subtitle className="mb-2 ">Experience</Card.Subtitle>
                  <Card.Text className="textcard">2+ Years Working</Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col>
              <Card className=" text-white">
                <Card.Body>
                  <Card.Title className="iconcard">
                    <VscFolderLibrary />
                  </Card.Title>
                  <Card.Subtitle className="mb-2 ">Projects</Card.Subtitle>
                  <Card.Text className="textcard">6+ Complated</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
          <Stack className=" mt-4">
            <p className=" text-md-start">
              I'm <strong>kiamehr</strong> Experienced React Developer More than 1 year of experience in website development and also organizational panels with React. Familiarity with Restfull Api
              and experience of cooperation with Backend Developer, proficient in Responsive Design and familiarity with SEO. I am currently looking for an opportunity to work with a team of several
              front-end developers.
            </p>
            <Nav className=" justify-content-center justify-content-md-start mt-3">
              <NavLink href="#contact" className="btn-sm btn-primary rounded-2">
                Let's Talk
              </NavLink>
            </Nav>
          </Stack>
        </Col>
      </Row>
    </Container>
  );
};

export default About;
