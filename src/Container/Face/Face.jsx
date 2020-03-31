import React from "react";
import styles from "./Face.module.scss";
import LeftEye from "../../Components/LeftEye";
import RightEye from "../../Components/RightEye";
import SheaFace from "../../Components/EyeImages/Shea.png";
import { useState } from "react";

const Face = props => {
  // const [isRotated, toggleRotate] = useState(true);
  // const rotateStyles = isRotated ? "" : styles.rotate;

  const { angle } = props;
  const [eyesStraight, changeAngle] = useState(true);
  const newAngle = eyesStraight ? 0 : angle;

  const myStyle = {
    transform: `rotate(${newAngle}deg)`
  };

  const testFunc = () => {
    changeAngle(!eyesStraight);
  };

  const print = () => {
    console.log(eyesStraight);
    console.log(myStyle);
  };

  return (
    <>
      <section className={styles.faceContainer}>
        <img
          src={SheaFace}
          className={styles.faceImg}
          onClick={() => {
            testFunc();
            print();
          }}
        />
        <div className={styles.eyeImages}>
          <div className={styles.leftImg} style={myStyle}>
            <LeftEye />
          </div>
          <div className={styles.rightImg} style={myStyle}>
            <RightEye />
          </div>
        </div>
      </section>
    </>
  );
};

export default Face;
