import React from "react";
import {
  Box,
  Heading,
  Text,
  VStack,
  SimpleGrid,
  Image,
  useColorModeValue,
  Link,
} from "@chakra-ui/react";
import NextLink from "next/link";

type Project = {
  id: number;
  title: string;
  description: string;
  imageUrl: string;
};

export type Props = {
  projects: Project[];
};

export const PortfolioShowcase: React.FC<Props> = ({ projects }) => {
  const bg = useColorModeValue("gray.50", "gray.700");

  return (
    <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={10} my={6}>
      {projects.map((project) => (
        <Box key={project.id} bg={bg} p={6} borderRadius="md" boxShadow="md">
          <VStack spacing={4} alignItems="start">
            <NextLink href={`/projects/${project.id}`} passHref>
              <Link>
                <Image
                  src={project.imageUrl}
                  alt={project.title}
                  borderRadius="md"
                />
              </Link>
            </NextLink>
            <NextLink href={`/projects/${project.id}`} passHref>
              <Link>
                <Heading as="h3" size="md">
                  {project.title}
                </Heading>
              </Link>
            </NextLink>
            <Text>{project.description}</Text>
          </VStack>
        </Box>
      ))}
    </SimpleGrid>
  );
};
