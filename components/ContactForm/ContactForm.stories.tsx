import React from "react";
import { Meta, Story } from "@storybook/react/types-6-0";
import { ContactForm, Props } from "./ContactForm";

export default {
  title: "Components/ContactForm",
  component: ContactForm,
} as Meta;

const Template: Story<Props> = (args) => <ContactForm {...args} />;

export const Default = Template.bind({});
Default.args = {
  subtext:
    "Please fill in the form below, and we will get back to you as soon as possible.",
};
