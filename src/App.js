import { useState } from "react";
import dummyData from "Components/DataTable/DataTable.constants";
import SearchIcon from "@material-ui/icons/Search";

import Form from "./Form";

let schema = {
  name: {
    widget: "Input",
    placeholder: "Name",
    required: true,
    block: "input_block1",
  },
  email: {
    widget: "Input",
    placeholder: "Email",
    block: "input_block1",
    gridColumn:2
  },
  password: {
    widget: "Input",
    placeholder: "Password",
    block: "input_block1",
    gridRow:4,
    gridColumn:2
  },
  phone_no: {
    widget: "Input",
    placeholder: "Phone Number",
    required: true,
    block: "input_block2",
    gridColumn:2,
    gridRow:2
  },
  address: {
    widget: "Input",
    placeholder: "Address",
    block: "input_block2",
    gridColumn:2
  },
  zip_code: {
    widget: "Input",
    placeholder: "Zip Code",
    block: "input_block2",
  },
  checkbox_1: {
    name: "checkbox_1",
    widget: "Checkbox",
    required: true,
    condition: [
      {
        name: "show",
        value: true,
        applyTo: "password",
      },
      {
        name: "propPass",
        value: false,
        applyTo: "input_block2",
        props: {
          required: true,
          meow:false
        },
      },
    ],
    color: "danger",
    gridColumn:2,
    gridRow:3
  },
  checkbox_2: {
    widget: "Checkbox",
    required: true,
    color: "danger",
    condition: [
      {
        name: "show",
        value: true,
        applyTo: "input_block1",
      },
    ],
  },
  checkbox_3: {
    widget: "Checkbox",
    required: true,
    color: "danger",
    disabled:true,
    condition: [
      {
        name: "rule",
        value: true,
        function: "populatePackageDescription",
        params: {
          fieldToCheck: "immunization__immunization",
          fieldToUpdate: "immunization__packageDescription",
          groupToUpdate: "immunization__detailsOption",
        },
      },
    ],
  },
  "submit-btn": {
    widget: "Button",
    required: true,
    color: "danger",
    type: "submit",
    children: "Submit",
  },
};

let formData = {
  checkbox_1: true,
  checkbox_2: true,
  name:"I am new here"
};

let submitOptions = {
  url: "http://localhost:7000/test",
};

function App() {
  return (
    <Form
      schema={schema}
      formData={formData}
      submitOptions={submitOptions}
    />
  );
}

export default App;
