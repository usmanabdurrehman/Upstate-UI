import { StoryFn } from "@storybook/react";
import React, { useState, useEffect } from "react";
import { COLOR_STORY_OPTIONS } from "../../constants";

import Stepper from "./Stepper";

export default {
  title: "Stepper",
  component: Stepper,
};

const Template: StoryFn<typeof Stepper> = (args) => {
  return <Stepper {...args} />;
};

export const Simple = Template.bind({});

Simple.args = {
  active: 1,
  steps: ["Step 1", "Step 2", "PreFinal", "Finish"],
};
