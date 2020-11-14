import React from "react";
import styles from "./button.module.css";

export default function Button(props) {
  return (
    <>
      <button
        className={styles.btn}
        style={props.style}
        onClick={props.onClick}
      >
        {props.buttonName}
      </button>
    </>
  );
}