import type { StoryFn } from "@storybook/react";
import Modal from "./Modal";

export default {
  title: "Modal",
  component: Modal,
  tags: ["autodocs"],
};

const Template: StoryFn<typeof Modal> = (args) => <Modal {...args} />;

export const Simple = Template.bind({});
Simple.args = {
  isOpen: true,
  children: "Modal Content",
};
