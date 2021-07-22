import React from "react";

import { Accordion } from "Components";

export default {
	title: "Accordion",
	component: Accordion,
	argTypes: {
		onChange: {
			control:false
		},
	},
};

const Template = (args) => <Accordion {...args} />;

export const Primary = Template.bind({});

Primary.args = {
	title: "Accordion",
	content:
		"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean finibus risus mi, a semper nisi eleifend in. Donec vestibulum dui eget mi rutrum, eu egestas eros accumsan. Sed sem augue, aliquam et ipsum eu, ultrices egestas ex. Etiam dignissim sollicitudin nibh, a lacinia dolor ornare cursus. Aenean luctus vitae dolor vel aliquam. Nullam vel purus ac diam facilisis pretium eu tincidunt lorem. Nullam aliquet nibh eget ante malesuada, vitae ultrices ante ornare. Curabitur molestie suscipit sem sit amet placerat. Curabitur nunc nunc, bibendum eget urna a, commodo interdum purus. Quisque interdum finibus posuere. Mauris sem tellus, ullamcorper non eros nec, tristique pretium dui. ",
		disabled:false,
		// expanded:false
};
