import { ScreenWrapper } from "components/ScreenWrapper/ScreenWrapper";
import { useEasterEgg } from "context";
import { useMemo } from "react";
import { Homepage } from "./Homepage/Homepage";

export const HomePage = () => {
  const { easterEggStep } = useEasterEgg();
  const background = useMemo(() => {
    switch (easterEggStep) {
      case "disabled":
        return "/bg.jpeg";
      case "nochesRestored":
        return "/bg_daymoon.jpeg";
      case "doorOpen":
        return "/bg_nightmoon.png";
      default:
        return "";
    }
  }, [easterEggStep]);
  return (
    <ScreenWrapper screenBg={background}>
      <Homepage />
    </ScreenWrapper>
  );
};
