import React from "react";
import {
  Box,
  Heading,
  Text,
  VStack,
  List,
  ListItem,
  Button,
  useColorModeValue,
  Flex,
  Link,
} from "@chakra-ui/react";

type PricingPlan = {
  title: string;
  price: number;
  features: string[];
  buttonText: string;
  buttonLink: string;
};

export type Props = {
  plans: PricingPlan[];
};

export const PricingTable: React.FC<Props> = ({ plans }) => {
  const bg = useColorModeValue("gray.50", "gray.700");

  return (
    <Box py={6}>
      <Flex justifyContent="center" alignItems="center" flexDirection="column">
        <Heading as="h2" size="lg" mb={4}>
          Pricing
        </Heading>
        <Flex wrap="wrap" justifyContent="center">
          {plans.map((plan) => (
            <Box
              key={plan.title}
              bg={bg}
              p={6}
              m={3}
              borderRadius="md"
              minWidth="250px"
            >
              <VStack spacing={4} alignItems="stretch">
                <Heading as="h3" size="md">
                  {plan.title}
                </Heading>
                <Text fontSize="2xl" fontWeight="bold">
                  ${plan.price}
                </Text>
                <List spacing={2}>
                  {plan.features.map((feature, index) => (
                    <ListItem key={index}>{feature}</ListItem>
                  ))}
                </List>
                <Link href={plan.buttonLink}>
                  <Button as="a" colorScheme="blue" width="100%">
                    {plan.buttonText}
                  </Button>
                </Link>
              </VStack>
            </Box>
          ))}
        </Flex>
      </Flex>
    </Box>
  );
};
