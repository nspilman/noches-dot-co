import React from "react";
import { Meta, Story } from "@storybook/react/types-6-0";
import CrtMonitor from "./CrtMonitor";

export default {
  title: "Components/CrtMonitor",
  component: CrtMonitor,
} as Meta;

const Template: Story = (args) => <CrtMonitor {...args} />;

export const Default = Template.bind({});
Default.args = {};
