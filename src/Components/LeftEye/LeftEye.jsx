import React from "react";
import styles from "./LeftEye.module.scss";
import left from "../EyeImages/left.png";

const LeftEye = () => {
  return <img className={styles.leftEye} src={left} />;
};

export default LeftEye;
