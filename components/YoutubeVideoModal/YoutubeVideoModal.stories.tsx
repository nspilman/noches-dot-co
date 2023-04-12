import React from "react";
import { Meta, Story } from "@storybook/react/types-6-0";
import { VideoModal, Props } from "./YoutubeVideoModal";

export default {
  title: "Components/VideoModal",
  component: VideoModal,
} as Meta;

const Template: Story<Props> = (args) => <VideoModal {...args} />;

export const Default = Template.bind({});
Default.args = {
  src: "https://www.youtube.com/embed/dQw4w9WgXcQ",
};
