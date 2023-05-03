import { Image, Box, Button, Center, Stack } from "@chakra-ui/react";
import { ActionButton } from "components/ActionButton";
import { ScreenWrapper } from "components/ScreenWrapper/ScreenWrapper";
import { Window } from "components/Window";
import { useEmailCapture } from "context/EmailCaptureContext";
import { useRouter } from "next/router";
import { useState } from "react";

export const TheGardenLanding = () => {
  const router = useRouter();
  const [showWarning, setShowWarning] = useState(false);

  return (
    <ScreenWrapper screenBg={"black"}>
      <Box position="relative">
        {showWarning && (
          <Window
            windowName="Security Warning"
            onClose={() => setShowWarning(false)}
          >
            <>
              <Image src="/launch-video-warning.png" />
              <Stack direction={"row"} justifyContent="flex-end">
                <ActionButton
                  label="No"
                  onClick={() => setShowWarning(false)}
                />
                <ActionButton
                  label="Yes"
                  onClick={() => router.push("/the-garden-promo")}
                />
              </Stack>
            </>
          </Window>
        )}

        <Image src="/landing-page-bg.png" />
        <Box height="60vh" backgroundColor="black">
          <Center>
            <Button
              px="0"
              background="unset"
              _hover={{ background: "unset" }}
              onClick={() => setShowWarning(true)}
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
