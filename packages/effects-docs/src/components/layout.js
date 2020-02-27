import "./layout.css";
import { graphql, Link, useStaticQuery } from "gatsby";
import ForkMe from "./fork-me";
import Logo from "./logo";
import React from "react";
import * as hljs from "highlight.js";
import "highlight.js/styles/solarized-light.css";

const Layout = ({ children }) => {
  React.useEffect(() => {
    hljs.initHighlightingOnLoad();
  }, []);
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);
  return (
    <React.Fragment>
      <ForkMe />
      <div className="node hero">
        <Link to="/" id="banner">
          <h1 children="effectsjs" />
          <Logo />
        </Link>
        <ul className="nav">
          <li children={<Link to="/">home</Link>} />
          <li children={<Link to="/examples">examples</Link>} />
        </ul>
      </div>
      {children}
      <div className="node footer" />
    </React.Fragment>
  );
};
export default Layout;
