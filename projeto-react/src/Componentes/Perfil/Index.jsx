import React from 'react';
import styles from "./Perfil.css";
import medicImage from "../Image/medic.png";

const Perfil = () => {
  return (
    <header className={styles.header}>
      <img
        className={styles.avatar}
        src={medicImage}
        alt=""
      />
      <h1 className={styles.name}>CALCULADORA DE IMC </h1>
    </header>
  );
};

export default Perfil;