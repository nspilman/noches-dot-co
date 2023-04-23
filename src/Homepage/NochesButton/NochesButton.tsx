import { Props, IconButton } from "components/IconButton";
import { useEasterEgg } from "context/EasterEggContext";
import { useRouter } from "next/router";

export const NochesButton = (props: Props) => {
  const { easterEggStep } = useEasterEgg();
  const router = useRouter();
  return easterEggStep === "doorOpen" ? (
    <IconButton
      label="Noches.exe"
      icon="noches.png"
      onClick={() => router.push("/noches-dot-exe")}
    />
  ) : (
    <IconButton {...props} />
  );
};
