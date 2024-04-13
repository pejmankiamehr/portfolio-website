import { Nav, NavLink } from "react-bootstrap";

function CvT() {
  return (
    <>
      <Nav className=" mt-4 gap-1 gap-md-3 d-flex justify-content-center">
        <NavLink target="_blank" href="/images/Pejman kiamehr Front_end.jpg" className="btn">
          Cv
        </NavLink>
        <NavLink target="_blank" href="/images/certificate.jpg" className="btn">
          Certificate
        </NavLink>
        <NavLink href="#contact" className="btn btn-primary">Let's Talk</NavLink>
      </Nav>
    </>
  );
}

export default CvT;
