import React from "react";

import { Progress } from "Components";

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

const Template = (args) => <Progress {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  color: "default",
  progress: 40,
};
