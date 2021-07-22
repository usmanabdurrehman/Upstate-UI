import React from "react";

import { Tooltip } from "Components";

export default {
	title: "Tooltip",
	component: Tooltip,
};

const Template = (args) => <Tooltip {...args} />;

export const Primary = Template.bind({});
Primary.args = {
	children: "Tooltip content",
	title: "Tooltip title",
};
