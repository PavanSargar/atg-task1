import React, { useState } from "react";

import {
  Container,
  Navbar,
  Nav,
  NavDropdown,
  Form,
  FormControl,
  Image,
} from "react-bootstrap";

import { FaSearch } from "react-icons/fa";
import Logo from "../../assets/logo.png";
import FormModal from "../../UI/FormModal/FormModal";

import styles from "./NavbarB.module.css";

const NavbarB = () => {
  const [showModal, setShowModal] = useState(false);

  const handleClick = () => {
    setShowModal(true);
  };

  const closeHandler = () => {
    setShowModal(false);
  }
  return (
    <>
     {showModal && (
       <FormModal onConfirm={closeHandler}/>
     )}
      <Navbar className={styles.navbar} expand="lg">
        <Container className="section-margin">
          <Navbar.Brand href="#">
            <Image src={Logo} />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse className="justify-content-center" id="navbarScroll">
            <Form className={`${styles["search"]} justify-content-center`}>
              <button>
                <FaSearch />
              </button>
              <FormControl
                type="search"
                placeholder="Search"
                className="my-2"
                aria-label="Search"
              />
            </Form>
            <Nav
              className="justify-content-end flex-grow-1 pe-3 mt-2"
              navbarScroll
            >
              <NavDropdown
                title="Create account. It's free!"
                id="navbarScrollingDropdown"
              >
                <NavDropdown.Item>Create new account</NavDropdown.Item>
                <NavDropdown.Item onClick={handleClick}>
                  or Login?
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default NavbarB;
