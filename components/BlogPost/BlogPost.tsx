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

type BlogPost = {
  id: number;
  title: string;
  summary: string;
  author: string;
  date: string;
  imageUrl: string;
};

export type Props = {
  posts: BlogPost[];
};

export const BlogPostList: React.FC<Props> = ({ posts }) => {
  const bg = useColorModeValue("gray.50", "gray.700");

  return (
    <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={10} my={6}>
      {posts.map((post) => (
        <Box key={post.id} bg={bg} p={6} borderRadius="md" boxShadow="md">
          <VStack spacing={4} alignItems="start">
            <NextLink href={`/blog/${post.id}`} passHref>
              <Link>
                <Image src={post.imageUrl} alt={post.title} borderRadius="md" />
              </Link>
            </NextLink>
            <NextLink href={`/blog/${post.id}`} passHref>
              <Link>
                <Heading as="h3" size="md">
                  {post.title}
                </Heading>
              </Link>
            </NextLink>
            <Text>{post.summary}</Text>
            <Text fontSize="sm" fontWeight="bold">
              {post.author} - {new Date(post.date).toLocaleDateString()}
            </Text>
          </VStack>
        </Box>
      ))}
    </SimpleGrid>
  );
};
