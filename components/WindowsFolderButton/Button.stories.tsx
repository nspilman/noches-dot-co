// src/stories/Windows98FolderButton.stories.tsx
import React from "react";
import { Meta, Story } from "@storybook/react";
import { ChakraProvider } from "@chakra-ui/react";
import { Windows98FolderButton, Windows98FolderButtonProps } from "./Button";

export default {
  title: "Components/Windows98FolderButton",
  component: Windows98FolderButton,
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

const Template: Story<Windows98FolderButtonProps> = (args) => (
  <Windows98FolderButton {...args} />
);

export const Default = Template.bind({});
Default.args = {
  label: "Merch",
};
