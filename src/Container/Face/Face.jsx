import React from "react";
import styles from "./Face.module.scss";
import LeftEye from "../../Components/LeftEye";
import RightEye from "../../Components/RightEye";
import SheaFace from "../../Components/EyeImages/Shea.png";
import { useState } from "react";

const Face = (props) => {
  const { angle } = props;
  const [eyesStraight, changeAngle] = useState(true);
  const newAngle = eyesStraight ? 0 : angle;

  const myStyle = {
    transform: `rotate(${newAngle}deg)`,
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
      <section data-test="faceSection" className={styles.faceContainer}>
        <img
          data-test="faceImage"
          src={SheaFace}
          className={styles.faceImg}
          onClick={() => {
            testFunc();
            print();
          }}
        />
        <div className={styles.eyeImages}>
          <div className={styles.leftImg} style={myStyle}>
            <LeftEye data-test="leftEyeImage" />
          </div>
          <div  className={styles.rightImg} style={myStyle}>
            <RightEye data-test="rightEyeImage"/>
          </div>
        </div>
      </section>
    </>
  );
};

export default Face;
