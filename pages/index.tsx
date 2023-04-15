import { Center } from "@chakra-ui/react";
import type { NextPage } from "next";
import { Phone } from "../components/Phone/Phone";

const Home: NextPage = () => {
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

export default Home;
