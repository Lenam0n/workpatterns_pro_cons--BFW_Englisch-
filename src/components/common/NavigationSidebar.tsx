// src/components/common/NavigationSidebar.tsx
import React from "react";
import styles from "@styles/common/NavigationSidebar.module.css";
import { DirectionButton } from "@components/common/DirectionButton";

export interface NavigationSidebarProps {
  onHorizontalLeft: () => void;
  onHorizontalRight: () => void;
  onProVerticalUp: () => void;
  onProVerticalDown: () => void;
  onConVerticalUp: () => void;
  onConVerticalDown: () => void;
}

export const NavigationSidebar: React.FC<NavigationSidebarProps> = ({
  onHorizontalLeft,
  onHorizontalRight,
  onProVerticalUp,
  onProVerticalDown,
  onConVerticalUp,
  onConVerticalDown,
}) => {
  return (
    <div className={styles.sidebarContainer}>
      {/* Horizontal Controls */}
      <div className={styles.horizontalControls}>
        <DirectionButton
          direction="left"
          orientation="horizontal"
          onClick={onHorizontalLeft}
        />
        <DirectionButton
          direction="right"
          orientation="horizontal"
          onClick={onHorizontalRight}
        />
      </div>
      <hr className={styles.divider} />
      {/* Vertical Controls for Pro and Contra */}
      <div className={styles.verticalGroups}>
        <div className={styles.verticalGroup}>
          <h4 className={styles.groupTitle}>Pro</h4>
          <DirectionButton
            direction="up"
            orientation="vertical"
            onClick={onProVerticalUp}
          />
          <DirectionButton
            direction="down"
            orientation="vertical"
            onClick={onProVerticalDown}
          />
        </div>
        <div className={styles.verticalGroup}>
          <h4 className={styles.groupTitle}>Contra</h4>
          <DirectionButton
            direction="up"
            orientation="vertical"
            onClick={onConVerticalUp}
          />
          <DirectionButton
            direction="down"
            orientation="vertical"
            onClick={onConVerticalDown}
          />
        </div>
      </div>
    </div>
  );
};
