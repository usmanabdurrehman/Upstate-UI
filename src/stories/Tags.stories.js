import React from "react";

import { Tags } from "Components";

export default {
  title: "Tags",
  component: Tags,
};

const Template = (args) => <Tags {...args} />;

export const Simple = Template.bind({});
Simple.args = {
  tags: ["wrestling", "AEW", "Rampage"],
};
