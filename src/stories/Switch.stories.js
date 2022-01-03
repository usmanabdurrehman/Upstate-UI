import React, { useState, useEffect } from "react";

import { Switch } from "Components";

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
