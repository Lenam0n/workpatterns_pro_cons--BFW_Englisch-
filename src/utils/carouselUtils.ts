// Berechnet den effektiven Radius, sodass der Mindestabstand eingehalten wird.
export const calculateEffectiveRadius = (
  radius: number,
  visibleCount: number,
  arcStartAngle: number,
  arcEndAngle: number,
  minDistance: number
): number => {
  if (visibleCount <= 1) return radius;
  const angleStepDeg = (arcEndAngle - arcStartAngle) / (visibleCount - 1);
  const angleStepRad = angleStepDeg * (Math.PI / 180);
  let effectiveRadius = radius;
  const chord = 2 * radius * Math.sin(angleStepRad / 2);
  if (chord < minDistance) {
    effectiveRadius = minDistance / (2 * Math.sin(angleStepRad / 2));
  }
  return effectiveRadius;
};

// Gibt die sichtbaren Items basierend auf startIndex und visibleCount zurück.
// Hier wird das Array reversiert, damit die Reihenfolge von links nach rechts stimmt.
export const getVisibleItems = <T>(
  items: T[],
  startIndex: number,
  visibleCount: number
): T[] => {
  const total = items.length;
  const visibleItems: T[] = [];
  for (let i = 0; i < visibleCount; i++) {
    visibleItems.push(items[(startIndex + i) % total]);
  }
  return visibleItems.reverse();
};

// Berechnet die x- und y-Verschiebung für ein Item basierend auf seinem Index.
export const calculateItemPosition = (
  index: number,
  arcStartAngle: number,
  angleStepDeg: number,
  effectiveRadius: number
): { x: number; y: number } => {
  const angle = arcStartAngle + index * angleStepDeg;
  const rad = (angle * Math.PI) / 180;
  return {
    x: effectiveRadius * Math.cos(rad),
    y: effectiveRadius * Math.sin(rad),
  };
};
