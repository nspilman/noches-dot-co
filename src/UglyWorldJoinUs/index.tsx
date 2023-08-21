import { Image, Center } from "@chakra-ui/react";
import { ScreenWrapper } from "components/ScreenWrapper/ScreenWrapper";
import { useSiteMetadata } from "context/SiteMetadataContext";
import { useRouter } from "next/router";

export const UglyWorldJoinUs = () => {
  const router = useRouter();
  const { setTitle } = useSiteMetadata();
  setTitle("Ugly Boy | Join Us");
  return (
    <ScreenWrapper screenBg={""}>
      <Center position="relative" height="full">
        <Image
          src="/happy_world_join_us.png"
          width="full"
          onClick={() => router.push("/ugly-boy/promo")}
          cursor="pointer"
        />
      </Center>
    </ScreenWrapper>
  );
};
