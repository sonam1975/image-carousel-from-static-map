import React from "react";
import { shallow } from "enzyme";
// import axios from "axios";
import App from "../client/src/components/App";

describe("Unit tests", () => {
  test("SHould render the app component on the screen", () => {
    const wrapper = shallow(<App />);
    expect(wrapper).toExist();
  });
});
