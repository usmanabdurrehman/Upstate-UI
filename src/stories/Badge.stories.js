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

export const Primary = Template.bind({});

Primary.args = {
  color: "default",
  children: "Badge",
  number: 9,
};
