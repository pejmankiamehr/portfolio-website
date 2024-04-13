import "./App.css";
import Header from "./components/header/Header";
import About from "./components/about/About";
import Experience from "./components/experience/Experience";
import Services from "./components/services/Services";
import Portfolio from "./components/portfolio/Portfolio";
import Workexperience from "./components/workexperience/Workexperience";
import Contact from "./components/contact/Contact";
import Footer from "./components/footer/Footer";
import Navv from "./components/nav/Navv";
import { Col, Container, Row } from "react-bootstrap";

function App() {
  return (
    <>
      <Container fluid>
        <Header />

        <Navv />

        <About />

        <Experience />

        {/* <Services /> */}

        <Portfolio />

        <Workexperience />

        <Contact />

        <Footer />
      </Container>
      {/* <Header />
      <Navv />
      <About />
      <Experience />
      <Services />
      <Portfolio />
      <Testimonials />
      <Contact />
      <Footer /> */}
    </>
  );
}

export default App;
