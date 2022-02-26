import React, { useState, useEffect } from "react";

import { Accordion } from "Components";

export default {
  title: "Accordion",
  component: Accordion,
  argTypes: {
    onChange: {
      control: false,
    },
  },
};

const Template = (args) => {
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
