import { Props, IconButton } from "components/IconButton";
import { useEasterEgg } from "src/EasterEggContext";

export const NochesButton = (props: Props) => {
  const { easterEggStep } = useEasterEgg();
  return easterEggStep === "doorOpen" ? (
    <IconButton
      label="Noches.exe"
      icon="noches.png"
      onClick={() => console.log("welcome to the nocheverse")}
    />
  ) : (
    <IconButton {...props} />
  );
};
