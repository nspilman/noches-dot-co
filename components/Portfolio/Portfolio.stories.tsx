import React from "react";
import { Meta, Story } from "@storybook/react/types-6-0";
import { PortfolioShowcase, Props } from "./Portfolio";

export default {
  title: "Components/PortfolioShowcase",
  component: PortfolioShowcase,
} as Meta;

const Template: Story<Props> = (args) => <PortfolioShowcase {...args} />;

export const Default = Template.bind({});
Default.args = {
  projects: [
    {
      id: 1,
      title: "Project 1",
      description: "A brief description of Project 1.",
      imageUrl: "https://via.placeholder.com/300x200",
    },
    {
      id: 2,
      title: "Project 2",
      description: "A brief description of Project 2.",
      imageUrl: "https://via.placeholder.com/300x200",
    },
    {
      id: 3,
      title: "Project 3",
      description: "A brief description of Project 3.",
      imageUrl: "https://via.placeholder.com/300x200",
    },
  ],
};
