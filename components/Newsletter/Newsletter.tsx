import React from "react";
import {
  Box,
  Heading,
  VStack,
  FormControl,
  FormLabel,
  Input,
  Button,
} from "@chakra-ui/react";

export const NewsletterSignup: React.FC = () => {
  return (
    <Box my={6}>
      <VStack spacing={4}>
        <Heading as="h2" size="lg">
          Subscribe to our newsletter
        </Heading>
        <form>
          <VStack spacing={4} alignItems="stretch">
            <FormControl id="email" isRequired>
              <FormLabel>Email</FormLabel>
              <Input type="email" placeholder="Your email" />
            </FormControl>
            <Button type="submit" colorScheme="blue" width="100%">
              Subscribe
            </Button>
          </VStack>
        </form>
      </VStack>
    </Box>
  );
};
