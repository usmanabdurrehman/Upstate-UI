import React from "react";

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

const Template = (args) => <BottomNavigation {...args} />;

export const Primary = Template.bind({});
Primary.args = {
	children: [<div>Home</div>, <div>About</div>, <div>Contact</div>],
};
