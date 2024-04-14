import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";

import { Col, Container, Image, Nav, NavLink, Navbar, Row, Stack } from "react-bootstrap";
import "./Footer.css";

const Footer = () => {
  return (
    <Container fluid className=" containers pb-5 mt-5  text-center justify-content-center footer">
      <Row xs={1} lg={1} className=" gap-5 py-5 justify-content-center ">
        <Col xs={3} lg={1}>
          <Stack className="boxlogo">
            <Image src="/images/logo.png" title="pejman" alt="پژمان" />
          </Stack>
        </Col>
        <Col>
          <h1 className="textname">Pejman Kiamehr</h1>
          <h1 className="textname">پژمان کیامهر</h1>
        </Col>
        <Col>
          <Navbar className=" justify-content-center navfooter" data-bs-theme="dark">
            <Nav className=" flex-column flex-md-row justify-content-center">
              <NavLink href="#header" title="header">Home</NavLink>
              <NavLink href="#about" title="about">About</NavLink>
              <NavLink href="#experience" title="experience">Experience</NavLink>
              <NavLink href="#services" title="services">Services</NavLink>
              <NavLink href="#portfolio" title="portfolio">Portfolio</NavLink>
              <NavLink href="#testimonials" title="testimonials">Testimonials</NavLink>
            </Nav>
          </Navbar>
        </Col>
        <Col className=" mb-5">
          <Nav className=" justify-content-center">
            <NavLink className=" rounded iconfooter" title="facebook">
              <FaFacebookF />
            </NavLink>
            <NavLink className=" rounded iconfooter" title="instagram">
              <FaInstagram />
            </NavLink>
            <NavLink className=" rounded iconfooter" title="twitter">
              <FaTwitter />
            </NavLink>
          </Nav>
        </Col>
      </Row>
    </Container>
  );
};

export default Footer;
