import React from "react";
import { shallow } from "enzyme";
import HomePage from './HomePage'

import { findByTestAttribute } from "../../../Utils/index";

const setUp = (props = {}) => {
  const component = shallow(<HomePage {...props} />);
  return component;
};

describe("HomePage Component", () => {
  let component;
  beforeEach(() => {
    component = setUp();
  });

  it("Should render without errors", () => {
    const wrapper = findByTestAttribute(component, "pagination");
    expect(wrapper.length).toBe(1);
  });

  it("should render HomePage component", () => {
    expect(component.exists()).toBe(true)
  })

});
