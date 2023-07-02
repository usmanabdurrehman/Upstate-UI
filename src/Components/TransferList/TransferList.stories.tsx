import type { StoryFn } from "@storybook/react";

import TransferList from "./TransferList";

export default {
  title: "TransferList",
  component: TransferList,
  tags: ["autodocs"],
};

const Template: StoryFn<typeof TransferList> = (args) => (
  <TransferList {...args} />
);

export const Simple = Template.bind({});
Simple.args = {
  headers: ["Todo", "Doing", "Completed"],
  transferListData: [
    ["Make Mockup for components", "Implement them in React"],
    [],
    ["Write stories for them"],
  ],
};

export const WithCustomCard = Template.bind({});

WithCustomCard.args = {
  headers: ["Todo", "Doing", "Completed"],
  transferListData: [
    ["Make Mockup for components", "Implement them in React"],
    [],
    ["Write stories for them"],
  ],
  customCard: (
    <div
      style={{
        borderRadius: 20,
        background: "red",
        color: "white",
        fontSize: 13,
        padding: 20,
      }}
    ></div>
  ),
};
