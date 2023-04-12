import React from "react";
import {
  Box,
  Heading,
  Text,
  Button,
  Flex,
  VStack,
  Link,
} from "@chakra-ui/react";

export type Props = {
  title: string;
  subtitle: string;
  button?: {
    text: string;
    link: string;
  };
  backgroundImg: string;
};

export const Hero = ({ title, subtitle, button, backgroundImg }: Props) => {
  return (
    <Box
      bgImage={`url(${backgroundImg})`}
      bgSize="cover"
      bgPosition="center"
      minHeight="60vh"
      py={10}
      px={4}
    >
      <Flex
        justifyContent="center"
        alignItems="center"
        flexDirection="column"
        minHeight="100%"
      >
        <VStack spacing={4}>
          <Heading as="h1" size="2xl" color="white">
            {title}
          </Heading>
          <Text fontSize="xl" color="white">
            {subtitle}
          </Text>
          {button && (
            <Link href={button.link}>
              <Button as="a" colorScheme="blue" size="lg">
                {button.text}
              </Button>
            </Link>
          )}
        </VStack>
      </Flex>
    </Box>
  );
};
