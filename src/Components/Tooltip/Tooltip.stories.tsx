import type { StoryFn } from "@storybook/react";
import React from "react";

import Tooltip from "./Tooltip";

export default {
  title: "Tooltip",
  component: Tooltip,
};

const Template: StoryFn<typeof Tooltip> = (args) => <Tooltip {...args} />;

export const Simple = Template.bind({});
Simple.args = {
  children: ["Tooltip content"],
  title: "Tooltip title",
};
