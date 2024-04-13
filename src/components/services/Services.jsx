import { Card, Col, Container, Row, Stack } from "react-bootstrap";
import { BiCheck } from "react-icons/bi";

import "./Services.css";

function Services() {
  return (
    <Container id="services">
      <Stack className=" text-center">
        <h5>What I Offer</h5>
        <h2>Services</h2>
      </Stack>
      <Row lg={3} xs={1} md={2} className=" g-5">
        <Col>
          <Card className=" rounded-top-0 rounded-bottom-5  cardservice">
            <Card.Body className=" p-0">
              <Card.Title className=" text-center rounded-bottom-5 mb-5 p-4" style={{ color: "#2c2c6c", background: "#4db5ff" }}>
                {" "}
                Frontend Development
              </Card.Title>
              <Stack className=" px-4 pb-4 text-white ">
                <Card.Text className=" mb-1  d-flex">
                  <BiCheck className="   fs-2 " /> <span className=" ms-3 "> Lorem dolor sit amet consectetur elit. </span>
                </Card.Text>
                <Card.Text className=" mb-1  d-flex">
                  <BiCheck className="   fs-2 " /> <span className=" ms-3 "> Lorem dolor sit amet consectetur elit. </span>
                </Card.Text>
                <Card.Text className=" mb-1  d-flex">
                  <BiCheck className="   fs-2 " /> <span className=" ms-3 "> Lorem dolor sit amet consectetur elit. </span>
                </Card.Text>
              </Stack>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card className=" rounded-top-0 rounded-bottom-5  cardservice">
            <Card.Body className=" p-0">
              <Card.Title className=" text-center  rounded-bottom-5 mb-5 p-4" style={{ color: "#2c2c6c", background: "#4db5ff" }}>
                {" "}
                Frontend Development
              </Card.Title>
              <Stack className=" px-4 pb-4 text-white ">
                <Card.Text className=" mb-1  d-flex">
                  <BiCheck className="   fs-2 " /> <span className=" ms-3  "> Lorem dolor sit amet consectetur elit.</span>
                </Card.Text>
                <Card.Text className=" mb-1  d-flex">
                  <BiCheck className="  fs-2 " /> <span className=" ms-3  "> Lorem dolor sit amet consectetur elit.</span>
                </Card.Text>
                <Card.Text className=" mb-1  d-flex">
                  <BiCheck className="   fs-2 " /> <span className=" ms-3  "> Lorem dolor sit amet consectetur elit.</span>
                </Card.Text>
                <Card.Text className=" mb-1  d-flex">
                  <BiCheck className="   fs-2 " /> <span className=" ms-3  "> Lorem dolor sit amet consectetur elit.</span>
                </Card.Text>
              </Stack>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card className="  rounded-top-0 rounded-bottom-5  cardservice">
            <Card.Body className=" p-0">
              <Card.Title className=" text-center  rounded-bottom-5 mb-5 p-4" style={{ color: "#2c2c6c", background: "#4db5ff" }}>
                {" "}
                Frontend Development
              </Card.Title>
              <Stack className=" px-4 pb-4 text-white ">
                <Card.Text className=" mb-1  d-flex">
                  <BiCheck className="   fs-2 " /> <span className=" ms-3  "> Lorem dolor sit amet consectetur elit.</span>
                </Card.Text>
                <Card.Text className=" mb-1  d-flex">
                  <BiCheck className="   fs-2 " /> <span className=" ms-3  "> Lorem dolor sit amet consectetur elit.</span>
                </Card.Text>
                <Card.Text className=" mb-1  d-flex">
                  <BiCheck className="   fs-2 " /> <span className=" ms-3  "> Lorem dolor sit amet consectetur elit.</span>
                </Card.Text>
              </Stack>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default Services;
