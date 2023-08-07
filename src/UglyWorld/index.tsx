import { Image, Center } from "@chakra-ui/react";
import { ScreenWrapper } from "components/ScreenWrapper/ScreenWrapper";
import { useSiteMetadata } from "context/SiteMetadataContext";
import { useRouter } from "next/router";

export const UglyWorld = () => {
  const router = useRouter();
  const { setTitle } = useSiteMetadata();
  setTitle("Ugly Boy | Ugly World");
  return (
    <ScreenWrapper screenBg={""}>
      <Center position="relative" height="full">
        <Image
          src="/ugly_world_bg.png"
          width="full"
          onClick={() => router.push("/ugly-boy/happy-happy-play-fun")}
          cursor="pointer"
        />
      </Center>
    </ScreenWrapper>
  );
};
