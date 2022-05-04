import React, { useState } from "react";

import { Row, Col, Nav, Button, NavDropdown } from "react-bootstrap";
import { FaUserPlus } from "react-icons/fa";
import AllPosts from "../AllPosts/AllPosts";

import styles from "./TabBar.module.css";

const TabBar = () => {
  const [key, setKey] = useState("");

  const handleSelect = (eventKey) => {
    setKey(eventKey);
  };

  return (
    <div className={`${styles["tab-bar"]} section-padding`}>
      <Row className={styles["tab-row"]}>
        <Col className={styles["category-col"]}>
          <Nav onSelect={handleSelect} defaultActiveKey="link-1" as="ul">
            <Nav.Item as="li">
              <Nav.Link
                className={` ${
                  key === "link-1" ? styles.active : styles.inactive
                }`}
                eventKey="link-1"
              >
                All Posts
              </Nav.Link>
            </Nav.Item>
            <Nav.Item as="li">
              <Nav.Link
                className={`nav-link ${
                  key === "link-2" ? styles.active : "inactive"
                }`}
                eventKey="link-2"
              >
                Article
              </Nav.Link>
            </Nav.Item>
            <Nav.Item as="li">
              <Nav.Link
                className={`nav-link ${
                  key === "link-3" ? styles.active : "inactive"
                }`}
                eventKey="link-3"
              >
                Event
              </Nav.Link>
            </Nav.Item>
            <Nav.Item as="li">
              <Nav.Link
                className={`nav-link ${
                  key === "link-4" ? styles.active : "inactive"
                }`}
                eventKey="link-4"
              >
                Education
              </Nav.Link>
            </Nav.Item>
            <Nav.Item as="li">
              <Nav.Link
                className={`nav-link ${
                  key === "link-5" ? styles.active : "inactive"
                }`}
                eventKey="link-5"
              >
                Job
              </Nav.Link>
            </Nav.Item>
          </Nav>
        </Col>

        <Col>
          <Nav
            className="justify-content-end"
            variant="primary"
            defaultActiveKey="/home"
          >
            <NavDropdown className={styles["filter-button"]} title="Filter:All">
              <Nav.Item>
                <NavDropdown.Item href="#">Article</NavDropdown.Item>
                <NavDropdown.Item href="#">Event</NavDropdown.Item>
                <NavDropdown.Item href="#">Education</NavDropdown.Item>
                <NavDropdown.Item href="#">Job</NavDropdown.Item>
              </Nav.Item>
            </NavDropdown>
            <NavDropdown  className={styles["write-button"]} title="Write Post">
              <Nav.Item>
                <NavDropdown.Item href="#">Write Post</NavDropdown.Item>
              </Nav.Item>
            </NavDropdown>
            <Nav.Item  className={styles["join-button"]}>
              <Button>
                {" "}
                <FaUserPlus /> Join Group
              </Button>
            </Nav.Item>
          </Nav>
        </Col>
      </Row>
      <hr />

      <Row>
        <AllPosts />
      </Row>
    </div>
  );
};

export default TabBar;
