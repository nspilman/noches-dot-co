import { Button, Image, Box, Text } from "@chakra-ui/react";
import { ScreenWrapper } from "components/ScreenWrapper/ScreenWrapper";
import { useRouter } from "next/router";

export const PickAStory = () => {
  const router = useRouter();
  return (
    <ScreenWrapper screenBg={""}>
      <>
        <Image src="/pick-a-story-bg.png" />
        <Box
          position="absolute"
          top="230px"
          fontFamily="roboto"
          lineHeight="1"
          letterSpacing="tight"
        >
          <Text px="4" fontSize="3xs">
            1.The Player acknowledges and agrees that participating in the game
            may involve risks of bodily injury, property damage, and other
            damages or losses. The Player agrees to waive all claims and
            liabilities arising from or in connection with the Player’s
            participation in the game, including but not limited to personal
            injury, death, and property damage. 2. Release of Liability: The
            Player releases the Owner from all claims, demands, actions, and
            causes of action arising from or in connection with the Player’s
            participation in the game. This includes any claims arising from the
            negligence of the Owner or its agents. 3. Assumption of Risks: The
            Player acknowledges and agrees that participating in the game
            involves inherent risks and dangers, including but not limited to
            falling, slipping, collisions with other players, and other risks
            associated with physical activity. The Player assumes all risks
            associated with participation in the game.
          </Text>

          <Text fontSize="2xs" px="2" py="2">
            1.By participating in this game, you acknowledge that it involves
            life-threatening activities that could result in injury, permanent
            disability, or even death. You are fully responsible for your own
            safety and well-being, and you assume all risks associated with the
            game. The creator of this game assumes no liability for any harm
            that may come to you as a result of your participation.
          </Text>
          <Text fontSize="2xs" px="2" py="2">
            2.You must be at least 18 years of age to participate in this game.
            Minors are strictly prohibited from taking part in any
            life-threatening activities, and anyone found to be violating this
            rule will be immediately disqualified and reported to the
            authorities.
          </Text>
          <Text fontSize="2xs" px="2" py="2">
            3.You agree to follow all rules and instructions provided by the
            game creator and/or any authorized personnel. Failure to comply with
            these rules may result in immediate disqualification and/or removal
            from the game premises. The creator reserves the right to modify or
            update the rules at any time, and it is your responsibility to stay
            informed of any changes.
          </Text>
          <Text fontSize="2xs" px="2" py="2">
            4.By participating in this game, you agree to release the creator
            from any and all liability, including but not limited to injury,
            death, property damage, or any other harm that may occur during the
            game. You also agree to indemnify and hold the creator harmless
            against any claims or lawsuits brought against them as a result of
            your participation in the game. This agreement applies to all
            participants, including any family members or legal representatives
            who may try to bring a claim on your behalf.
          </Text>
        </Box>

        <Button
          px="0"
          background="unset"
          _hover={{ background: "unset" }}
          onClick={() => router.push("/the-garden")}
          position="absolute"
          top="935px"
          left="60px"
        >
          <Box
            zIndex={4}
            width="100px"
            height="50px"
            backgroundImage="/the-garden-button-no-glow.png"
            backgroundPosition={"center"}
            backgroundSize="cover"
            _hover={{
              backgroundImage: "/garden-button-glow.png",
            }}
          />
        </Button>

        <Button
          px="0"
          background="unset"
          _hover={{ background: "unset" }}
          onClick={() => router.push("/the-garden")}
          position="absolute"
          top="935px"
          left="160px"
        >
          <Box
            zIndex={4}
            width="100px"
            height="50px"
            backgroundImage="/ugly-boy-button-no-glow.png"
            backgroundPosition={"center"}
            backgroundSize="cover"
            _hover={{
              backgroundImage: "/ugly-boy-button-glow.png",
            }}
          />
        </Button>
      </>
    </ScreenWrapper>
  );
};
