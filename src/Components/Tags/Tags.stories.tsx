import Tags from "./Tags";
import { StoryFn } from "@storybook/react";

export default {
  title: "Tags",
  component: Tags,
  tags: ["autodocs"],
};

const Template: StoryFn<typeof Tags> = (args) => <Tags {...args} />;

export const Simple = Template.bind({});
Simple.args = {
  tags: ["wrestling", "AEW", "Rampage"],
};
