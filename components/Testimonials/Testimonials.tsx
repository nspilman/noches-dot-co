import React from "react";
import {
  Box,
  Flex,
  Text,
  Avatar,
  VStack,
  HStack,
  useColorModeValue,
} from "@chakra-ui/react";

interface Testimonial {
  name: string;
  title: string;
  company: string;
  testimonial: string;
  avatarUrl: string;
}

export interface Props {
  testimonials: Testimonial[];
}

export const Testimonials: React.FC<Props> = ({ testimonials }) => {
  const borderColor = useColorModeValue("gray.200", "gray.600");

  return (
    <Box py={16}>
      <VStack spacing={8} align="center">
        {testimonials.map((testimonial, index) => (
          <Flex
            key={index}
            borderWidth={1}
            borderRadius="lg"
            borderColor={borderColor}
            p={6}
            boxShadow="md"
            width="80%"
            maxW="lg"
          >
            <VStack align="start" spacing={4}>
              <Text>{testimonial.testimonial}</Text>
              <HStack>
                <Avatar size="sm" src={testimonial.avatarUrl} />
                <VStack align="start" spacing={0}>
                  <Text fontWeight="bold">{testimonial.name}</Text>
                  <Text>
                    {testimonial.title}, {testimonial.company}
                  </Text>
                </VStack>
              </HStack>
            </VStack>
          </Flex>
        ))}
      </VStack>
    </Box>
  );
};
