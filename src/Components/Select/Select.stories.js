import React, { useState, useEffect } from "react";

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

const Template = (args) => {
  const [selected, setSelected] = useState();

  useEffect(() => {
    setSelected(args.selected);
  }, [args.selected]);

  return (
    <Select
      {...args}
      onChange={(option) => setSelected(option)}
      selected={selected}
    />
  );
};

export const Simple = Template.bind({});

Simple.args = {
  color: "default",
  options: [
    { label: "Small", value: "small" },
    { label: "Medium", value: "medium" },
    { label: "Large", value: "large" },
  ],
  placeholder: "Select Size",
};
