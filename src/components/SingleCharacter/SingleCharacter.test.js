import React from "react";
import { shallow } from "enzyme";
import SingleCharacter from './SingleCharacter'

import { findByTestAttribute } from "../../../Utils/index";

const setUp = (props = {}) => {
  const component = shallow(<SingleCharacter {...props} />);
  return component;
};

describe("SingleCharacter Component", () => {
  let component;
  beforeEach(() => {
    component = setUp();
  });

  it("Should render without errors", () => {
    const wrapper = findByTestAttribute(component, "loading");
    expect(wrapper.length).toBe(1);
  });

  it("Text equal to Loading...", () => {
    const text = component.find("p").text();
    expect(text).toEqual("Loading...");
  });

});
