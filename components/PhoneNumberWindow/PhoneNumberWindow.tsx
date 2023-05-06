import { useShowPhoneNumber } from "context/ShowPhoneNumberContext";
import { ActionWindow } from "src/Homepage/ActionWindow";
import { Text } from "@chakra-ui/react";
import { PHONE_NUMBER } from "consts";

export const PhoneNumberWindow = () => {
  const { setShowPhoneNumber, onCloseCallback, blurb, setBlurb } =
    useShowPhoneNumber();
  const close = () => {
    onCloseCallback.current?.();
    onCloseCallback.current = null;
    setBlurb("");
    setShowPhoneNumber(false);
  };

  return (
    <ActionWindow
      onClose={close}
      windowName="Critical Warning"
      zIndex={1}
      onAccept={close}
      text={
        <Text>
          {blurb}
          <a href={`tel:+1${PHONE_NUMBER}`}>{PHONE_NUMBER}</a>
        </Text>
      }
    ></ActionWindow>
  );
};
