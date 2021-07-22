import React from "react";

import { Button } from "Components";

export default {
  title: "Button",
  component: Button,
  argTypes: {
    color: {
      options: ["primary", "success", "warning", "danger", "default"],
      control: { type: "radio" },
    },
  },
};

const Template = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  color: "default",
  variant: "outlined",
  size: "small",
};
