import {
  Text,
  Link,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalOverlay,
  ModalHeader,
  Heading,
} from "@chakra-ui/react";
import { Navigation } from "../../../../types/navigation";
import { SocialMediaIcons } from "../SocialMediaIcons";

interface Props {
  isModalOpen: boolean;
  title: string;
  close: () => void;
  links: Navigation[];
}

export const NavigationModal = ({
  isModalOpen,
  links,
  close,
  title,
}: Props) => (
  <Modal isOpen={isModalOpen} onClose={close}>
    <ModalOverlay />
    <ModalContent
      width="100vw"
      maxWidth="100vw"
      maxHeight="100vh"
      height="100vh"
      marginTop="0"
    >
      <ModalCloseButton />
      <ModalHeader>
        <Heading size="md">
          <Text casing="uppercase">{title}</Text>
        </Heading>
      </ModalHeader>
      <ModalBody
        width="100vw"
        display="flex"
        flexDirection="column"
        height="lg"
        alignItems="center"
      >
        {links.map(({ link, text }, i) => (
          <Link key={i} href={link} onClick={close}>
            <Text
              casing="uppercase"
              fontSize="3xl"
              py="2"
              fontWeight="semibold"
            >
              {text}
            </Text>
          </Link>
        ))}
      </ModalBody>

      <ModalFooter display="flex" alignItems="center" justifyContent="center">
        <SocialMediaIcons />
      </ModalFooter>
    </ModalContent>
  </Modal>
);
