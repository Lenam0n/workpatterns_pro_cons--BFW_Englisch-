import React from "react";
import styles from "@styles/info/CircleItem.module.css";
import { CircleItemsProps } from "@interfaces/IInfo";

const CircleItem: React.FC<CircleItemsProps> = ({
  label,
  translateX,
  translateY,
  rotation,
  hoverScale,
  itemSize,
  onClick,
}) => {
  return (
    <div
      className={styles.circleItem}
      onClick={onClick}
      style={
        {
          "--translate-x": translateX,
          "--translate-y": translateY,
          "--rotate-counter": rotation,
          "--hover-scale": hoverScale,
          "--item-size": itemSize,
        } as React.CSSProperties
      }
    >
      <div className={styles.itemContent}>{label}</div>
    </div>
  );
};

export default CircleItem;
