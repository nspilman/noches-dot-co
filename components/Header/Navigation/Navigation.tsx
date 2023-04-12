import { Box } from "@chakra-ui/react";
import { LocalNavigation } from "./LocalNavigation";
import { SocialMediaIcons } from "./SocialMediaIcons";
import { HamburgerIcon } from "@chakra-ui/icons";
import { useState } from "react";
import { NavigationModal } from "./NavigationModal/NavigationModal";
import { Navigation as NavType } from "../../../types/navigation";

interface Props {
  title: string;
  navigation: NavType[];
}

export const Navigation = ({ title, navigation }: Props) => {
  const visibleAtMedWidth = {
    base: "none",
    md: "block",
  } as const;

  const invisibleAtMed = {
    base: "block",
    md: "none",
  } as const;

  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <NavigationModal
        isModalOpen={isModalOpen}
        links={navigation}
        close={() => setIsModalOpen(false)}
        title={title}
      />
      <Box display={visibleAtMedWidth} position="absolute" width="100%">
        <LocalNavigation isVisible links={navigation} />
      </Box>
      <Box display={visibleAtMedWidth}>
        <SocialMediaIcons />
      </Box>
      <Box cursor="pointer" display={invisibleAtMed}>
        <HamburgerIcon onClick={() => setIsModalOpen(!isModalOpen)} />
      </Box>
    </>
  );
};
