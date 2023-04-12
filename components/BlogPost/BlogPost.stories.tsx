import React from "react";
import { Meta, Story } from "@storybook/react/types-6-0";
import { BlogPostList, Props } from "./BlogPost";

export default {
  title: "Components/BlogPostList",
  component: BlogPostList,
} as Meta;

const Template: Story<Props> = (args) => <BlogPostList {...args} />;

export const Default = Template.bind({});
Default.args = {
  posts: [
    {
      id: 1,
      title: "Blog Post 1",
      summary: "A brief summary of Blog Post 1.",
      author: "John Doe",
      date: "2023-03-01",
      imageUrl: "https://via.placeholder.com/300x200",
    },
    {
      id: 2,
      title: "Blog Post 2",
      summary: "A brief summary of Blog Post 2.",
      author: "Jane Smith",
      date: "2023-03-05",
      imageUrl: "https://via.placeholder.com/300x200",
    },
    {
      id: 3,
      title: "Blog Post 3",
      summary: "A brief summary of Blog Post 3.",
      author: "Michael Johnson",
      date: "2023-03-10",
      imageUrl: "https://via.placeholder.com/300x200",
    },
  ],
};
