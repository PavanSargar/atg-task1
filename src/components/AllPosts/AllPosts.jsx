import React from "react";

import { Row, Col } from "react-bootstrap";
import { FaPencilAlt } from "react-icons/fa"
import PostCard from "../../UI/PostCard/PostCard";
import SideBar from "../SideBar/SideBar";

import styles from "./AllPosts.module.css";

const AllPosts = () => {
  return (
    <div className={styles.allposts}>
      <Row>
        <Col sm={12} md={8}>
          <PostCard />
          <PostCard />
          <button className={styles["floating-btn"]}>
            <FaPencilAlt color={"ffffff"} />
          </button>
        </Col>
        <Col md={4} sm={12} className="d-flex justify-content-end">
          <SideBar />
        </Col>
      </Row>
    </div>
  );
};

export default AllPosts;
