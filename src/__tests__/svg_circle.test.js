import React from "react";
import "@testing-library/jest-dom/extend-expect";
import {shallow} from "enzyme";
import SVGCircle from "../components/svg_circle";

it("svg_circle renders without crashing", () => {
  const svg = shallow(<SVGCircle />);
  expect(svg).toBeTruthy();
});
