import { Image, Box, keyframes, Button, Center } from "@chakra-ui/react";
import { ScreenWrapper } from "components/ScreenWrapper/ScreenWrapper";
import { useRouter } from "next/router";

export const TheGardenPromo = () => {
  const router = useRouter();
  return (
    <ScreenWrapper screenBg={""}>
      <Box width="full" height="full" background="black" display="flex">
        <video width="100%" height="100%" controls autoPlay={true}>
          <source src="/the-garden-promo-pt-1.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </Box>
    </ScreenWrapper>
  );
};
