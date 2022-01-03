import React from "react";

import { Chip } from "Components";

export default {
  title: "Chip",
  component: Chip,
  argTypes: {
    color: {
      options: ["primary", "success", "warning", "danger", "default"],
      control: { type: "radio" },
    },
  },
};

const Template = (args) => <Chip {...args} />;

export const Simple = Template.bind({});
Simple.args = {
  color: "default",
  variant: "outlined",
  clickable: true,
  disabled: false,
};
