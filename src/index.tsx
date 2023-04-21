import { Center, Box } from "@chakra-ui/react";
import { EasterEggContextProvider, useEasterEgg } from "./EasterEggContext";
import { Phone } from "./Phone";

export const Homepage = () => {
  const { easterEggStep } = useEasterEgg();
  return (
    <Center
      backgroundImage="/noches_bedroom.png"
      height="100vh"
      width="100vw"
      backgroundSize="cover"
      backgroundPosition="center"
      position={"relative"}
    >
      <Box
        width="100%"
        height="100%"
        position={"absolute"}
        bg={easterEggStep === "doorOpen" ? "rgb(0,0,0,.7)" : "unset"}
        transition="1s"
      ></Box>
      <Phone />
    </Center>
  );
};
