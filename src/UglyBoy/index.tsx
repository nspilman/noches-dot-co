import { Image } from "@chakra-ui/react";
import { ScreenWrapper } from "components/ScreenWrapper/ScreenWrapper";
import { useShowPhoneNumber } from "context/ShowPhoneNumberContext";
import { useNavigation } from "utils/useNavigation";

export const UglyBoy = () => {
  const { goHome } = useNavigation();
  const { setShowPhoneNumber, onCloseCallback, setBlurb } =
    useShowPhoneNumber();
  const onClick = () => {
    onCloseCallback.current = () => goHome();
    setBlurb(`Unexpected Error - We didn't get your call. Please call `);

    setShowPhoneNumber(true);
  };
  return (
    <ScreenWrapper>
      <Image
        src="ugly-boy-coming-soon.png"
        height="full"
        width="full"
        alt="Ugly Boy Coming Soon..."
        _hover={{
          cursor: "pointer",
        }}
        onClick={onClick}
      />
    </ScreenWrapper>
  );
};
