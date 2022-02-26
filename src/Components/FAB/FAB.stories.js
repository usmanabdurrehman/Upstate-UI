import React from "react";

import { FAB } from "Components";

export default {
  title: "FAB",
  component: FAB,
  argTypes: {
    color: {
      options: ["primary", "success", "warning", "danger", "default"],
      control: { type: "radio" },
    },
  },
};

const Template = (args) => <FAB {...args} />;

export const Simple = Template.bind({});
Simple.args = {
  color: "default",
  variant: "outlined",
  children: "+",
  disabled: false,
};
