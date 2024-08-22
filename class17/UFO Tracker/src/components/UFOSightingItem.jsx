import React from "react";
import styles from "./UFOSightingItem.module.css";

const UFOSightingItem = (props) => {
  return (
    <li>
      <div>{props.date}</div>
      <div>{props.description}</div>
      <div>{props.location}</div>
    </li>
  );
};

export default UFOSightingItem;
