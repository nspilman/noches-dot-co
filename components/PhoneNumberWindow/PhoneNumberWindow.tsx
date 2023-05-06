import { useShowPhoneNumber } from "context/ShowPhoneNumberContext";
import { ActionWindow } from "src/Homepage/ActionWindow";

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
      text={blurb}
    ></ActionWindow>
  );
};
