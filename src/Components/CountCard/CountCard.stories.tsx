import type { StoryFn } from "@storybook/react";
import React from "react";
import { COLOR_STORY_OPTIONS } from "../../constants";

import CountCard from "./CountCard";

export default {
  title: "CountCard",
  component: CountCard,
  argTypes: {
    color: {
      options: COLOR_STORY_OPTIONS,
      control: { type: "radio" },
    },
  },
};

const Template: StoryFn<typeof CountCard> = (args) => <CountCard {...args} />;

export const Simple = Template.bind({});

Simple.args = {
  color: "default",
  width: 250,
  height: 150,
  number: 30,
  text: "Orders Completed",
};
