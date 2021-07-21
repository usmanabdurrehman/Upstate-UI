import React from 'react';

import { Switch } from 'Components';

export default {
  title: 'Switch',
  component: Switch,
};

const Template = (args) => <Switch {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  type:"default",
};
