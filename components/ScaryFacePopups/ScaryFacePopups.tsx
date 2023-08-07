import { Box, Image } from "@chakra-ui/react";
import { WindoWElement } from "components/WindowElement";
import { useRouter } from "next/router";
import { useEffect, useState, RefObject, useMemo, useRef } from "react";
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

  const router = useRouter();

  const audioRef = useRef<HTMLAudioElement>();

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
    return audioRef.current?.pause();
  }, [router.pathname]);

  useEffect(() => {
    function playMp3Loop() {
      const audioElement = new Audio("PechugaVirus.mp3");

      const audioContext = new AudioContext();

      const source = audioContext.createMediaElementSource(audioElement);
      const gainNode = audioContext.createGain();

      // Connect the audio nodes
      source.connect(gainNode);
      gainNode.connect(audioContext.destination);

      // Set loop property to true
      audioElement.loop = true;

      // Start playing the audio
      audioElement.play();
      return audioElement;
    }

    audioRef.current = playMp3Loop();
  }, []);

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
