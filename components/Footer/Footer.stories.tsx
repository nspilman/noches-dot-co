import React from "react";
import { Meta, Story } from "@storybook/react/types-6-0";
import { Footer, FooterProps } from "./Footer";

export default {
  title: "Components/Footer",
  component: Footer,
} as Meta;

const Template: Story<FooterProps> = (args) => <Footer {...args} />;

export const Default = Template.bind({});
Default.args = {
  companyName: "Awesome Company",
  links: [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Services", href: "/services" },
    { label: "Contact", href: "/contact" },
  ],
};
