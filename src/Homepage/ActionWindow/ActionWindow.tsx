import { Box, Stack, Text } from "@chakra-ui/react";
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
          <Box>
            <img src="/warning.png" />
          </Box>
          <Text fontSize="sm" fontWeight="hairline" pl="2">
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
