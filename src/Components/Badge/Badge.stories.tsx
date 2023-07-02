import { StoryFn } from "@storybook/react";
import React from "react";

import Badge from "./Badge";

export default {
  title: "Badge",
  component: Badge,
  argTypes: {
    color: {
      options: ["primary", "success", "warning", "danger", "default"],
      control: { type: "radio" },
    },
    vertical: {
      options: ["top", "bottom"],
      control: { type: "radio" },
    },
    horizontal: {
      options: ["left", "right"],
      control: { type: "radio" },
    },
  },
  tags: ["autodocs"],
};

const Template: StoryFn<typeof Badge> = ({ vertical, horizontal, ...rest }) => {
  return <Badge {...rest} anchorOrigin={{ vertical, horizontal }} />;
};

export const Simple = Template.bind({});

Simple.args = {
  color: "default",
  children: "Badge",
  number: 9,
  vertical: "top",
  horizontal: "right",
};

export const DotNotification = Template.bind({});

DotNotification.args = {
  variant: "dot",
  children: "Badge",
  vertical: "top",
  horizontal: "right",
};
