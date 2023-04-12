import {
  FormControl,
  FormLabel,
  Input,
  Flex,
  Textarea,
  Stack,
  Heading,
  Text,
  Button,
} from "@chakra-ui/react";

export interface Props {
  subtext?: string;
}

export const ContactForm = ({ subtext }: Props) => {
  const responsiveSectionWidths = { base: "100vw", md: "50vw" };

  return (
    <Stack
      id="contact-form"
      bg="background.primary"
      color="text.primary"
      direction={{
        base: "column",
        md: "row",
      }}
      width="100vw"
      justifyContent="center"
      height="100%"
      py="8"
    >
      <Flex
        direction="column"
        px="8"
        alignItems="center"
        width={responsiveSectionWidths}
      >
        <Heading>
          <Text casing="uppercase">Get a quote</Text>
        </Heading>
        <Text textAlign="center" fontWeight="light" py="2">
          {subtext}
        </Text>
      </Flex>
      <form>
        <Flex
          direction="column"
          width={responsiveSectionWidths}
          px="8"
          alignItems="center"
        >
          <FormControl isRequired>
            <FormLabel>Name</FormLabel>
            <Input bg="white" color="black" type="text" />
          </FormControl>
          <FormControl isRequired>
            <FormLabel>Email address</FormLabel>
            <Input bg="white" color="black" type="email" />
          </FormControl>
          <FormControl isRequired>
            <FormLabel>Work Request</FormLabel>
            <Textarea bg="white" color="black" />
          </FormControl>
          <Button
            bg="background.primary"
            borderColor="orange.300"
            border="1px solid"
            width="64"
            my="2"
          >
            <Text>Submit</Text>{" "}
          </Button>
        </Flex>
      </form>
    </Stack>
  );
};
