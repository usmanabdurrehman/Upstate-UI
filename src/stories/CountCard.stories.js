import React from "react";

import { CountCard } from "Components";

export default {
	title: "CountCard",
	component: CountCard,
	argTypes: {
		color: {
			options: ["primary", "success", "warning", "danger", "default"],
			control: { type: "radio" },
		},
	},
};

const Template = (args) => <CountCard {...args} />;

export const Primary = Template.bind({});
Primary.args = {
	color: "default",
	width: 250,
	height: 150,
	number: 30,
	text: "Orders Completed",
};
