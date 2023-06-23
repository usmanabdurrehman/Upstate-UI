import type { StoryFn } from "@storybook/react";

import Tabs from "./Tabs";

export default {
  title: "Tabs",
  component: Tabs,
};

const Template: StoryFn<typeof Tabs> = (args) => {
  return <Tabs {...args} />;
};

export const Base = Template.bind({});
Base.args = {
  titles: ["Tab 1", "Tab 2"],
  selectedIndex: 0,
  children: ["Tab 1 Content", "Tab 2 Content"],
};
