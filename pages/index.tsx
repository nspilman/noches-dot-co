import type { NextPage } from "next";
import { EasterEggContextProvider } from "src/EasterEggContext";
import { Homepage } from "../src";

const Home: NextPage = () => {
  return (
    <EasterEggContextProvider>
      <Homepage />
    </EasterEggContextProvider>
  );
};

export default Home;
