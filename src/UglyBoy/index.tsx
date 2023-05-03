import { Image } from "@chakra-ui/react";
import { ScreenWrapper } from "components/ScreenWrapper/ScreenWrapper";
import { useEmailCapture } from "context/EmailCaptureContext";
import { useRouter } from "next/router";
import { useNavigation } from "utils/useNavigation";

export const UglyBoy = () => {
  const router = useRouter();
  const { setShowEmailCapture, onCloseCallback, setBlurb } = useEmailCapture();
  const { goHome } = useNavigation();
  const onClick = () => {
    onCloseCallback.current = () => goHome();
    setBlurb(
      "You're here early, Ugly Boy! We'll let you know when to come back"
    );

    setShowEmailCapture(true);
  };
  return (
    <ScreenWrapper>
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
    </ScreenWrapper>
  );
};
