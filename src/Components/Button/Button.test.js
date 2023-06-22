// src/App.test.js

import React from "react";
import { mount } from "@cypress/react";
import Button from "./Button";

it("renders learn react link", () => {
  mount(<Button>Yo boi</Button>);
  cy.contains("Yo boi");
});
