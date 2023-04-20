import { Center } from "@chakra-ui/react";
import { Phone } from "./Phone";

export const Homepage = () => {
  return (
    <Center
      backgroundImage="/bedroom.png"
      height="100vh"
      width="100vw"
      backgroundSize="contain"
    >
      <Phone />
    </Center>
  );
};
