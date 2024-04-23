import CvT from "./CvT";
import HeaderSocials from "./HeaderSocials";
import { Col, Container, NavLink, Row, Stack } from "react-bootstrap";
import styles from "./Header.module.css";

function Header() {
  return (
    <Container className="containerheader  text-center overflow-hidden" id="header">
      <Stack>
        <h5>Hello I'm </h5>
        <h1>Pejman Kiamehr</h1>
        <h5>Front-End Developer React JS </h5>
      </Stack>
      <CvT />
      <Row xs={1} md={3} lg={3} className=" align-content-center justify-content-center">
        <Col  className=" d-none d-md-flex align-items-center text-center " >
          <HeaderSocials />
        </Col>
        <Col xs={10} md={3} lg={3} >
          <Stack className={styles.meheader}>
            <img src="/images/kiamehr.png" alt="پژمان" title="pejman" style={{opacity:0.8}} className=" w-75 object-fit-cover"/>
          </Stack>
        </Col>

        <Col className=" d-none d-md-inline-flex justify-content-center text-center " >
          <NavLink href="#contact" title="contact" className={styles.scroldown}>
            Scroll Down
          </NavLink>
        </Col>
      </Row>
    </Container>
  );
}

export default Header;
