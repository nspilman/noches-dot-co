import React from "react";
import { Meta, Story } from "@storybook/react/types-6-0";
import { PricingTable, Props } from "./PricingTable";

export default {
  title: "Components/PricingTable",
  component: PricingTable,
} as Meta;

const Template: Story<Props> = (args) => <PricingTable {...args} />;

export const Default = Template.bind({});
Default.args = {
  plans: [
    {
      title: "Basic",
      price: 49,
      features: ["Feature 1", "Feature 2", "Feature 3"],
      buttonText: "Get Started",
      buttonLink: "/signup",
    },
    {
      title: "Pro",
      price: 99,
      features: [
        "Feature 1",
        "Feature 2",
        "Feature 3",
        "Feature 4",
        "Feature 5",
      ],
      buttonText: "Get Started",
      buttonLink: "/signup",
    },
    {
      title: "Enterprise",
      price: 199,
      features: [
        "Feature 1",
        "Feature 2",
        "Feature 3",
        "Feature 4",
        "Feature 5",
        "Feature 6",
      ],
      buttonText: "Get Started",
      buttonLink: "/signup",
    },
  ],
};
