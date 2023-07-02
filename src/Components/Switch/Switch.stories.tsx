import type { StoryFn } from "@storybook/react";
import React, { useState, useEffect } from "react";
import { COLOR_STORY_OPTIONS } from "../../constants";

import { BrightnessHigh, BrightnessLow } from "@material-ui/icons";

import Switch from "./Switch";

export default {
  title: "Switch",
  component: Switch,
  argTypes: {
    color: {
      options: COLOR_STORY_OPTIONS,
      control: { type: "radio" },
    },
  },
  tags: ["autodocs"],
};

const Template: StoryFn<typeof Switch> = (args) => {
  const [checked, setChecked] = useState(false);

  useEffect(() => {
    setChecked(args.checked);
  }, [args.checked]);

  return (
    <Switch
      {...args}
      checked={checked}
      onClick={(checked) => setChecked(!checked)}
    />
  );
};

export const Simple = Template.bind({});
Simple.args = {
  color: "default",
};

export const WithCustomIcon = Template.bind({});
WithCustomIcon.args = {
  color: "default",
  icon: <BrightnessLow />,
  checkedIcon: <BrightnessHigh />,
};
