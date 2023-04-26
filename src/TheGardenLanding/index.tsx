import { Image, Box, keyframes } from "@chakra-ui/react";
import { ScreenWrapper } from "components/ScreenWrapper/ScreenWrapper";

const pulseOpacity = keyframes`
  0%, 100% {
    opacity: 0.5;
  }
  50% {
    opacity: 1;
  }
`;

export const TheGardenLanding = () => {
  return (
    <ScreenWrapper screenBg={""}>
      <Box position="relative">
        <Image src="/landing-page-bg.png" />
        {/* <Image
          src="deer-glow2.png"
          position="absolute"
          bottom={0}
          sx={{
            animation: `${pulseOpacity} 2s infinite ease-in-out`,
            opacity: 0.5,
            transition: "opacity 0.5s ease-in-out",
            "&:hover": {
              opacity: 1,
              animation: "unset",
              cursor: "pointer",
            },
          }}
        /> */}
      </Box>
    </ScreenWrapper>
  );
};
