import React from "react";

import { Card, Row, Col, Image, Dropdown } from "react-bootstrap";
import { BsThreeDots } from "react-icons/bs";
import { FaShareAlt, FaRegEye, FaPencilAlt } from "react-icons/fa";

import styles from "./PostCard.module.css";
import Rectangle1 from "../../assets/postImages/Rectangle-1.png";
import Profile from "../../assets/profileImages/profile-1.png";

const PostCard = () => {
  return (
    <div className={styles.container}>
      <Card className={`${styles.postcard} mt-2`} style={{ width: "auto" }}>
        <Card.Img variant="top" src={Rectangle1} />
        <Card.Subtitle className={`${styles.category} mt-3 ms-3 text-muted`}>
          &#9997;Article
        </Card.Subtitle>
        <Card.Body>
          <Row>
            <Col xs={10}>
              <Card.Title
                className={`${styles.title}`}
              >
                What if famous brands had regular fonts? Meet RegulaBrands!
              </Card.Title>
            </Col>
            <Col>
              <Dropdown>
                <Dropdown.Toggle className="d-flex align-items-center justify-content-end">
                  <BsThreeDots color={"#000000"} />
                </Dropdown.Toggle>
                <Dropdown.Menu>
                  <Dropdown.Item href="#/action-1">Edit</Dropdown.Item>
                  <Dropdown.Item href="#/action-2">
                    Report
                  </Dropdown.Item>
                  <Dropdown.Item href="#/action-3">
                    Option 3
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </Col>
          </Row>
          <Card.Text className={`${styles.excerpt}`}>
            I've worked in UX for the better part of a decade. From now on, I
            plan to rei...
          </Card.Text>
          <Row className="mt-4">
            <Col xs={6} className="d-flex flex-row align-items-center">
              <Image rounded src={Profile} />
              <Card.Text className={`${styles["author-name"]} ms-2`}>
                Elon Musk
              </Card.Text>
            </Col>
            <Col className={`${styles.views} d-flex flex-row align-items-center justiy-content-end`}>
              <FaRegEye />
              <Card.Text className={`${styles["views-text"]} ms-2 mt-3`}>
                1.4k views
              </Card.Text>
              <button className={`${styles["share-btn"]} ms-3`}>
                {" "}
                <FaShareAlt size={12} />
              </button>
            </Col>
          </Row>
        </Card.Body>
      </Card>
      
    </div>
  );
};

export default PostCard;
