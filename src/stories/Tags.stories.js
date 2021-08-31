import React from "react";

import { Tags } from "Components";

export default {
	title: "Tags",
	component: Tags,
};

const Template = (args) => <Tags {...args} />;

export const Primary = Template.bind({});
Primary.args = {
	tags: ["wrestling", "AEW", "Rampage"],
};
