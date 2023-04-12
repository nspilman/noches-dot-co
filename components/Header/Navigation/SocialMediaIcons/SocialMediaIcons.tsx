import { Flex, Icon, Link } from "@chakra-ui/react";
import { AiOutlineInstagram, AiOutlineYoutube } from "react-icons/ai";

export const SocialMediaIcons = () => {
  return (
    <Flex alignItems="center">
      <Link>
        <Icon boxSize="1.5em" as={AiOutlineYoutube} />
      </Link>
      <Link>
        <Icon boxSize="1.5em" as={AiOutlineInstagram} />
      </Link>
    </Flex>
  );
};
