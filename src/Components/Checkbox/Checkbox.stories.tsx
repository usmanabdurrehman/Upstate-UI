import React, { useState, useEffect } from "react";

import Checkbox from "./Checkbox";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import FavoriteIcon from "@material-ui/icons/Favorite";
import { COLOR_STORY_OPTIONS } from "../../constants";
import type { StoryFn } from "@storybook/react";

export default {
  title: "Checkbox",
  component: Checkbox,
  argTypes: {
    color: {
      options: COLOR_STORY_OPTIONS,
      control: { type: "radio" },
    },
    onChange: {
      control: false,
    },
  },
};

const Template: StoryFn<typeof Checkbox> = (args) => {
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
