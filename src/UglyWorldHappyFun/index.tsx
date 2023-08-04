import { Image, Center } from "@chakra-ui/react";
import { ScreenWrapper } from "components/ScreenWrapper/ScreenWrapper";
import { useRouter } from "next/router";

export const UglyWorldHappyFun = () => {
  const router = useRouter();
  return (
    <ScreenWrapper screenBg={""}>
      <Center position="relative" height="full">
        <Image
          src="/happy_play_homescreen.png"
          width="full"
          onClick={() => router.push("/ugly-world-join-us")}
          cursor="pointer"
        />
      </Center>
    </ScreenWrapper>
  );
};
