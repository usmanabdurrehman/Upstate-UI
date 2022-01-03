import React from "react";

import { TransferList } from "Components";

export default {
  title: "TransferList",
  component: TransferList,
};

const Template = (args) => <TransferList {...args} />;

export const Simple = Template.bind({});
Simple.args = {
  headers: ["Todo", "Doing", "Completed"],
  transferListData: [
    ["Make Mockup for components", "Implement them in React"],
    [],
    ["Write stories for them"],
  ],
};

export const WithCustomCard = (args) => <TransferList {...args} />;

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
