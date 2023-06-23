import type { StoryFn } from "@storybook/react";
import { COLOR_STORY_OPTIONS } from "../../constants";

import FAB from "./FAB";

export default {
  title: "FAB",
  component: FAB,
  argTypes: {
    color: {
      options: COLOR_STORY_OPTIONS,
      control: { type: "radio" },
    },
  },
};

const Template: StoryFn<typeof FAB> = (args) => <FAB {...args} />;

export const Simple = Template.bind({});
Simple.args = {
  color: "default",
  variant: "outlined",
  children: ["+"],
  disabled: false,
};
