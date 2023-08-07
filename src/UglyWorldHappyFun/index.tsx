import { Image, Center } from "@chakra-ui/react";
import { ScreenWrapper } from "components/ScreenWrapper/ScreenWrapper";
import { useSiteMetadata } from "context/SiteMetadataContext";
import { useRouter } from "next/router";

export const UglyWorldHappyFun = () => {
  const router = useRouter();
  const { setTitle } = useSiteMetadata();
  setTitle("Ugly Boy | Happy Fun World");
  return (
    <ScreenWrapper screenBg={""}>
      <Center position="relative" height="full">
        <Image
          src="/happy_play_homescreen.png"
          width="full"
          onClick={() => router.push("/ugly-boy/join-us")}
          cursor="pointer"
        />
      </Center>
    </ScreenWrapper>
  );
};
