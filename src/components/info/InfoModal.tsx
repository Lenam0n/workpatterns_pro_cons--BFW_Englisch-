// src/components/info/InfoModal.tsx
import { useState, useImperativeHandle, forwardRef } from "react";
import styles from "@styles/info/InfoModal.module.css";
import { InfoModalProps } from "@interfaces/IInfo";
import { NavigationSidebar } from "@components/common/NavigationSidebar";
import InfoColumn from "./InfoColumn";

export interface InfoModalHandle {
  handleProUp: () => void;
  handleProDown: () => void;
  handleConUp: () => void;
  handleConDown: () => void;
}

const InfoModal = forwardRef<InfoModalHandle, InfoModalProps>(
  ({ title, pros, cons, onHorizontalLeft, onHorizontalRight }, ref) => {
    const [selectedProIndex, setSelectedProIndex] = useState(0);
    const [selectedConIndex, setSelectedConIndex] = useState(0);

    const handleProUp = () => {
      setSelectedProIndex((prev) => (prev === 0 ? pros.length - 1 : prev - 1));
    };

    const handleProDown = () => {
      setSelectedProIndex((prev) => (prev + 1) % pros.length);
    };

    const handleConUp = () => {
      setSelectedConIndex((prev) => (prev === 0 ? cons.length - 1 : prev - 1));
    };

    const handleConDown = () => {
      setSelectedConIndex((prev) => (prev + 1) % cons.length);
    };

    useImperativeHandle(ref, () => ({
      handleProUp,
      handleProDown,
      handleConUp,
      handleConDown,
    }));

    return (
      <div className={styles.modalContainer}>
        <div className={styles.modalHeader}>
          <h2 className={styles.modalTitle}>{title}</h2>
        </div>
        <div className={styles.modalBody}>
          <div className={styles.modalContentWrapper}>
            <div className={styles.listsWrapper}>
              <InfoColumn
                header="Pro"
                items={pros}
                selectedIndex={selectedProIndex}
                onItemClick={setSelectedProIndex}
              />
              <InfoColumn
                header="Cons"
                items={cons}
                selectedIndex={selectedConIndex}
                onItemClick={setSelectedConIndex}
              />
            </div>
            {/* Sidebar positioned to the right */}
            <div className={styles.modalSidebarWrapper}>
              <NavigationSidebar
                onHorizontalLeft={onHorizontalLeft}
                onHorizontalRight={onHorizontalRight}
                onProVerticalUp={handleProUp}
                onProVerticalDown={handleProDown}
                onConVerticalUp={handleConUp}
                onConVerticalDown={handleConDown}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
);

export default InfoModal;
