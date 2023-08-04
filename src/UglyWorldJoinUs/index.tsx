import { Image, Center } from "@chakra-ui/react";
import { ScreenWrapper } from "components/ScreenWrapper/ScreenWrapper";
import { useRouter } from "next/router";

export const UglyWorldJoinUs = () => {
  const router = useRouter();
  return (
    <ScreenWrapper screenBg={""}>
      <Center position="relative" height="full">
        <Image
          src="/happy_world_join_us.png"
          width="full"
          onClick={() => router.push("/ugly-boy-coming-soon")}
          cursor="pointer"
        />
      </Center>
    </ScreenWrapper>
  );
};
