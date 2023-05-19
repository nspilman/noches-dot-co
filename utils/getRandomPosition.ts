import { RefObject } from "react";

export const getRandomPosition = (
  parentElement: RefObject<HTMLDivElement>,
  offset?: { top?: number; left?: number }
) => {
  const screenWidth = parentElement.current?.clientWidth || 0;
  const screenHeight = parentElement.current?.clientHeight || 0;
  const top = Math.floor(Math.random() * screenHeight + (offset?.top || 0));
  const left = Math.floor(Math.random() * screenWidth + (offset?.left || 0));
  return { left, top };
};
