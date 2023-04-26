import { Button, Image, Box } from "@chakra-ui/react";
import { ScreenWrapper } from "components/ScreenWrapper/ScreenWrapper";
import { useRouter } from "next/router";

export const PickAStory = () => {
  const router = useRouter();
  return (
    <ScreenWrapper screenBg={""}>
      <>
        <Image src="/pick-a-story-bg.png" />
        <Button
          px="0"
          background="unset"
          _hover={{ background: "unset" }}
          onClick={() => router.push("/the-garden")}
          position="absolute"
          top="635px"
          left="60px"
        >
          <Box
            zIndex={4}
            width="100px"
            height="50px"
            backgroundImage="unset"
            backgroundPosition={"center"}
            backgroundSize="cover"
            _hover={{
              backgroundImage: "/garden-button-glow.png",
            }}
          />
        </Button>
      </>
    </ScreenWrapper>
  );
};
