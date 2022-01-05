import React, { useState, useEffect } from "react";

import { Switch } from "Components";

import Brightness5Icon from "@material-ui/icons/Brightness5";
import Brightness2Icon from "@material-ui/icons/Brightness2";

export default {
  title: "Switch",
  component: Switch,
  argTypes: {
    color: {
      options: ["primary", "success", "warning", "danger", "default"],
      control: { type: "radio" },
    },
  },
};

const Template = (args) => {
  const [checked, setChecked] = useState(false);

  useEffect(() => {
    setChecked(args.checked);
  }, [args.checked]);

  return (
    <Switch
      {...args}
      checked={checked}
      onClick={(checked) => setChecked(!checked)}
    />
  );
};

export const Simple = Template.bind({});
Simple.args = {
  color: "default",
};

export const WithCustomIcon = Template.bind({});
WithCustomIcon.args = {
  color: "default",
  icon: <Brightness5Icon />,
  checkedIcon: <Brightness2Icon />,
};
