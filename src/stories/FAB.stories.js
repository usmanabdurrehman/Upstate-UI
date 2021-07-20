import React from 'react';

import { FAB } from 'Components';

export default {
  title: 'FAB',
  component: FAB,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
};

const Template = (args) => <FAB {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  type:"default",
  variant:"outlined"
};
