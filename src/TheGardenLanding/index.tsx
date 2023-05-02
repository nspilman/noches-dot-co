import { Image, Box, Button, Center } from "@chakra-ui/react";
import { ScreenWrapper } from "components/ScreenWrapper/ScreenWrapper";
import { useEmailCapture } from "context/EmailCaptureContext";
import { useRouter } from "next/router";

export const TheGardenLanding = () => {
  const router = useRouter();
  const { setShowEmailCapture, onCloseCallback, setBlurb } = useEmailCapture();
  const onClick = () => {
    onCloseCallback.current = () => router.push("/the-garden-promo");
    setBlurb(`See how much further this rabbit hole
    goes, but first, let us keep you posted on the cool shit we've got in
    store for you.`);
    setShowEmailCapture(true);
  };
  return (
    <ScreenWrapper screenBg={"black"}>
      <Box position="relative">
        <Image src="/landing-page-bg.png" />
        <Box height="60vh" backgroundColor="black">
          <Center>
            <Button
              px="0"
              background="unset"
              _hover={{ background: "unset" }}
              onClick={onClick}
            >
              <Box
                zIndex={4}
                width="7.5rem"
                height="3.125rem"
                backgroundImage="/play-now-button.png"
                backgroundPosition={"center"}
                backgroundSize="cover"
                _hover={{
                  backgroundImage: "/play-now-button-glow.png",
                }}
              />
            </Button>
          </Center>
        </Box>
      </Box>
    </ScreenWrapper>
  );
};
