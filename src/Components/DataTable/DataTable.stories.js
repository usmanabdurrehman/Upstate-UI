import React from "react";

import { DataTable } from "Components";
import dummyData from "Components/DataTable/DataTable.constants";

export default {
  title: "DataTable",
  component: DataTable,
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

const Template = (args) => <DataTable {...args} />;

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
    sort: true,
    sortWholeData: false,
    columnSelect: true,
    csvDownload: true,
    printCsv: true,
    paginationLimit: 6,
  },
  theme: "navy",
};
