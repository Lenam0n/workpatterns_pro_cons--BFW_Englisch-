import { useState } from "react";
import styles from "@styles/common/LimitedCarousel.module.css";
import { DirectionButton } from "@components/common/DirectionButton";
import { LimitedCarouselProps } from "@interfaces/IGlobal";

const LimitedCarousel = <T,>({
  items,
  visibleCount,
  threshold,
  renderItem,
}: LimitedCarouselProps<T>) => {
  const total = items.length;
  const [startIndex, setStartIndex] = useState(0);

  if (total <= threshold) {
    return (
      <div className={styles.limitedCarousel}>
        {items.map((item, index) => (
          <div key={index}>{renderItem(item, index)}</div>
        ))}
      </div>
    );
  }

  const visibleItems = items.slice(startIndex, startIndex + visibleCount);
  if (visibleItems.length < visibleCount) {
    visibleItems.push(...items.slice(0, visibleCount - visibleItems.length));
  }

  const handlePrev = () => {
    setStartIndex((prev) => (prev - 1 + total) % total);
  };

  const handleNext = () => {
    setStartIndex((prev) => (prev + 1) % total);
  };

  return (
    <>
      <div className={styles.limitedCarousel}>
        <DirectionButton direction="left" onClick={handlePrev} />
        {visibleItems.map((item, index) => (
          <div key={index}>{renderItem(item, index)}</div>
        ))}
        <DirectionButton direction="right" onClick={handleNext} />
      </div>
    </>
  );
};

export default LimitedCarousel;
