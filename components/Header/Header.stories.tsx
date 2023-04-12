// stories/Header.stories.tsx
import React from "react";
import { Story, Meta } from "@storybook/react/types-6-0";
import { Header, Props } from "./Header";
import { ChakraProvider, CSSReset } from "@chakra-ui/react";
import { theme } from "../../styles/styles";

export default {
  title: "Components/Header",
  component: Header,
  decorators: [
    (Story) => (
      <ChakraProvider theme={theme}>
        <CSSReset />
        <Story />
      </ChakraProvider>
    ),
  ],
} as Meta;

const Template: Story<Props> = (args) => <Header {...args} />;

export const Default = Template.bind({});
Default.args = {
  title: "Example Title",
  navigation: [
    {
      link: "/",
      text: "placeholder link",
    },
    {
      link: "/",
      text: "placeholder link",
    },
    {
      link: "/",
      text: "placeholder link",
    },
  ],
};
