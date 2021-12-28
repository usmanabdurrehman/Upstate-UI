import React, { useState } from "react";

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

const Template = (args) => {
  const [option, setOption] = useState(0);
  return (
    <RadioGroup
      {...args}
      value={option}
      onClick={(option) => setOption(option)}
    />
  );
};

export const Primary = Template.bind({});
Primary.args = {
  color: "default",
  options: ["Small", "Medium"],
};
