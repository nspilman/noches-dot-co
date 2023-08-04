import { Image, Center } from "@chakra-ui/react";
import { ScreenWrapper } from "components/ScreenWrapper/ScreenWrapper";
import { useRouter } from "next/router";

export const UglyWorld = () => {
  const router = useRouter();
  return (
    <ScreenWrapper screenBg={""}>
      <Center position="relative" height="full">
        <Image
          src="/ugly_world_bg.png"
          width="full"
          onClick={() => router.push("/happy-happy-play-fun")}
          cursor="pointer"
        />
      </Center>
    </ScreenWrapper>
  );
};
