import React from "react";

import { Tooltip } from "Components";

export default {
  title: "Tooltip",
  component: Tooltip,
};

const Template = (args) => <Tooltip {...args} />;

export const Simple = Template.bind({});
Simple.args = {
  children: "Tooltip content",
  title: "Tooltip title",
};
