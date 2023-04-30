import { Image, Box, keyframes, Button, Center } from "@chakra-ui/react";
import { ScreenWrapper } from "components/ScreenWrapper/ScreenWrapper";
import { useRouter } from "next/router";

export const UglyBoy = () => {
  const router = useRouter();
  return (
    <ScreenWrapper screenBg={""}>
      <Image
        src="ugly-boy-coming-soon.png"
        height="full"
        width="full"
        _hover={{
          cursor: "pointer",
        }}
        onClick={() => router.push("/")}
      />
    </ScreenWrapper>
  );
};
