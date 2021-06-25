import React from "react";

import Backdrop from "../Backdrop/Backdrop";
import styles from "./Modal.module.css";

const modal = (props) => (
  <div>
    <Backdrop show={props.show} switch={props.switch} />

    <div
      className={styles.modal}
      style={{
        transform: props.show ? "translateY(0)" : "translateY(-100vh)",
        opacity: props.show ? "1" : "0",
      }}
    >
      {props.children}
    </div>
  </div>
);

export default modal;
