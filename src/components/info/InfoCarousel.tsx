// src/components/info/InfoCarousel.tsx
import React, { useState, useEffect, useRef } from "react";
import styles from "@styles/info/InfoCarousel.module.css";
import { carouselConfig } from "@config/carouselConfig";
import CircleItem from "@components/info/CircleItem";
import InfoModal, { InfoModalHandle } from "@components/info/InfoModal";
import Loading from "@components/common/Loading";
import {
  calculateEffectiveRadius,
  getVisibleItems,
  calculateItemPosition,
} from "../../utils/carouselUtils";
import { useInfoData } from "../../hook/useInfoData";
import { InfoItem } from "../../interfaces/IInfo";

const InfoCarousel: React.FC = () => {
  const { infoData } = useInfoData();
  const containerRef = useRef<HTMLDivElement>(null);
  const modalRef = useRef<InfoModalHandle>(null);

  const [selectedItem, setSelectedItem] = useState<InfoItem | null>(null);
  const [startIndex, setStartIndex] = useState(0);
  const [touchStartX, setTouchStartX] = useState<number | null>(null);
  const [touchEndX, setTouchEndX] = useState<number | null>(null);

  useEffect(() => {
    if (infoData.length > 0 && selectedItem === null) {
      setSelectedItem(infoData[0]);
    }
  }, [infoData, selectedItem]);

  if (infoData.length === 0 || selectedItem === null) {
    return <Loading />;
  }

  const items: InfoItem[] = infoData.slice(0, carouselConfig.visibleCount);
  const total = items.length;
  const {
    arcStartAngle,
    arcEndAngle,
    hoverScale,
    visibleCount,
    radius,
    itemSize,
    text_Rotation,
    minDistance,
  } = carouselConfig;

  const angleStepDeg =
    visibleCount > 1 ? (arcEndAngle - arcStartAngle) / (visibleCount - 1) : 0;
  const effectiveRadius = calculateEffectiveRadius(
    radius,
    visibleCount,
    arcStartAngle,
    arcEndAngle,
    minDistance
  );

  const handleItemClick = (item: InfoItem) => {
    setSelectedItem(item);
  };

  const handlePrev = () => {
    setStartIndex((prev) => {
      const newIndex = (prev - 1 + total) % total;
      setSelectedItem(items[newIndex]);
      return newIndex;
    });
  };

  const handleNext = () => {
    setStartIndex((prev) => {
      const newIndex = (prev + 1) % total;
      setSelectedItem(items[newIndex]);
      return newIndex;
    });
  };

  const handleWheel = (event: React.WheelEvent<HTMLDivElement>) => {
    if (event.deltaY > 0) {
      handlePrev();
    } else {
      handleNext();
    }
  };

  const handleTouchStart = (event: React.TouchEvent<HTMLDivElement>) => {
    setTouchStartX(event.touches[0].clientX);
  };

  const handleTouchMove = (event: React.TouchEvent<HTMLDivElement>) => {
    setTouchEndX(event.touches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (touchStartX !== null && touchEndX !== null) {
      const delta = touchStartX - touchEndX;
      const swipeThreshold = 50;
      if (delta > swipeThreshold) {
        handleNext();
      } else if (delta < -swipeThreshold) {
        handlePrev();
      }
    }
    setTouchStartX(null);
    setTouchEndX(null);
  };

  const visibleItems = getVisibleItems(items, startIndex, visibleCount);

  return (
    <section
      className={styles.infoCarousel}
      onWheel={handleWheel}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
      ref={containerRef}
    >
      <div className={styles.infoCarouselContainer}>
        {visibleItems.map((item, index) => {
          const { x, y } = calculateItemPosition(
            index,
            arcStartAngle,
            angleStepDeg,
            effectiveRadius
          );
          return (
            <CircleItem
              key={item.id}
              label={item.label}
              translateX={`${x}px`}
              translateY={`${-y}px`}
              hoverScale={hoverScale}
              rotation={text_Rotation}
              itemSize={`${itemSize}px`}
              onClick={() => handleItemClick(item)}
            />
          );
        })}
      </div>
      <InfoModal
        ref={modalRef}
        title={selectedItem.title}
        pros={selectedItem.pros}
        cons={selectedItem.cons}
        onHorizontalLeft={handleNext}
        onHorizontalRight={handlePrev}
      />
    </section>
  );
};

export default InfoCarousel;
