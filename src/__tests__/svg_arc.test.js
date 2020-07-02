import "@testing-library/jest-dom/extend-expect";
import describeArc, {mapNumber} from "../svg_arc";

it("mapNumber maps months/days/hours/minutes/seconds to degrees correctly", () => {
  const radius = mapNumber(1, 60, 0, 0, 360);
  expect(radius).toBe(354);
});

it("desribeArc returns correct path for svg", () => {
  const radius = 354;
  const path = describeArc(50, 50, 48, 0, radius);
  expect(path).toEqual("M 44.98263376315264 2.2629490223228785 A 48 48 0 1 0 50 2");
});
