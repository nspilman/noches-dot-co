// src/stories/Testimonials.stories.tsx
import React from "react";
import { Story, Meta } from "@storybook/react/types-6-0";
import { Box } from "@chakra-ui/react";
import { Testimonials, Props } from "./Testimonials";

export default {
  title: "Components/Testimonials",
  component: Testimonials,
  decorators: [
    (Story) => (
      <Box maxW="md" mx="auto" mt="10">
        <Story />
      </Box>
    ),
  ],
} as Meta;

const Template: Story<Props> = (args) => <Testimonials {...args} />;

export const Default = Template.bind({});
Default.args = {
  testimonials: [
    {
      name: "John Doe",
      title: "Software Engineer",
      company: "Tech Inc.",
      testimonial:
        "This is an amazing product! It helped me streamline my workflow and increase my productivity.",
      avatarUrl: "https://via.placeholder.com/150",
    },
    {
      name: "Jane Smith",
      title: "Product Manager",
      company: "Innovate Corp.",
      testimonial:
        "I absolutely love this tool. It has revolutionized the way I manage my projects.",
      avatarUrl: "https://via.placeholder.com/150",
    },
  ],
};
