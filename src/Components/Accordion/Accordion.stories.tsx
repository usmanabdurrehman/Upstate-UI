import type { StoryFn } from "@storybook/react";
import React, { useState, useEffect } from "react";

import Accordion from "./Accordion";

export default {
  title: "Accordion",
  component: Accordion,
  argTypes: {
    onChange: {
      control: false,
    },
  },
  tags: ["autodocs"],
};

const Template: StoryFn<typeof Accordion> = (args) => {
  const [expanded, setExpanded] = useState(false);

  useEffect(() => {
    setExpanded(args.expanded);
  }, [args.expanded]);

  return (
    <Accordion
      {...args}
      expanded={expanded}
      onClick={(expanded) => {
        setExpanded(!expanded);
      }}
    />
  );
};

export const Simple = Template.bind({});

Simple.args = {
  title: "This is an accordion",
  content: "I am content",
};
