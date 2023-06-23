import type { StoryFn } from "@storybook/react";

import Navbar from "./Navbar";

export default {
  title: "Navbar",
  component: Navbar,
};

const Template: StoryFn<typeof Navbar> = (args) => {
  return <Navbar {...args} />;
};

export const Base = Template.bind({});

Base.args = {
  logo: <div>Sum logo</div>,
  menuItems: [<div>Item 1</div>, <div>Item 2</div>],
};
