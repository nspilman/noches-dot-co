import { Center } from "@chakra-ui/react";
import { WindoWElement } from "components/WindowElement";

export interface Props {
  windowName: string;
  onClose: () => void;
  zIndex?: number;
  width?: string;
}

export const Window = ({
  windowName,
  onClose,
  children,
  zIndex,
  width,
}: Props & { children: React.ReactElement }) => {
  return (
    <Center
      width="100%"
      height="100%"
      position="absolute"
      zIndex={1000 + (zIndex || 0)}
    >
      <WindoWElement windowName={windowName} onClose={onClose} width={width}>
        {children}
      </WindoWElement>
    </Center>
  );
};
