import { Pagination } from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";

import { Card, Col, Container, Row, Stack } from "react-bootstrap";
import "./Workexperience.css";

const Workexperience = () => {
  return (
    <Container className=" text-center" id="testimonials">
      <Stack>
        <h5>WHAT I HAVE DONE SO FAR </h5>
        <h2>Work Experience</h2>
      </Stack>
      <Row lg={1} className=" justify-content-center mt-5">
        <Col lg={6}>
          <Swiper
            // install Swiper modules
            modules={[Pagination]}
            spaceBetween={40}
            slidesPerView={1}
            pagination={{ clickable: true }}
            className=" pb-5"
          >
            <SwiperSlide>
              <Card className="text-white">
                <Card.Img variant="top" src="/icon/Eight.png" className=" object-fit-contain avatar" />
                <Card.Body>
                  <Card.Title>React js Developer</Card.Title>
                  <Card.Subtitle className="mb-4  subtext">
                    <small>Eight Team</small>
                  </Card.Subtitle>

                  <Card.Text>2021-2022</Card.Text>
                </Card.Body>
              </Card>
            </SwiperSlide>
            <SwiperSlide>
              <Card className="text-center text-white">
                <Card.Img variant="top" src="/icon/yektamana.png" className="avatar" />
                <Card.Body>
                  <Card.Title>Websaite Admin</Card.Title>
                  <Card.Subtitle className="mb-4  subtext">
                    <small>Yekta mana company</small>
                  </Card.Subtitle>{" "}
                  <Card.Text>2016-2017</Card.Text>
                </Card.Body>
              </Card>
            </SwiperSlide>
            <SwiperSlide>
              <Card className="text-center text-white">
                <Card.Img variant="top" src="/icon/yektamana.png" className="avatar" />
                <Card.Body>
                  <Card.Title>Content production specialist</Card.Title>
                  <Card.Subtitle className="mb-4  subtext">
                    <small>Yekta mana company</small>
                  </Card.Subtitle>{" "}
                  <Card.Text>2015-2016</Card.Text>
                </Card.Body>
              </Card>
            </SwiperSlide>
          </Swiper>
        </Col>
      </Row>
    </Container>
  );
};

export default Workexperience;
