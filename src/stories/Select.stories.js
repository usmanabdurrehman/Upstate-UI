import React from "react";

import { Select } from "Components";

export default {
  title: "Select",
  component: Select,
  argTypes: {
    color: {
      options: ["primary", "success", "warning", "danger", "default"],
      control: { type: "radio" },
    },
  },
};

const Template = (args) => <Select {...args} />;

export const Primary = Template.bind({});

Primary.args = {
  color: "default",
  options: ["Small", "Medium", "Large"],
};
