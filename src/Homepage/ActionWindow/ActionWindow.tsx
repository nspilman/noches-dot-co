import { Box, Stack, Text, Image, Center } from "@chakra-ui/react";
import { ActionButton } from "components/ActionButton";
import { Window, Props as WindowProps } from "components/Window";

interface Props extends WindowProps {
  text: string | React.ReactNode;
  onAccept: () => void;
}

export const ActionWindow = ({
  windowName,
  onClose,
  text,
  onAccept,
}: Props) => {
  return (
    <Window windowName={windowName} onClose={onClose}>
      <Stack>
        <Stack direction="row" alignItems="center" p="2">
          <Center height="4rem" width="4rem">
            <Image src="/warning.png" width="100%" />
          </Center>
          <Text
            fontSize="xs"
            fontWeight="medium"
            pl="2"
            fontFamily="roboto"
            lineHeight="1.2"
            letterSpacing={0.1}
          >
            {text}
          </Text>
        </Stack>
        <Stack direction="row" justifyContent="flex-end" p="1">
          <ActionButton label="OK" onClick={onAccept} />
          <ActionButton label="Cancel" onClick={onClose} />
        </Stack>
      </Stack>
    </Window>
  );
};
