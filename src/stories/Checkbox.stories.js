import React from "react";

import { Checkbox } from "Components";

export default {
  title: "Checkbox",
  component: Checkbox,
  argTypes: {
    color: {
      options: ["primary", "success", "warning", "danger", "default"],
      control: { type: "radio" },
    },
    onChange: {
      control: false,
    },
  },
};

const Template = (args) => <Checkbox {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  color: "default",
  disabled: false,
  required:false
};
