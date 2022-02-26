import React from "react";

import { Chip } from "Components";
import FaceIcon from "@material-ui/icons/Face";

export default {
  title: "Chip",
  component: Chip,
  argTypes: {
    color: {
      options: ["primary", "success", "warning", "danger", "default"],
      control: { type: "radio" },
    },
  },
};

const Template = (args) => <Chip {...args} />;

export const Simple = Template.bind({});
Simple.args = {
  color: "default",
  variant: "outlined",
  label: "Alex",
  clickable: true,
  disabled: false,
  clickable: true,
};

export const WithAvatar = Template.bind({});
WithAvatar.args = {
  color: "default",
  variant: "outlined",
  label: "Alex",
  clickable: true,
  disabled: false,
  avatar: <FaceIcon />,
};

export const WithDeleteIcon = Template.bind({});
WithDeleteIcon.args = {
  color: "default",
  variant: "outlined",
  label: "Alex",
  clickable: true,
  disabled: false,
  avatar: <FaceIcon />,
  onDelete: () => {},
};
