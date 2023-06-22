import Chip from "./Chip";
import FaceIcon from "@material-ui/icons/Face";
import { COLOR_STORY_OPTIONS, VARIANT_STORY_OPTIONS } from "../../constants";
import type { StoryFn } from "@storybook/react";

export default {
  title: "Chip",
  component: Chip,
  argTypes: {
    color: {
      options: COLOR_STORY_OPTIONS,
      control: { type: "radio" },
    },
    variant: {
      options: VARIANT_STORY_OPTIONS,
      control: { type: "radio" },
    },
  },
};

const Template: StoryFn<typeof Chip> = (args) => <Chip {...args} />;

export const Simple = Template.bind({});
Simple.args = {
  color: "default",
  variant: "outlined",
  label: "Alex",
  clickable: true,
  disabled: false,
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
