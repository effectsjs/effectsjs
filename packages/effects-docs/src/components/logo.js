import * as React from "react";

/**
 *
 * https://mavo.io/demos/svgpath/
 * https://css-tricks.com/svg-line-animation-works/
 */
const Logo = () => (
  <svg
    width="50px"
    xmlns="http://www.w3.org/2000/svg"
    version="1.1"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    viewBox="0 0 50 50"
  >
    <path
      d="m 25 25 a 10 10 0 0 0 20 0 a 10 10 0 0 0 -20 0 a 10 10 0 0 1 -20 0 a 10 10 0 0 1 20 0"
      stroke="#529fd9"
      strokeWidth="2"
      fill="none"
      id="wire"
    />
  </svg>
);

export default Logo;
