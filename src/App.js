import React from "react";
import logo from "./logo.svg";
import styles from "./App.module.css";
import Face from "./Container/Face";

function App() {
 
  const getRandomNumber = () => Math.floor(Math.random() * 360);

  return (
    <>
    <div className={styles.faceImage}>
        <Face data-test="faceComponent" angle={getRandomNumber()} />
    </div>
    </>
  );
}

export default App;
