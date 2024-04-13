import { Card, Col, Container, Row, Stack } from "react-bootstrap";
import { HiCheckBadge } from "react-icons/hi2";

import "./Experience.css";

const Experience = () => {
  return (
    <Container id="experience">
      <Stack className=" text-center">
        <h5>What Skills I Have</h5>
        <h2>My Experience</h2>
      </Stack>
      <Row lg={2} xs={1} className=" g-4">
        <Col>
          <Card style={{ background: "#2c2c6c" }} className=" ps-3 rounded-5 pb-3 cardexperience">
            <Card.Body>
              <Card.Title className=" text-center my-3" style={{ color: "#4db5ff" }}>
                {" "}
                React JS
              </Card.Title>
              <div className=" mt-4">
                <Row>
                  <Col>
                    <Card.Text className=" mb-1 text-white ">
                      <HiCheckBadge /> <span className=" ms-1">Rest API</span>
                    </Card.Text>
                    <Card.Subtitle className=" ms-4 mb-4  subtext">
                      <small>Last updated 3 mins ago</small>
                    </Card.Subtitle>
                    <Card.Text className=" mb-1 text-white">
                      <HiCheckBadge /> <span className=" ms-1">Contect API</span>
                    </Card.Text>
                    <Card.Subtitle className=" ms-4 mb-4  subtext">
                      <small>Last updated 3 mins ago</small>
                    </Card.Subtitle>
                    <Card.Text className=" mb-1 text-white">
                      <HiCheckBadge /> <span className=" ms-1">React Hooks</span>
                    </Card.Text>
                    <Card.Subtitle className=" ms-4 mb-4  subtext">
                      <small>Last updated 3 mins ago</small>
                    </Card.Subtitle>
                    <Card.Text className=" mb-1 text-white">
                      <HiCheckBadge /> <span className=" ms-1">Axios</span>
                    </Card.Text>
                    <Card.Subtitle className=" ms-4 mb-4  subtext">
                      <small>Last updated 3 mins ago</small>
                    </Card.Subtitle>
                    <Card.Text className=" mb-1 text-white">
                      <HiCheckBadge /> <span className=" ms-1">Postman</span>
                    </Card.Text>
                    <Card.Subtitle className=" ms-4 mb-4  subtext">
                      <small>Last updated 3 mins ago</small>
                    </Card.Subtitle>
                  </Col>
                  <Col>
                    <Card.Text className=" mb-1 text-white">
                      <HiCheckBadge /> <span className=" ms-1">Vitejs</span>
                    </Card.Text>
                    <Card.Subtitle className=" ms-4 mb-4  subtext">
                      <small>Last updated 3 mins ago</small>
                    </Card.Subtitle>
                    <Card.Text className=" mb-1 text-white">
                      <HiCheckBadge /> <span className=" ms-1">React Bootstrap</span>
                    </Card.Text>
                    <Card.Subtitle className=" ms-4 mb-4  subtext">
                      <small>Last updated 3 mins ago</small>
                    </Card.Subtitle>
                    <Card.Text className=" mb-1 text-white">
                      <HiCheckBadge /> <span className=" ms-1">Material UI</span>
                    </Card.Text>
                    <Card.Subtitle className=" ms-4 mb-4  subtext">
                      <small>Last updated 3 mins ago</small>
                    </Card.Subtitle>
                    <Card.Text className=" mb-1 text-white">
                      <HiCheckBadge /> <span className=" ms-1">Ant design</span>
                    </Card.Text>
                    <Card.Subtitle className=" ms-4 mb-4  subtext">
                      <small>Last updated 3 mins ago</small>
                    </Card.Subtitle>
                    <Card.Text className=" mb-1 text-white">
                      <HiCheckBadge /> <span className=" ms-1">Figma</span>
                    </Card.Text>
                    <Card.Subtitle className=" ms-4 mb-4  subtext">
                      <small>Last updated 3 mins ago</small>
                    </Card.Subtitle>
                  </Col>
                </Row>
              </div>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card style={{ background: "#2c2c6c" }} className=" ps-3 rounded-5 pb-3 cardexperience">
            <Card.Body>
              <Card.Title className=" text-center my-3" style={{ color: "#4db5ff" }}>
                {" "}
                Fundamental & VC
              </Card.Title>
              <div className=" mt-4">
                <Row>
                  <Col>
                    <Card.Text className=" mb-1 text-white">
                      <HiCheckBadge /> <span className=" ms-1">Javascript</span>
                    </Card.Text>
                    <Card.Subtitle className=" ms-4 mb-4  subtext">
                      <small>Last updated 3 mins ago</small>
                    </Card.Subtitle>
                    <Card.Text className=" mb-1 text-white">
                      <HiCheckBadge /> <span className=" ms-1">ES6</span>
                    </Card.Text>
                    <Card.Subtitle className=" ms-4 mb-4  subtext">
                      <small>Last updated 3 mins ago</small>
                    </Card.Subtitle>
                    <Card.Text className=" mb-1 text-white">
                      <HiCheckBadge /> <span className=" ms-1">Html</span>
                    </Card.Text>
                    <Card.Subtitle className=" ms-4 mb-4  subtext">
                      <small>Last updated 3 mins ago</small>
                    </Card.Subtitle>
                    <Card.Text className=" mb-1 text-white">
                      <HiCheckBadge /> <span className=" ms-1">Css</span>
                    </Card.Text>
                    <Card.Subtitle className=" ms-4 mb-4  subtext">
                      <small>Last updated 3 mins ago</small>
                    </Card.Subtitle>
                    <Card.Text className=" mb-1 text-white">
                      <HiCheckBadge /> <span className=" ms-1">Less</span>
                    </Card.Text>
                    <Card.Subtitle className=" ms-4 mb-4  subtext">
                      <small>Last updated 3 mins ago</small>
                    </Card.Subtitle>
                  </Col>
                  <Col>
                    <Card.Text className=" mb-1 text-white">
                      <HiCheckBadge /> <span className=" ms-1">Resposive design</span>
                    </Card.Text>
                    <Card.Subtitle className=" ms-4 mb-4  subtext">
                      <small>Last updated 3 mins ago</small>
                    </Card.Subtitle>
                    <Card.Text className=" mb-1 text-white">
                      <HiCheckBadge /> <span className=" ms-1">Bootstrap</span>
                    </Card.Text>
                    <Card.Subtitle className=" ms-4 mb-4  subtext">
                      <small>Last updated 3 mins ago</small>
                    </Card.Subtitle>
                    <Card.Text className=" mb-1 text-white">
                      <HiCheckBadge /> <span className=" ms-1">JQuery UI</span>
                    </Card.Text>
                    <Card.Subtitle className=" ms-4 mb-4  subtext">
                      <small>Last updated 3 mins ago</small>
                    </Card.Subtitle>
                    <Card.Text className=" mb-1 text-white">
                      <HiCheckBadge /> <span className=" ms-1">Git</span>
                    </Card.Text>
                    <Card.Subtitle className=" ms-4 mb-4  subtext">
                      <small>Last updated 3 mins ago</small>
                    </Card.Subtitle>
                    <Card.Text className=" mb-1 text-white">
                      <HiCheckBadge /> <span className=" ms-1">SEO</span>
                    </Card.Text>
                    <Card.Subtitle className=" ms-4 mb-4  subtext">
                      <small>Last updated 3 mins ago</small>
                    </Card.Subtitle>
                  </Col>
                </Row>
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Experience;
