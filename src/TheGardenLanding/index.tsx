import { Image, Box, keyframes, Button, Center } from "@chakra-ui/react";
import { ScreenWrapper } from "components/ScreenWrapper/ScreenWrapper";
import { useRouter } from "next/router";

export const TheGardenLanding = () => {
  const router = useRouter();
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
              onClick={() => router.push("/the-garden-promo")}
            >
              <Box
                zIndex={4}
                width="120px"
                height="50px"
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
