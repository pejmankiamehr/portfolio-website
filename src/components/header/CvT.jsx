import { Nav, NavLink } from "react-bootstrap";
import kiamerper from '/public/images/Pejman_kiamehr_Front_end_(pe)_.pdf'
import kiameren from '/public/images/Pejman_kiamehr_Front_end_(en).pdf'

function CvT() {
  return (
    <>
      <Nav className=" mt-4 gap-1 gap-md-3 d-flex justify-content-center">
        <NavLink  href={kiamerper} className="btn">
          Cv_per
        </NavLink>
        <NavLink  href={kiameren} className="btn">
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
