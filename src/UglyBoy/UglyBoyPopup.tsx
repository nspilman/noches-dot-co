import { Box, Image } from "@chakra-ui/react";
import { WindoWElement } from "components/WindowElement";
import { useEffect, useState, RefObject, useMemo } from "react";
import { getRandomPosition } from "utils/getRandomPosition";

export const ScaryFacePopups = ({
  parentRef,
}: {
  parentRef: RefObject<HTMLDivElement>;
}) => {
  const [popUps, setPopUps] = useState<
    Array<{
      img: string;
      position: { top: number; left: number };
      windowName: string;
    }>
  >([]);

  const images = useMemo(
    () => [
      "face1.png",
      "face2.png",
      "face3.png",
      "face4.png",
      "face5.png",
      "face6.png",
      "face7.png",
      "face8.png",
      "face9.png",
    ],
    []
  );

  useEffect(() => {
    const interval = setInterval(() => {
      const randomIndex = Math.floor(Math.random() * images.length);
      const position = getRandomPosition(parentRef, { left: -100 });
      const headers = [
        "UGLYUGLYUGLYUGLYUGLY",
        "HEY THERE UGLY BOY",
        "UGLYBOYUGLYBOYUGLYBOY",
      ];
      setPopUps((prev) => [
        ...prev,
        {
          img: images[randomIndex],
          position,
          windowName: headers[Math.floor(Math.random() * headers.length)],
        },
      ]);
    }, 500);

    return () => clearInterval(interval);
  }, [images, parentRef]);

  return (
    <Box height="full" width="full">
      {popUps.map((popUp, index) => (
        <PopUp
          key={index}
          image={popUp.img}
          position={popUp.position}
          windowName={popUp.windowName}
        />
      ))}
    </Box>
  );
};
interface PopUpProps {
  image: string;
  position: { top: number; left: number };
  windowName: string;
}

const PopUp: React.FC<PopUpProps> = ({ image, position, windowName }) => {
  return (
    <Box
      position="absolute"
      top={position.top}
      left={position.left}
      zIndex="1000"
    >
      <WindoWElement windowName={windowName} width={"250px"}>
        <Image src={`scaryFaces/${image}`} alt="Random pop-up" />
      </WindoWElement>
    </Box>
  );
};
