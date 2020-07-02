import React from "react"; 
import "@testing-library/jest-dom/extend-expect";
import { mount, shallow } from "enzyme";
import App from "../App";

it("App renders without crashing", () => {
  const wrapper = shallow(<App />);
  expect(wrapper).toBeTruthy();
});

it("addCountdown should add new countdown", () => {
  const wrapper = mount(<App />);
  const instance = wrapper.instance();
  const refs = {
    errMsg: {
      innerHTML: "",
      style: {visibility: "hidden"}
    },
    inputName: {value: "test countdown"},
    inputDate: {value: "2100-01-01"}
  };

  expect(instance.addCountdown(refs)).toEqual(0);
});
