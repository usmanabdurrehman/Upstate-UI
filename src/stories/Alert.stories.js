import { Alert } from "Components";

export default {
  title: "Alert",
  component: Alert,
  argTypes: {
    color: {
      options: ["primary", "success", "warning", "danger"],
      control: { type: "radio" },
    },
  },
};

const Template = (args) => <Alert {...args} />;

export const Simple = Template.bind({});

Simple.args = {
  color: "primary",
  text: "You have logged in",
  showAlert: true,
};
