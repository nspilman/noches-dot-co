import { Box, Button, Image } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { Fade, ScaleFade, Slide, SlideFade, Collapse } from "@chakra-ui/react";
import { useRouter } from "next/router";

export const NewSite = () => {
  const [clicked, setClicked] = useState(false);
  const [showDoor, setShowDoor] = useState(false);
  useEffect(() => {
    if (clicked) {
      setTimeout(() => {
        setShowDoor(true);
      }, 4000);
    }
  });
  const router = useRouter();
  return (
    <Box
      backgroundSize={"cover"}
      backgroundImage={clicked ? "/pioneer.gif" : "/resized_gif.gif"}
      backgroundPosition={"center"}
      width="100vw"
      height="100vh"
    >
      <Box display={"flex"} flexDir="column">
        <Box height="50vh"></Box>
        <Box
          height="50vh"
          display="flex"
          alignItems={"center"}
          justifyContent="center"
          pl={{ base: "8", sm: "12", md: "16" }}
        >
          <ScaleFade in={!clicked} initialScale={1.2}>
            <Button
              onClick={() => setClicked(true)}
              position="relative"
              background={"transparent"}
              _hover={{ backround: "transaparent" }}
              _focus={{ backround: "transaparent" }}
              _active={{ backround: "transaparent" }}
            >
              <Box
                position="absolute"
                top="50%"
                width="28"
                height="1"
                sx={{
                  animation: "glow 1.5s infinite",
                  animationTimingFunction: "ease-in-out",
                }}
              />
              <Image
                // marginTop={{ base: "20rem", sm: "10rem" }}
                src="/noches website key.png"
                height="8rem"
              />
            </Button>
          </ScaleFade>
          <ScaleFade in={showDoor} initialScale={0.5}>
            <button onClick={() => router.push("/album-trailer")}>
              <Image
                src="/noches door 2.png"
                height="16rem"
                marginBottom={"8"}
              />
            </button>
          </ScaleFade>
        </Box>
      </Box>
    </Box>
  );
};
