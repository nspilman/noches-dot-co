import React from "react";
import { Box, Text, VStack, Link } from "@chakra-ui/react";

export interface FooterProps {
  companyName: string;
  links?: { label: string; href: string }[];
}

export const Footer: React.FC<FooterProps> = ({ companyName, links }) => {
  return (
    <Box as="footer" bg="gray.700" color="white" py={6}>
      <VStack spacing={2} alignItems="center">
        <Text fontWeight="bold">{companyName}</Text>
        {links && (
          <VStack spacing={1}>
            {links.map((link, index) => (
              <Link key={index} href={link.href} color="whiteAlpha.800">
                {link.label}
              </Link>
            ))}
          </VStack>
        )}
      </VStack>
    </Box>
  );
};
