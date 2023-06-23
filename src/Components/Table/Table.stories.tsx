import React from "react";

import Table from "./Table";
import dummyData from "../DataTable/DataTable.constants";
import { StoryFn } from "@storybook/react";

export default {
  title: "Table",
  component: Table,
  argTypes: {
    onChange: {
      control: false,
    },
    theme: {
      options: ["tree", "aquamarine", "navy"],
      control: { type: "radio" },
    },
  },
};

const Template: StoryFn<typeof Table> = (args) => <Table {...args} />;

export const Simple = Template.bind({});

Simple.args = {
  data: dummyData,
  customWidgets: {
    color: (value) => (
      <div
        style={{
          backgroundColor: value,
          width: "30px",
          height: "30px",
          borderRadius: "50%",
        }}
      ></div>
    ),
  },
  theme: "navy",
};
