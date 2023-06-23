import { StoryFn } from "@storybook/react";
import React, { useState, useEffect } from "react";
import { COLOR_STORY_OPTIONS } from "../../constants";

import Select, { SelectOption } from "./Select";

export default {
  title: "Select",
  component: Select,
  argTypes: {
    color: {
      options: COLOR_STORY_OPTIONS,
      control: { type: "radio" },
    },
  },
};

const Template: StoryFn<typeof Select> = (args) => {
  const [selected, setSelected] = useState<SelectOption>();

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
    { label: "Small", id: "small" },
    { label: "Medium", id: "medium" },
    { label: "Large", id: "large" },
  ],
  placeholder: "Select Size",
};
