// src/components/info/InfoColumn.tsx
import React, { useEffect, useRef } from "react";
import styles from "@styles/info/InfoColumn.module.css";
import CustomListItem from "@components/info/CustomListItem";
import NoScrollWrapper from "@components/wrapper/NoScrollWrapper";

export interface InfoColumnProps {
  header: string;
  items: string[];
  selectedIndex: number;
  onItemClick?: (index: number) => void;
}

const InfoColumn: React.FC<InfoColumnProps> = ({
  header,
  items,
  selectedIndex,
  onItemClick,
}) => {
  const itemRefs = useRef<(HTMLLIElement | null)[]>([]);

  useEffect(() => {
    const current = itemRefs.current[selectedIndex];
    if (current) {
      current.scrollIntoView({ behavior: "smooth", block: "center" });
    }
  }, [selectedIndex]);

  return (
    <div className={styles.columnWrapper}>
      <div className={styles.columnHeader}>{header}</div>
      <NoScrollWrapper
        className={styles.listContainer}
        style={{ paddingBottom: "var(--spacing-sm)" }}
      >
        <ul className={styles.list}>
          {items.map((item, index) => (
            <CustomListItem
              key={index}
              text={item}
              onClick={() => onItemClick && onItemClick(index)}
              className={selectedIndex === index ? styles.highlighted : ""}
              ref={(el) => {
                itemRefs.current[index] = el;
              }}
            />
          ))}
        </ul>
      </NoScrollWrapper>
    </div>
  );
};

export default InfoColumn;
