// src/stories/Windows98FolderButton.stories.tsx
import React from "react";
import { Meta, Story } from "@storybook/react";
import { ChakraProvider } from "@chakra-ui/react";
import { IconButton, Props } from "./IconButton";

export default {
  title: "Components/Windows98FolderButton",
  component: IconButton,
  argTypes: {
    label: { control: "text" },
  },
  decorators: [
    (Story) => (
      <ChakraProvider>
        <Story />
      </ChakraProvider>
    ),
  ],
} as Meta;

const Template: Story<Props> = (args) => <IconButton {...args} />;

export const Default = Template.bind({});
Default.args = {
  label: "Merch",
  icon: "/folder.png",
};
