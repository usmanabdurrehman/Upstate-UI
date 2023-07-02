import type { StoryFn } from "@storybook/react";
import React from "react";

import Button from "./Button";

export default {
  title: "Button",
  component: Button,
  argTypes: {
    color: {
      options: ["primary", "success", "warning", "danger", "default"],
      control: { type: "radio" },
    },
  },
  tags: ["autodocs"],
};

const Template: StoryFn<typeof Button> = (args) => <Button {...args} />;

export const Simple = Template.bind({});
Simple.args = {
  color: "default",
  variant: "outlined",
  size: "sm",
  fullWidth: false,
};
