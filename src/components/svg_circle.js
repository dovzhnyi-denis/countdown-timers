import React from "react";
import describeArc from "../svg_arc.js";
// from https://www.florin-pop.com/blog/2019/05/countdown-built-with-react/
const SVGCircle = ({ radius }) => (
  <svg className="countdown-svg">
    <path
      fill="none"
      stroke="#f7c5bf"
      strokeWidth="4"
      d={describeArc(50, 50, 48, 0, radius)}
      />
  </svg>
);

export default SVGCircle;
