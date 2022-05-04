import React from "react";

import { Image, Row, Col } from "react-bootstrap";
import { MdOutlineLocationOn, MdModeEditOutline, MdOutlineThumbUpOffAlt } from "react-icons/md";

import Group1 from '../../assets/profileImages/group-1.png'

import styles from "./SideBar.module.css";

const SideBar = () => {
  return (
    <div
      className={`${styles.sidebar} mt-4`}
    >
      <div className={`${styles["location-input"]}`}>
        <MdOutlineLocationOn size={18} />
        <input className="px-1" placeholder="Noida, India" type="text" />
        <MdModeEditOutline size={18} />
        <hr className="mt-2" />
      </div>

      <div className={`${styles["recommended-groups"]} mt-5`}>
        <h4><MdOutlineThumbUpOffAlt className="mb-1" size={18} /> RECOMMENDED GROUPS</h4>
        <Group />
        <Group />
        <Group />
        <Group />
      </div>
    </div>
  );
};

const Group = () => {
    return (
        <Row className="mt-4">
            <Col xs={9} className={`${styles["group-name"]} d-flex align-items-center justify-content-start`}>
                <Image rounded src={Group1} />
                <p className="ms-2 mt-2">Leisure</p>
            </Col>
            <Col xs={2} className={`${styles.btn} mt-1`}>
                <button>
                    Follow
                </button>
            </Col>
        </Row>
    )
}

export default SideBar;
