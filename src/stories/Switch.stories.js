import React from "react";

import { Switch } from "Components";

export default {
  title: "Switch",
  component: Switch,
  argTypes: {
    color: {
      options: ["primary", "success", "warning", "danger", "default"],
      control: { type: "radio" },
    },
  },
};

const Template = (args) => <Switch {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  color: "default",
};
