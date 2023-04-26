import { Stack, Text, Box } from "@chakra-ui/react";

export const Body = () => {
  return (
    <Stack
      fontSize="2xs"
      alignItems="center"
      px="4"
      fontFamily="roboto"
      lineHeight={1}
    >
      <Text fontWeight="bold" fontSize="sm">
        Welcome to the{" "}
        <Text color="red.600" as="span">
          NOCHEVERSE
        </Text>
      </Text>
      <Text fontSize="2xs">
        If you are reading this, congratulations! You have stepped into the
        other side. You, my friend, are powerful beyond measure, capable of
        achieving greatness beyond all your wildest dreams
      </Text>
      <Text fontWeight="bold" fontSize="2xs" color="red.600" py="2">
        LET GO OF ALL DOUBT AND SURRENDER YOURSELF
      </Text>
      <Text>
        Embrace the transformation that is taking place within you and become
        the person you were always meant to be. Remember, all things must come
        to an end so we can usher in a new beginning. Only when the sun sets,
        can night begin.
      </Text>
      <Text>
        When you are ready, step int the darkness and venture toward the
        unknown.
      </Text>
      <Box width={"full"}>
        <Text textAlign="left">We believe in you.</Text>
      </Box>
      <Text fontSize="xl" pt="4" fontWeight="bold" color="red.500">
        YOU ARE NOT IN DANGER
      </Text>
    </Stack>
  );
};
