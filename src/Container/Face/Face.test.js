import React from "react";
import Face from "./Face";
import { shallow } from "enzyme";
import { findByTestAtrr } from "./../../../Utils/index";

const setUp = (props = {}) => {
  const component = shallow(<Face {...props} />);
  return component;
};

describe("Face tests", () => {
  let component;
  beforeEach(() => {
    component = setUp();
  });

  it("Should render face section without errors", () => {
    const wrapper = findByTestAtrr(component, "faceSection");
    expect(wrapper.length).toBe(1);
  });
  it("Should render face image without errors", () => {
    const wrapper = findByTestAtrr(component, "faceImage");
    expect(wrapper.length).toBe(1);
  });
  it("Should render left eye image without errors", () => {
    const wrapper = findByTestAtrr(component, "leftEyeImage");
    expect(wrapper.length).toBe(1);
  });
  it("Should render right eye without errors", () => {
    const wrapper = findByTestAtrr(component, "rightEyeImage");
    expect(wrapper.length).toBe(1);
  });
});
