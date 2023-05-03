import { useEasterEgg } from "context";
import { useRouter } from "next/router";

export const useNavigation = () => {
  const router = useRouter();
  const { setEasterEggStep } = useEasterEgg();
  const goHome = () => {
    setEasterEggStep("nochesRestored");
    router.push("/");
  };
  return { goHome };
};
