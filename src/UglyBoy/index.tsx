import { Box, Image } from "@chakra-ui/react";
import { ScreenWrapper } from "components/ScreenWrapper/ScreenWrapper";
import { useShowPhoneNumber } from "context/ShowPhoneNumberContext";
import { useRef, useState } from "react";
import { useNavigation } from "utils/useNavigation";
import { ScaryFacePopups } from "./UglyBoyPopup";

export const UglyBoy = () => {
  const { goHome } = useNavigation();
  const { setShowPhoneNumber, onCloseCallback, setBlurb } =
    useShowPhoneNumber();
  const [showUglyBoys, setShowUglyBoys] = useState(false);
  const onClick = () => {
    onCloseCallback.current = () => goHome();
    setShowUglyBoys(true);
    playMp3Loop("PechugaVirus.mp3");
    setBlurb(`Unexpected Error - We didn't get your call. Please call `);

    setShowPhoneNumber(true);
  };
  function playMp3Loop(url: string): void {
    const audioContext = new AudioContext();
    const audioElement = new Audio(url);
    const source = audioContext.createMediaElementSource(audioElement);
    const gainNode = audioContext.createGain();

    // Connect the audio nodes
    source.connect(gainNode);
    gainNode.connect(audioContext.destination);

    // Set loop property to true
    audioElement.loop = true;

    // Start playing the audio
    audioElement.play();
  }

  const positionRef = useRef(null);
  return (
    <ScreenWrapper>
      <Box ref={positionRef}>
        <Image
          src="ugly-boy-coming-soon.png"
          height="full"
          width="full"
          alt="Ugly Boy Coming Soon..."
          _hover={{
            cursor: "pointer",
          }}
          onClick={onClick}
        />
        {showUglyBoys && <ScaryFacePopups parentRef={positionRef} />}
      </Box>
    </ScreenWrapper>
  );
};
