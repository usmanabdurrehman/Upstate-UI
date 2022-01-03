import React, { useState, useEffect } from "react";

import { Checkbox } from "Components";

export default {
  title: "Checkbox",
  component: Checkbox,
  argTypes: {
    color: {
      options: ["primary", "success", "warning", "danger", "default"],
      control: { type: "radio" },
    },
    onChange: {
      control: false,
    },
  },
};

export const Simple = (args) => {
  const [checked, setChecked] = useState(false);

  useEffect(() => {
    setChecked(args.checked);
  }, [args.checked]);

  return (
    <Checkbox
      {...args}
      checked={checked}
      onClick={(checked) => setChecked(!checked)}
    />
  );
};
