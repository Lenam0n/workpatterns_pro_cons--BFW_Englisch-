import { useState, useEffect } from "react";
import { InfoItem } from "../interfaces/IInfo";

const formatCategoryName = (key: string): string => {
  const result = key.replace(/([A-Z])/g, " $1");
  return result.charAt(0).toUpperCase() + result.slice(1);
};

export const useInfoData = (): {
  infoData: InfoItem[];
  refreshInfo: () => void;
} => {
  const [infoData, setInfoData] = useState<InfoItem[]>([]);

  const fetchInfoData = async () => {
    try {
      const response = await fetch("/data/workPatterns.json");
      const jsonData = await response.json();

      const items: InfoItem[] = Object.keys(jsonData).map((key, index) => {
        const categoryName = formatCategoryName(key);
        const data = jsonData[key];
        return {
          id: index + 1,
          label: categoryName,
          title: categoryName,
          description: `Pros and Cons for ${categoryName}`,
          pros: data.pros,
          cons: data.cons,
        };
      });
      setInfoData(items);
    } catch (error) {
      console.error("Error fetching info data:", error);
    }
  };

  useEffect(() => {
    fetchInfoData();
  }, []);

  const refreshInfo = () => {
    fetchInfoData();
  };

  return { infoData, refreshInfo };
};
