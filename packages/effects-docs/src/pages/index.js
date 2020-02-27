import { graphql, useStaticQuery, Link } from "gatsby";
import { Html } from "../components/html";
import exampleText from "raw-loader!./index/example-snippet.ts"; // eslint-disable-line
import Highlight from "react-highlight.js";
import Layout from "../components/layout";
import Logo from "../components/logo";
import React from "react";
import SEO from "../components/seo";

const IndexPage = () => {
  const {
    references: { html: references },
    keywords: { html: keywords }
  } = useStaticQuery(graphql`
    {
      references: markdownRemark(
        frontmatter: { title: { eq: "index_references" } }
      ) {
        html
      }
      keywords: markdownRemark(
        frontmatter: { title: { eq: "index_keywords" } }
      ) {
        html
      }
    }
  `);
  return (
    <Layout>
      <SEO title="Home" />
      <div className="node" children={<h2 children="What is it?" />} />
      <p className="node">
        Extensions to the javascript language, enabling new control flows that
        may be well suited to a variety of general purpose programming contexts.
      </p>
      <div className="node" children={<h2 children="Example" />} />
      <Highlight
        className="node full-width"
        language="js"
        children={exampleText}
      />
      <p className="node">
        As seen above, the code 'use effects' directive enables the user to
        begin using effects
        <a className="super" href="#whyuseeffects">
          1
        </a>
        . Further, you may observe that a few new keywords have been added:
      </p>
      <h3 className="node">Effects keywords</h3>
      <Html className="node" children={keywords} />
      <div className="node funsies" children={<Logo />} />
      <div className="node">
        <h2 children="Getting started" />
        <p>There are two ways to get started:</p>
        <ul>
          <li
            children={
              <Link to="/examples.html">
                Try our editor and examples online, now!
              </Link>
            }
          />
          <li
            children={
              <Link to="/installation">
                Install effects into your javascript or typescript project
              </Link>
            }
          />
        </ul>
      </div>
      <div className="node funsies" children={<Logo />} />
      <h3 className="node">References</h3>
      <Html className="node" children={references} />
      <h2 className="node">FAQ</h2>
      {[
        {
          title: `Why do I need to use 'use effects'?`,
          a: "whyuseeffects",
          answer: `The 'use effects' directive is not desired for part of the specification. It is a temporary, syntactical necessity to enable the babel compiler to support effectjs at runtime.`
        },
        {
          title: `Can I perform an effect from within an effect?`,
          a: "nestedeffects",
          answer: "Currently, no.  In the future, maybe!"
        }
      ].map(({ title, a, answer }) => (
        <React.Fragment key={a}>
          <h3 className="node">{title}</h3>
          <a name={a} href={a} /> {/* eslint-disable-line */}
          <p className="node" children={answer} />
        </React.Fragment>
      ))}
    </Layout>
  );
};

export default IndexPage;
