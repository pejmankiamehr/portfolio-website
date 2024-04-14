
import { Nav, NavLink } from "react-bootstrap";

import { BsLinkedin } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";
import { FaDribbble } from "react-icons/fa";

import styles from "./HeaderSocials.module.css";

function HeaderSocials() {
  return (
    <>
      <Nav className={`d-none d-md-flex ${styles.socials}`}>
        <NavLink href="https://linkedin.com" title="linkedin" target="_blank" className={styles.icon}>
          <BsLinkedin/>
        </NavLink>
        <NavLink href="https://github.com/pkiamehr" title="github" target="_blank" className={styles.icon}>
          <FaGithub />
        </NavLink>
        <NavLink href="https://dribbble.com" title="dribbble" target="_blank" className={styles.icon}>
          <FaDribbble />
        </NavLink>
      </Nav>
    </>
  );
}

export default HeaderSocials;
