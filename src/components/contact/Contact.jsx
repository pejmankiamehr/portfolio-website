import emailjs from "@emailjs/browser";

import { useRef, useState } from "react";

import { MdOutlineEmail } from "react-icons/md";
import { FaTelegram } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";

import { Button, Card, Col, Container, NavLink, Row, Stack, Form } from "react-bootstrap";
import "./Contact.css";

const Contact = () => {
  const [validated, setValidated] = useState(false);

  const formmail = useRef();

  const sendEmail = (e) => {
    const form = e.currentTarget;

    e.preventDefault();
    if (form.checkValidity() === false) {
      e.stopPropagation();
      console.log("check");
    } else {
      emailjs
        .sendForm("service_kqh43kn", "template_uisb6dj", formmail.current, {
          publicKey: "atem6yw-Ud8HAx7RD",
        })
        .then(
          (response) => {
            alert("send mail!", response);
          },
          (error) => {
            alert("FAILED...", error.text);
          }
        );
    }
    setValidated(true);
  };
  return (
    <Container  id="contact">
      <Stack className=" text-center">
        <h5>Get To Know</h5>
        <h2>About Me</h2>
      </Stack>
      <Row lg={2} xs={1} md={2} className=" mt-4 g-5 justify-content-center">
        <Col lg={3} >
          <Row xs={1} className="gy-4 text-center">
            <Col>
              <Card className=" text-white pb-3">
                <Card.Body>
                  <Card.Title className="iconcard">
                    <MdOutlineEmail />
                  </Card.Title>
                  <Card.Subtitle>Email</Card.Subtitle>
                  <Card.Text className="textcard">pejman.kiamehr@gmail.com</Card.Text>
                </Card.Body>
                <NavLink target="_blank" href="mailto:pejman.kiamehr@gmail.com">
                  Send a message
                </NavLink>
              </Card>
            </Col>
            <Col>
              <Card className=" text-white pb-3">
                <Card.Body>
                  <Card.Title className="iconcard">
                    <FaTelegram />
                  </Card.Title>
                  <Card.Subtitle>Telegram</Card.Subtitle>
                  <Card.Text className="textcard">@pejmankiamehr</Card.Text>
                </Card.Body>
                <NavLink target="_blank" href="https://t.me/pejmankiamehr">
                  Send a message
                </NavLink>
              </Card>
            </Col>
            <Col>
              <Card className=" text-white pb-3">
                <Card.Body>
                  <Card.Title className="iconcard">
                    <FaWhatsapp />
                  </Card.Title>
                  <Card.Subtitle>Whatsapp</Card.Subtitle>
                  <Card.Text className="textcard">+989155503369</Card.Text>
                </Card.Body>
                <NavLink target="_blank" href="https://wa.me/+989155503369">
                  Send a message
                </NavLink>
              </Card>
            </Col>
          </Row>
        </Col>

        <Col lg={6} className=" mb-5 mb-lg-0">
          <Form ref={formmail} noValidate validated={validated} onSubmit={sendEmail}>
            <Form.Group className="mb-5 inputmail" controlId="formBasicName" >
              <Form.Control required data-bs-theme="dark" className=" p-3 border-secondary bg-transparent" type="text" name="name" placeholder="Enter Your Full Name" />
            </Form.Group>

            <Form.Group className="mb-5 inputmail" controlId="formBasicEmail">
              <Form.Control required data-bs-theme="dark" className=" p-3 border-secondary bg-transparent  " type="email" name="email" placeholder="Enter Your Email" />
            </Form.Group>
            <Form.Group className="mb-5 inputmail" controlId="exampleForm.ControlTextarea1">
              <Form.Control required data-bs-theme="dark" className=" p-3 border-secondary   bg-transparent" type="text" name="message" as="textarea" rows={3} placeholder="Message" />
            </Form.Group>
            <Button variant="primary" size="sm" type="submit">
              Send Message
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default Contact;
