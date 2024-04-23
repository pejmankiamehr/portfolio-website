import { Card, Col, Container, Nav, NavLink, Row, Stack } from "react-bootstrap";
import "./Portfolio.css";

const Portfolio = () => {
  return (
    <Container className="containers"  id="portfolio" >
      <Stack className=" text-center">
        <h5>My Recent Work Offer</h5>
        <h2>Portfolio</h2>
      </Stack>
      <Row lg={3} xs={1} md={2} className=" g-5">
      <Col>
          <Card style={{ background: "#2c2c6c" }}  className=" rounded-5 ">
            <Card.Img variant="top" src="/icon/shoping.png" title="icon" alt="icon"  className="object-fit-cover pt-3 px-3 rounded-5 cardimg" />
            <Card.Body className=" text-light">
              <Card.Title>shoping website</Card.Title>
              <Card.Text>It was create with React and used react bootstrap , It is responsive</Card.Text>
              <Nav className=" mt-3 gap-3 ">
                <NavLink target="_blank" href="https://github.com/pejmankiamehr/shoping" className="btn">
                  Github
                </NavLink>
                <NavLink target="_blank" href=""   className=" btn btn-primary">Live Demo</NavLink>
              </Nav>
            </Card.Body>
          </Card>
        </Col>
        <Col>
        <Card style={{ background: "#2c2c6c"   }}  className=" rounded-5 ">
            <Card.Img variant="top" src="/icon/dtg.png" title="icon" alt="icon"  className=" object-fit-cover pt-3 px-3 rounded-5 cardimg " />
            <Card.Body className=" text-light">
              <Card.Title>Organization panel</Card.Title>
              <Card.Text>It was create with React and used material ui and Ant design , It is responsive for tablet size </Card.Text>
              <Nav className=" mt-3 gap-3 ">
                <NavLink target="_blank" href="https://github.com/pejmankiamehr/dtg" className="btn">
                  Github
                </NavLink>
                <NavLink target="_blank" href=""   className=" btn btn-primary">Live Demo</NavLink>
              </Nav>
            </Card.Body>
          </Card>
        </Col>
        
       
        <Col>
        <Card style={{ background: "#2c2c6c" }}  className=" rounded-5 ">
            <Card.Img variant="top" src="/icon/contentmachin.png" title="icon" alt="icon" className=" object-fit-cover pt-3 px-3 rounded-5 cardimg" />
            <Card.Body className=" text-light">
              <Card.Title>Content Machine</Card.Title>
              <Card.Text>It was create with React and used material ui , It is responsive</Card.Text>
              <Nav className=" mt-3 gap-3 ">
                <NavLink target="_blank" href="https://github.com/pejmankiamehr/contentmachine" className="btn">
                  Github
                </NavLink>
                <NavLink target="_blank" href=""   className=" btn btn-primary">Live Demo</NavLink>
              </Nav>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card style={{ background: "#2c2c6c" }}  className=" rounded-5 ">
            <Card.Img variant="top" src="/icon/mywebsite.png" title="icon" alt="icon"  className=" object-fit-cover pt-3 px-3 rounded-5 cardimg" />
            <Card.Body className=" text-light">
              <Card.Title>personal website</Card.Title>
              <Card.Text>Conversion of HTML template to React and used bootstrap , It is responsive</Card.Text>
              <Nav className=" mt-3 gap-3 ">
                <NavLink target="_blank" href="https://github.com/pejmankiamehr/portfolio-website" className="btn">
                  Github
                </NavLink>
                <NavLink target="_blank" href=""   className=" btn btn-primary">Live Demo</NavLink>
              </Nav>
            </Card.Body>
          </Card>
        </Col>
        <Col>
        <Card style={{ background: "#2c2c6c" }}  className=" rounded-5 ">
            <Card.Img variant="top" src="/icon/tapsi.png" title="icon" alt="icon" className=" object-fit-cover pt-3 px-3 rounded-5 cardimg" />
            <Card.Body className=" text-light">
              <Card.Title>Example of Tapsi site</Card.Title>
              <Card.Text>It was create with html&css and Less , It is not responsive</Card.Text>
              <Nav className=" mt-3 gap-3 ">
                <NavLink target="_blank" href="https://github.com/pejmankiamehr/tapsi" className="btn">
                  Github
                </NavLink>
                <NavLink target="_blank" href=""   className=" btn btn-primary">Live Demo</NavLink>
              </Nav>
            </Card.Body>
          </Card>
        </Col>
        <Col>
        <Card style={{ background: "#2c2c6c" }}  className=" rounded-5 ">
            <Card.Img variant="top" src="/icon/arshian.png" title="icon" alt="icon" className=" object-fit-cover pt-3 px-3 rounded-5 cardimg" />
            <Card.Body className=" text-light">
              <Card.Title>Example of arshian site</Card.Title>
              <Card.Text>It was create with html&css ,<br/> It is not responsive</Card.Text>
              <Nav className=" mt-3 gap-3 ">
                <NavLink target="_blank" href="https://github.com/pejmankiamehr/arshian" className="btn">
                  Github
                </NavLink>
                <NavLink target="_blank" href=""   className=" btn btn-primary">Live Demo</NavLink>
              </Nav>
            </Card.Body>
          </Card>
        </Col>
   
      </Row>
    </Container>
  );
};

export default Portfolio;
