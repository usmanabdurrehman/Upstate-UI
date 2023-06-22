import type { StoryFn } from "@storybook/react";
import React from "react";

import Progress from "./Progress";

export default {
  title: "Progress",
  component: Progress,
  argTypes: {
    color: {
      options: ["primary", "success", "warning", "danger", "default"],
      control: { type: "radio" },
    },
  },
};

const Template: StoryFn<typeof Progress> = (args) => <Progress {...args} />;

export const Simple = Template.bind({});
Simple.args = {
  color: "default",
  progress: 40,
};
