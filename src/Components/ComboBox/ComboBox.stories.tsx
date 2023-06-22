import type { StoryFn } from "@storybook/react";
import React, { useState } from "react";

import ComboBox, { ComboBoxOption } from "./ComboBox";

export default {
  title: "ComboBox",
  component: ComboBox,
};

const options = [
  {
    label: "Car",
    value: {
      description: "lorem impsum dolores",
      img: "https://static.vecteezy.com/system/resources/thumbnails/003/694/243/small/car-icon-in-flat-style-simple-traffic-icon-free-vector.jpg",
    },
  },
  {
    label: "Jeep",
    value: {
      description: "lorem impsum dolores",
      img: "https://static.thenounproject.com/png/7855-200.png",
    },
  },
  {
    label: "Bike",
    value: {
      description: "lorem impsum dolores",
      img: "https://cdn.iconscout.com/icon/premium/png-256-thumb/heavy-bike-1978235-1667773.png",
    },
  },
  {
    label: "SUV",
    value: {
      description: "lorem impsum dolores",
      img: "https://image.shutterstock.com/image-vector/suv-car-icon-creative-symbol-600w-1685976040.jpg",
    },
  },
];

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
      options={options}
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
