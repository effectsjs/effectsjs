import * as React from "react";
import "./logo.css";

/**
 *
 * https://mavo.io/demos/svgpath/
 * https://css-tricks.com/svg-line-animation-works/
 */
export default function Logo(props) {
  const { className, animated, spin, ...rest } = props || {};
  return (
    <svg
      className={[
        "effectsjs-logo",
        className,
        animated && "animated",
        spin && "spin"
      ]
        .filter(Boolean)
        .join(" ")}
      width="50px"
      xmlns="http://www.w3.org/2000/svg"
      version="1.1"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      viewBox="0 0 50 50"
      {...rest}
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
}
