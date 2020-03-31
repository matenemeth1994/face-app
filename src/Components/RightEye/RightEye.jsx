import React from "react";
import styles from "./RightEye.module.scss";
import right from "../EyeImages/right.png";

const RightEye = () => {
  return <img className={styles.rightEye} src={right} />;
};

export default RightEye;
