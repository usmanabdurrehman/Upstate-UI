import React from "react";

import { Badge } from "Components";

export default {
  title: "Badge",
  component: Badge,
  argTypes: {
    color: {
      options: ["primary", "success", "warning", "danger", "default"],
      control: { type: "radio" },
    },
  },
};

const Template = (args) => <Badge {...args} />;

export const Simple = Template.bind({});

Simple.args = {
  color: "default",
  children: "Badge",
  number: 9,
};
