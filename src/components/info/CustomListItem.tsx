// src/components/common/CustomListItem.tsx
import { forwardRef } from "react";
import styles from "@styles/info/CustomListItem.module.css";

export interface CustomListItemProps {
  text: string;
  onClick?: () => void;
  className?: string;
}

const CustomListItem = forwardRef<HTMLLIElement, CustomListItemProps>(
  ({ text, onClick, className }, ref) => {
    return (
      <li
        ref={ref}
        onClick={onClick}
        className={`${styles.customListItem} ${className || ""}`}
      >
        <span className={styles.icon}>
          {/* Cute heart icon (you may replace this with any other SVG) */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="var(--hot-pink)"
            width="16"
            height="16"
          >
            <path d="M12 17.27L18.18 21 16.54 13.97 22 9.24l-7.19-.62L12 2 9.19 8.62 2 9.24l5.46 4.73L5.82 21z" />
          </svg>
        </span>
        <span className={styles.text}>{text}</span>
      </li>
    );
  }
);

CustomListItem.displayName = "CustomListItem";

export default CustomListItem;
