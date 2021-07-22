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

export const Primary = Template.bind({});
Primary.args = {
  color: "default",
  variant: "outlined",
};
