import CvT from "./CvT";
import HeaderSocials from "./HeaderSocials";
import { Col, Container, NavLink, Row, Stack } from "react-bootstrap";
import styles from "./Header.module.css";

function Header() {
  return (
    <Container className="text-center overflow-hidden  " id="header">
      <Stack>
        <h5>Hello I'm </h5>
        <h1>Pejman Kiamehr</h1>
        <h5>Front-End Developer React JS </h5>
      </Stack>
      <CvT />
      <Row xs={1} md={3} lg={3}>
        <Col  className=" d-none d-md-flex text-center bottom-0"  md={1}>
          <HeaderSocials />
        </Col>
        <Col xs={12} md={10}>
          <Stack className={styles.meheader}>
            <img src="/images/kiamehr.png" alt="kiamehr" title="کیامهر" className=" h-100" />
          </Stack>
        </Col>

        <Col className=" d-none d-md-inline-flex text-center "   md={1}>
          <NavLink href="#contact" className={styles.scroldown}>
            Scroll Down
          </NavLink>
        </Col>
      </Row>
    </Container>
  );
}

export default Header;
