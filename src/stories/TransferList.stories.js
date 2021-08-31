import React from "react";

import { TransferList } from "Components";

export default {
	title: "TransferList",
	component: TransferList,
};

const Template = (args) => <TransferList {...args} />;

export const Primary = Template.bind({});
Primary.args = {
	headers: ["Positive", "Negative", "Neutral"],
	transferListData: [["lmao", "yo"], [], ["xd"]],
};
