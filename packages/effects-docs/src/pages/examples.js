import { graphql, useStaticQuery, Link } from "gatsby";
import React from "react";
import Layout from "../components/layout";
import Logo from "../components/logo";
import SEO from "../components/seo";
import { Html } from "../components/html";
import {
  toExamples,
  withoutExampleSuffix,
  withoutJsSuffix,
} from "../util/examples";

const Examples = () => {
  const {
    examples: { edges },
  } = useStaticQuery(graphql`
    {
      examples: allFile(
        filter: { relativePath: { regex: "/examples/.*.example$/" } }
      ) {
        edges {
          node {
            relativePath
          }
        }
      }
    }
  `);
  const examples = toExamples(edges);
  return (
    <Layout>
      <SEO title="Examples" />
      <h2 className="node">Examples</h2>
      <p className="node">
        Want to see effects in action? Want to edit and tinker with them in
        real-time? You're in luck. Check out these rad examples:
      </p>
      <div className="node">
        <table>
          <tbody>
            {examples.map(({ basename, name }, i) => (
              <tr key={i}>
                <td>{i + 1}</td>
                <td>
                  <Link
                    to={`/examples/${withoutJsSuffix(
                      withoutExampleSuffix(basename)
                    )}`}
                  >
                    {name}
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="node funsies" children={<Logo />} />
    </Layout>
  );
};

export default Examples;
