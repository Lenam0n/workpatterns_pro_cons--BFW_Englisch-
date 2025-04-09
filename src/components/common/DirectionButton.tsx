// src/components/common/DirectionButton.tsx
import React from "react";
import styles from "@styles/common/DirectionButton.module.css";
import { DirectionButtonProps } from "@interfaces/IGlobal";

export const DirectionButton: React.FC<DirectionButtonProps> = ({
  direction,
  onClick,
  orientation = "horizontal",
}) => {
  let arrow = "";
  if (orientation === "vertical") {
    if (direction === "up") arrow = "▲";
    else if (direction === "down") arrow = "▼";
  } else {
    if (direction === "left") arrow = "◀";
    else if (direction === "right") arrow = "▶";
  }
  return (
    <button className={styles.navButton} onClick={onClick}>
      {arrow}
    </button>
  );
};
