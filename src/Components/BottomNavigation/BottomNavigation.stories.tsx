import { StoryFn } from "@storybook/react";
import React, { useState } from "react";
import { COLOR_STORY_OPTIONS } from "../../constants";

import BottomNavigation from "./BottomNavigation";

export default {
  title: "BottomNavigation",
  component: BottomNavigation,
  argTypes: {
    color: {
      options: COLOR_STORY_OPTIONS,
      control: { type: "radio" },
    },
  },
};

const Template: StoryFn<typeof BottomNavigation> = (args) => {
  const [index, setIndex] = useState(0);
  return (
    <BottomNavigation
      {...args}
      index={index}
      onClick={(index) => setIndex(index)}
    />
  );
};

export const Simple = Template.bind({});

Simple.args = {
  tabs: [<div>Home</div>, <div>About</div>, <div>Contact</div>],
  children: [
    <div>lorem ipsum</div>,
    <div>lorem sdlksldksldklsdklsdkldksl</div>,
    <div>Abc sdosdpofdpfodpfodpfodpfodpfopfodpfop</div>,
  ],
};
