import { Box, Image } from "@chakra-ui/react";
import { ScreenWrapper } from "components/ScreenWrapper/ScreenWrapper";
import { useShowPhoneNumber } from "context/ShowPhoneNumberContext";
import { useRouter } from "next/router";
import { useEffect, useRef, useState } from "react";
import { useNavigation } from "utils/useNavigation";
import { ScaryFacePopups } from "./UglyBoyPopup";

export const UglyBoy = () => {
  const router = useRouter();
  const { goHome } = useNavigation();
  const { setShowPhoneNumber, onCloseCallback, setBlurb } =
    useShowPhoneNumber();
  const [showUglyBoys, setShowUglyBoys] = useState(false);
  const audioRef = useRef<HTMLAudioElement>();
  const onClick = () => {
    onCloseCallback.current = () => {
      audioRef.current?.pause();
      goHome();
    };
    setShowUglyBoys(true);
    audioRef.current = playMp3Loop();
    setBlurb(`Unexpected Error - We didn't get your call. Please call `);

    setShowPhoneNumber(true);
  };

  useEffect(() => {
    return audioRef.current?.pause();
  }, [router]);

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
