import React from 'react';

import { Select } from 'Components';

export default {
  title: 'Select',
  component: Select,
};

const Template = (args) => <Select {...args} />;

export const Primary = Template.bind({});

Primary.args = {
  type:"default",
  options:['Small','Medium','Large']
};
