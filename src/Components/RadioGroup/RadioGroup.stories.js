import React, { useState, useEffect } from "react";

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

  useEffect(() => {
    setOption(args.value);
  }, [args.value]);

  return (
    <RadioGroup
      {...args}
      value={option}
      onClick={(option) => setOption(option)}
    />
  );
};

export const Simple = Template.bind({});
Simple.args = {
  color: "default",
  options: ["Small", "Medium"],
  value: 0,
};
