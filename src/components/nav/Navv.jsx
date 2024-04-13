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
        <NavLink href="#header">
          <AiOutlineHome />
        </NavLink>
        <NavLink href="#about">
          <AiOutlineUser />
        </NavLink>
        <NavLink href="#experience">
          <BiBook />
        </NavLink>
        <NavLink href="#portfolio">
          <BsPersonWorkspace />
        </NavLink>
        <NavLink href="#contact">
          <BiMessageSquareDetail />
        </NavLink>
      </Nav>
    </Navbar>
  );
};

export default Navv;
