import type { StoryFn } from "@storybook/react";
import React, { useState, useEffect } from "react";
import { COLOR_STORY_OPTIONS } from "../../constants";

import RadioGroup from "./RadioGroup";

export default {
  title: "RadioGroup",
  component: RadioGroup,
  argTypes: {
    color: {
      options: COLOR_STORY_OPTIONS,
      control: { type: "radio" },
    },
  },
};

const Template: StoryFn<typeof RadioGroup> = (args) => {
  const [option, setOption] = useState(0);

  useEffect(() => {
    setOption(args.value);
  }, [args.value]);

  return (
    <RadioGroup
      {...args}
      value={option}
      onChange={(option) => setOption(option)}
    />
  );
};

export const Simple = Template.bind({});
Simple.args = {
  color: "default",
  options: ["Small", "Medium"],
  value: 0,
};
