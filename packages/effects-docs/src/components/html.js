import * as React from "react";

export const Html = ({ children, ...rest }) => (
  <div dangerouslySetInnerHTML={{ __html: children }} {...rest} />
);
