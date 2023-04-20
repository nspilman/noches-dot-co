import React from "react";
import { Box, Text, VStack } from "@chakra-ui/react";

const CrtMonitor: React.FC = () => {
  return (
    <Box
      w="640px"
      h="440px"
      bg="#1a1a1a"
      borderRadius="25px"
      display="flex"
      justifyContent="center"
      alignItems="center"
    >
      <VStack
        w="600px"
        h="400px"
        bg="#000"
        borderRadius="20px"
        boxShadow="inset 0 0 20px rgba(0, 0, 0, 0.5), 0 0 50px rgba(0, 255, 0, 0.3)"
        p="20px"
        position="relative"
      >
        <Box
          w="100%"
          h="100%"
          bg="#0a0a0a"
          borderRadius="10px"
          overflow="hidden"
          position="relative"
          p="20px"
        >
          <Text
            color="#0f0"
            fontSize="24px"
            lineHeight="1.5"
            whiteSpace="pre"
            position="relative"
            zIndex="2"
          >
            Hello, World!
          </Text>
          <Box
            position="absolute"
            top="0"
            left="0"
            w="100%"
            h="100%"
            bgImage="repeating-linear-gradient(0deg, rgba(0, 255, 0, 0.03), rgba(0, 255, 0, 0.03) 2px, transparent 2px, transparent 4px)"
            zIndex="1"
          ></Box>
        </Box>
      </VStack>
    </Box>
  );
};

export default CrtMonitor;
