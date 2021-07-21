import React from 'react';

import { Button } from 'Components';

export default {
  title: 'Button',
  component: Button,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
};

const Template = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  type:"default",
  variant:"outlined",
  size:'small'
};
