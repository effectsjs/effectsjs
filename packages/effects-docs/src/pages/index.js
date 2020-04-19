import { graphql, Link } from "gatsby";
import { Html } from "../components/html";
import Layout from "../components/layout";
import Logo from "../components/logo";
import React from "react";
import SEO from "../components/seo";
import Home from "./home.mdx";

const IndexPage = () => {
  return (
    <Layout>
      <SEO title="Home" />
      <Home />
    </Layout>
  );
};

export default IndexPage;
