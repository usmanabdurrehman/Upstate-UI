import React from 'react';

import { Chip } from 'Components';

export default {
  title: 'Chip',
  component: Chip,
};

const Template = (args) => <Chip {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  type:"default",
  variant:"outlined"
};
