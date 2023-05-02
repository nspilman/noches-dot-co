import { Button, Text } from "@chakra-ui/react";

export const ActionButton = ({
  label,
  onClick,
  type = "button",
}: {
  label: string;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
}) => {
  return (
    <Button
      onClick={onClick}
      background="rgb(192, 192, 192)"
      borderTop="2px solid #efefef"
      borderLeft="2px solid #efefef"
      borderRight="2px solid #000"
      borderBottom="2px solid #000"
      height="6"
      borderRadius="0"
      type={type}
    >
      <Text fontSize="xs" fontWeight="hairline">
        {label}
      </Text>
    </Button>
  );
};
