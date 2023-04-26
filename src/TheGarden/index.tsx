import { Image, Box, keyframes } from "@chakra-ui/react";
import { ScreenWrapper } from "components/ScreenWrapper/ScreenWrapper";
import { useRouter } from "next/router";

const pulseOpacity = keyframes`
  0%, 100% {
    opacity: 0.5;
  }
  50% {
    opacity: 1;
  }
`;

export const TheGarden = () => {
  const router = useRouter();
  return (
    <ScreenWrapper screenBg={""}>
      <Box position="relative">
        <Image src="/the-garden-page.png" />
        <Image
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
          onClick={() => router.push("/the-garden-landing")}
        />
      </Box>
    </ScreenWrapper>
  );
};
