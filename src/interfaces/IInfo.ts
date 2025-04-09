export interface CircleItemsProps {
  label: string;
  translateX: string;
  translateY: string;
  rotation: string;
  hoverScale: number;
  itemSize: string;
  onClick: () => void;
}

export interface CarouselItem {
  id: number;
  label: string;
  title: string;
  description: string;
  examples: string[];
}

export interface InfoCarouselProps {
  items: CarouselItem[];
}

export interface InfoItem {
  id: number;
  label: string;
  title: string;
  description: string;
  pros: string[];
  cons: string[];
}
export interface InfoModalProps {
  title: string;
  pros: string[];
  cons: string[];
  onHorizontalLeft: () => void;
  onHorizontalRight: () => void;
}

