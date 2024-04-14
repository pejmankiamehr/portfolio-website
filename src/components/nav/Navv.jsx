import { Nav, NavLink, Navbar } from "react-bootstrap";

import { AiOutlineHome } from "react-icons/ai";
import { AiOutlineUser } from "react-icons/ai";
import { BiBook } from "react-icons/bi";
import { BsPersonWorkspace } from "react-icons/bs";
import { BiMessageSquareDetail } from "react-icons/bi";

import styles from "./Navv.module.css";

const Navv = () => {
  return (
    <Navbar className={styles.navbarr} data-bs-theme="dark">
      <Nav  defaultActiveKey="#header" className=" gap-2">
        <NavLink href="#header" title="header">
          <AiOutlineHome />
        </NavLink>
        <NavLink href="#about" title="about">
          <AiOutlineUser />
        </NavLink>
        <NavLink href="#experience" title="experience">
          <BiBook />
        </NavLink>
        <NavLink href="#portfolio" title="portfolio">
          <BsPersonWorkspace />
        </NavLink>
        <NavLink href="#contact" title="contact">
          <BiMessageSquareDetail />
        </NavLink>
      </Nav>
    </Navbar>
  );
};

export default Navv;
