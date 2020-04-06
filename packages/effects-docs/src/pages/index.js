import { graphql, useStaticQuery, Link } from "gatsby";
import { Html } from "../components/html";
import exampleText from "raw-loader!./index/example-snippet.ts"; // eslint-disable-line
import Highlight from "react-highlight.js";
import Layout from "../components/layout";
import Logo from "../components/logo";
import React from "react";
import SEO from "../components/seo";

const FAQS = [
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
];

const IndexPage = () => {
  const {
    references: { html: references },
    keywords: { html: keywords },
    elevator_pitch: { html: elevator_pitch }
  } = useStaticQuery(graphql`
    {
      references: markdownRemark(
        frontmatter: { title: { eq: "index_references" } }
      ) {
        html
      }
      elevator_pitch: markdownRemark(
        frontmatter: { title: { eq: "elevator_pitch" } }
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
      <Html className="node" children={elevator_pitch} />
      <h3 className="node">Effects keywords</h3>
      <Html className="node" children={keywords} />
      <div className="node funsies" children={<Logo />} />
      <div className="node">
        <h2 children="Getting started" />
        <p>There are two ways to get started:</p>
        <ul>
          <li
            children={
              <Link to="/examples">
                Try our editor and examples online, now!
              </Link>
            }
          />
          <li
            children={
              <Link to="/installation">
                (pending) Install effects into your javascript or typescript
                project
              </Link>
            }
          />
        </ul>
      </div>
      <div className="node funsies" children={<Logo />} />
      <h3 className="node">References</h3>
      <Html className="node" children={references} />
      <h2 className="node">FAQ</h2>
      {FAQS.map(({ title, a, answer }) => (
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
