import React from "react";

import { Table } from "Components";
import dummyData from "Components/DataTable/DataTable.constants";

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

const Template = (args) => <Table {...args} />;

export const Simple = Template.bind({});

Simple.args = {
  data: dummyData,
  columns: ["color", "description", "quantity"],
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
  options: {
    paginationLimit: 6,
  },
  theme: "navy",
};
