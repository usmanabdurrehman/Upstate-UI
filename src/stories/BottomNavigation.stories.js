import React, { useState } from "react";

import { BottomNavigation } from "Components";

export default {
  title: "BottomNavigation",
  component: BottomNavigation,
  argTypes: {
    color: {
      options: ["primary", "success", "warning", "danger", "default"],
      control: { type: "radio" },
    },
  },
};

const Template = (args) => {
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
