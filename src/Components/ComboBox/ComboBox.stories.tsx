import type { StoryFn } from "@storybook/react";
import React, { useState } from "react";

import ComboBox, { ComboBoxOption } from "./ComboBox";
import { dummyOptions } from "./ComboBox.constants";

export default {
  title: "ComboBox",
  component: ComboBox,
  tags: ["autodocs"],
};

const optionRenderer = (option: ComboBoxOption) => {
  const { label, value } = option;
  return (
    <div
      style={{
        background: "white",
        padding: 10,
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <div>
        {" "}
        <h5>{label}</h5>
        <p style={{ fontSize: 12 }}>{value.description}</p>
      </div>
      <img src={value.img} style={{ width: 40, height: 40 }} />
    </div>
  );
};

const Template: StoryFn<typeof ComboBox> = (args) => {
  const [selectedOptions, setSelectedOptions] = useState<ComboBoxOption[]>([]);
  return (
    <ComboBox
      {...args}
      options={dummyOptions}
      selectedOptions={selectedOptions}
      onChange={(selectedOptions) => {
        setSelectedOptions(selectedOptions);
      }}
      placeholder="Select vehicle type"
    />
  );
};

export const Simple = Template.bind({});

Simple.args = {
  fullWidth: false,
  isClearable: true,
  isDisabled: false,
  isLoading: false,
  showSuggestions: true,
  enableCustomOptions: true,
  placeholder: "Select vehicle type",
  multi: true,
};

export const SingleSelect = Template.bind({});

SingleSelect.args = { multi: false };

export const WithCustomRenderer = Template.bind({});

WithCustomRenderer.args = { optionRenderer };
