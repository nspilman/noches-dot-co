import React from "react";
import { Meta, Story } from "@storybook/react/types-6-0";
import { EmailCaptureWindow, Props } from "./EmailCaptureWindow";
import { Center } from "@chakra-ui/react";

export default {
  title: "EmailCaptureWindow",
  component: EmailCaptureWindow,
  argTypes: {
    close: { action: "closed" },
  },
} as Meta;

const Template: Story<Props> = (args) => (
  <Center width="100vw" height="100vh">
    <EmailCaptureWindow {...args} />
  </Center>
);

export const Default = Template.bind({});
Default.args = {};
