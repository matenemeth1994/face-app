import React from "react";
import logo from "./logo.svg";
import styles from "./App.module.css";
import Face from "./Container/Face";

function App() {
  let multipleFace = [];
  let numberOfFaces = 5;  
  const getRandomNumber = () => Math.floor(Math.random() * 360);

  for(let i = 0; i < numberOfFaces; i++) {
    multipleFace.push( <Face angle={getRandomNumber()} />)
  };

  return (
    <>
    <div className={styles.faceImage}>
        <Face angle={getRandomNumber()} />
    </div>
    </>
  );
}

export default App;
