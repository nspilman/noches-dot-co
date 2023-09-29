import { Box, Image } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { Fade, ScaleFade, Slide, SlideFade, Collapse } from "@chakra-ui/react";

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
            <button onClick={() => setClicked(true)}>
              <Image
                // marginTop={{ base: "20rem", sm: "10rem" }}
                src="/noches website key.png"
                height="8rem"
              />
            </button>
          </ScaleFade>
          <ScaleFade in={showDoor} initialScale={0.5}>
            <Image src="/noches door 2.png" height="16rem" marginBottom={"8"} />
          </ScaleFade>
        </Box>
      </Box>
    </Box>
  );
};
