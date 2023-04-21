import { Center } from "@chakra-ui/react";
import { EasterEggContextProvider } from "./EasterEggContext";
import { Phone } from "./Phone";

export const Homepage = () => {
  return (
    <EasterEggContextProvider>
      <Center
        backgroundImage="/noches_bedroom.png"
        height="100vh"
        width="100vw"
        backgroundSize="cover"
        backgroundPosition="center"
      >
        <Phone />
      </Center>
    </EasterEggContextProvider>
  );
};
