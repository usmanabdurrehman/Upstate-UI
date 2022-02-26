import React, { useState, useEffect } from "react";

import { Checkbox } from "Components";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import FavoriteIcon from "@material-ui/icons/Favorite";

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

const Template = (args) => {
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

export const Simple = Template.bind({});
Simple.args = {};

export const WithCustomIcon = Template.bind({});
WithCustomIcon.args = {
  checkedIcon: <FavoriteIcon />,
  icon: <FavoriteBorderIcon />,
};
