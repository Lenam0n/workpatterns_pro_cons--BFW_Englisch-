export interface DirectionButtonProps {
  direction: "up" | "down" | "left" | "right";
  onClick: () => void;
  orientation?: "vertical" | "horizontal";
}

export interface LimitedCarouselProps<T> {
  items: T[];
  visibleCount: number;
  threshold: number;
  renderItem: (item: T, index: number) => React.ReactNode;
}
