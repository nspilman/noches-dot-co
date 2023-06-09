import { Center, Box } from "@chakra-ui/react";
import { Phone } from "./Phone";
import { useEasterEgg } from "context";
import { EmailCollectionWindow } from "components/EmailCollectionWindow";
import { useEmailCapture } from "context/EmailCaptureContext";
import { useShowPhoneNumber } from "context/ShowPhoneNumberContext";
import { PhoneNumberWindow } from "components/PhoneNumberWindow";

export const ScreenWrapper = ({
  children,
  screenBg,
}: {
  children: React.ReactElement;
  screenBg?: string;
}) => {
  const { easterEggStep } = useEasterEgg();
  const { showEmailCapture } = useEmailCapture();
  const { showShowPhoneNumber } = useShowPhoneNumber();
  return (
    <Center
      backgroundImage="/noches_bedroom.png"
      height="100vh"
      width="100vw"
      backgroundSize="cover"
      backgroundPosition="center"
      position={"relative"}
    >
      <Box
        width="100%"
        height="100%"
        position={"absolute"}
        bg={easterEggStep === "doorOpen" ? "rgb(0,0,0,.7)" : "unset"}
        transition="1s"
      ></Box>
      <Phone screenBg={screenBg}>
        <>
          {showEmailCapture && <EmailCollectionWindow />}
          {showShowPhoneNumber && <PhoneNumberWindow />}
          {children}
        </>
      </Phone>
    </Center>
  );
};
