import { Heading } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { getRandomInterval } from "utils/getRandomInterval";
import { getRandomPosition } from "utils/getRandomPosition";

const RandomText = ({
  parentElement,
  text,
}: {
  parentElement: React.RefObject<HTMLDivElement>;
  text: string;
}) => {
  const [top, setTop] = useState<string>("0px");
  const [left, setLeft] = useState<string>("0px");
  const [color, setColor] = useState<string>("black");

  const randomizePositionAndColor = () => {
    const { top, left } = getRandomPosition(parentElement, { top: 200 });
    const randomColor = `hsl(${Math.random() * 360}, 100%, 50%)`;

    setTop(`${top}px`);
    setLeft(`${left}px`);
    setColor(randomColor);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      randomizePositionAndColor();
    }, getRandomInterval(500, 1000));

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <Heading
      position="absolute"
      top={top}
      left={left}
      color={color}
      fontSize="5xl"
      fontWeight="bold"
    >
      {text}
    </Heading>
  );
};

export default RandomText;
