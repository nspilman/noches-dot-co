import React from "react";
import { Meta, Story } from "@storybook/react/types-6-0";
import { Hero, Props } from "./Hero";

export default {
  title: "Components/Hero",
  component: Hero,
} as Meta;

const Template: Story<Props> = (args) => <Hero {...args} />;

export const Default = Template.bind({});
Default.args = {
  title: "Welcome to our website!",
  subtitle: "We provide the best services for you.",
  backgroundImg: "/placeholder.png",
  button: {
    text: "Learn More",
    link: "#",
  },
};
