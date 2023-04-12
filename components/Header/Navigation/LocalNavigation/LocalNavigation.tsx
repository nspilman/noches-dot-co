import { Link, Stack, Text } from "@chakra-ui/react";
import { Navigation } from "../../../../types/navigation";

interface Props {
  links: Navigation[];
  isVisible: boolean;
}

export const LocalNavigation = ({ links }: Props) => (
  <Stack direction="row" alignItems="center" justifyContent="center">
    {links.map(({ text, link }, i) => (
      <Link href={link} key={i} px="2">
        <Text fontWeight="bold" fontSize="xs" casing="uppercase">
          {text}
        </Text>
      </Link>
    ))}
  </Stack>
);
