import React from "react";

import { RadioGroup } from "Components";

export default {
  title: "RadioGroup",
  component: RadioGroup,
  argTypes: {
    color: {
      options: ["primary", "success", "warning", "danger", "default"],
      control: { type: "radio" },
    },
  },
};

const Template = (args) => <RadioGroup {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  color: "default",
  options: ["Small", "Medium"],
};
