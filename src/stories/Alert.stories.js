import { Alert } from "Components";

export default {
  title: "Alert",
  component: Alert,
  argTypes: {
    color: {
      options: ["primary", "success", "warning", "danger", "default"],
      control: { type: "radio" },
    },
  },
};

const Template = (args) => <Alert {...args} />;

export const Primary = Template.bind({});

Primary.args = {
  color: "default",
  text:'You have logged in',
  showAlert:true
};
