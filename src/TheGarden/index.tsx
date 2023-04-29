import { Image, Box, keyframes, Text, Heading } from "@chakra-ui/react";
import { ScreenWrapper } from "components/ScreenWrapper/ScreenWrapper";
import { useRouter } from "next/router";

const pulseOpacity = keyframes`
  0%, 100% {
    opacity: 0.5;
  }
  50% {
    opacity: 1;
  }
`;

export const TheGarden = () => {
  const router = useRouter();
  return (
    <ScreenWrapper screenBg={""}>
      <Box position="relative">
        <Image src="/the-garden-page.png" />
        <Box
          position="absolute"
          top="16"
          fontFamily="roboto"
          color="white"
          px="2"
        >
          <Heading fontSize="sm" backgroundColor="red.500" marginRight={28}>
            Look at this beautiful garden
          </Heading>
          <Text fontSize="3xs">
            Imagine stepping into a serene oasis of natural beauty, surrounded
            by vibrant colors, delightful scents, and the soothing sounds of a
            tranquil water feature. This is the world of a luxury garden, where
            every detail has been carefully crafted to transport you to a place
            of peace and relaxation. From the moment you enter, you are greeted
            by a symphony of sights and sounds that will leave you feeling
            refreshed and rejuvenated. You can stroll along winding paths that
            meander through lush greenery, pausing to admire the delicate
            flowers and foliage that line your way. Or, you can find a quiet
            spot to sit and meditate, soaking in the peaceful ambiance and
            enjoying the soft rustle of leaves in the breeze. Whether you are
            seeking a moment of solitude, a romantic setting for a date, or a
            space to entertain guests, the luxury garden is a perfect choice.
            It's a breathtakingly beautiful environment that will captivate your
            senses and transport you to a world of relaxation and tranquility.
            So come and immerse yourself in the luxury garden experience, and
            discover the beauty and serenity that awaits you.
          </Text>
        </Box>
        <Image
          src="deer-glow2.png"
          position="absolute"
          bottom={0}
          sx={{
            animation: `${pulseOpacity} 2s infinite ease-in-out`,
            opacity: 0.5,
            transition: "opacity 0.5s ease-in-out",
            "&:hover": {
              opacity: 1,
              animation: "unset",
              cursor: "pointer",
            },
          }}
          onClick={() => router.push("/the-garden-landing")}
        />
      </Box>
    </ScreenWrapper>
  );
};
