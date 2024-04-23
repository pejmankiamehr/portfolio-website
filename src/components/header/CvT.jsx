import { Nav, NavLink } from "react-bootstrap";

function CvT() {
  return (
    <>
      <Nav className=" mt-4 gap-1 gap-md-3 d-flex justify-content-center">
        <NavLink target="_blank" href="/images/Pejman_kiamehr_Front_end_(per)_.pdf" className="btn">
          Cv_per
        </NavLink>
        <NavLink target="_blank" href="/images/Pejman_kiamehr_Front_end_(en)_.pdf" className="btn">
          Cv_en
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
