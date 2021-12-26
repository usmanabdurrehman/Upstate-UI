import React from "react";

import { TransferList } from "Components";

export default {
  title: "TransferList",
  component: TransferList,
};

const Template = (args) => <TransferList {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  headers: ["Todo", "Doing", "Completed"],
  transferListData: [
    ["Make Mockup for components", "Implement them in React"],
    [],
    ["Write stories for them"],
  ],
};
