import { Alert } from "Components";

export default {
  title: "Alert",
  component: Alert,
  argTypes: {
    severity: {
      options: ["error", "info", "success", "warning"],
      control: { type: "radio" },
    },
  },
};

const Template = (args) => <Alert {...args} />;

export const Simple = Template.bind({});

Simple.args = {
  severity: "info",
  text: "You have logged in",
  showAlert: true,
};
