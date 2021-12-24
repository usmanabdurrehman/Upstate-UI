import React, { useState } from "react";

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

export const Primary = (args) => <Checkbox {...args} />;
