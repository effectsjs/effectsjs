import "./layout.css";
import { graphql, Link, useStaticQuery } from "gatsby";
import ForkMe from "./fork-me";
import Logo from "./logo";
import React from "react";
require("prismjs/themes/prism-solarizedlight.css");
require("./layout.prism.css");

const Layout = ({ children }) => {
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
      <header className="hero">
        <Link to="/" id="banner">
          <h1 children="effectsjs" />
          <Logo animated />
        </Link>
        <ul className="nav">
          <li children={<Link to="/">home</Link>} />
          <li children={<Link to="/examples">examples</Link>} />
        </ul>
      </header>
      <div id="content">{children}</div>
      <div className="footer" />
    </React.Fragment>
  );
};
export default Layout;
