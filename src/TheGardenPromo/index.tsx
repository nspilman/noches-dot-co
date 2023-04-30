import { Box } from "@chakra-ui/react";
import { ScreenWrapper } from "components/ScreenWrapper/ScreenWrapper";
import { useRouter } from "next/router";

export const TheGardenPromo = () => {
  const router = useRouter();
  return (
    <ScreenWrapper screenBg={""}>
      <Box width="full" height="full" background="black" display="flex">
        <iframe
          width="100%"
          src={"https://www.youtube.com/embed/F2SftCkhH3Y"}
          title="The Garden Promo pt 1"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        />
      </Box>
    </ScreenWrapper>
  );
};
