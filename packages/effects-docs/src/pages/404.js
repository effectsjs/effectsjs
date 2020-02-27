import React from "react";
import Layout from "../components/layout";
import SEO from "../components/seo";

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />
    <h1>404 // Not found :/</h1>
    <p>
      You just hit a route that does not exist. Bummer. Send us a bug report if
      you think something should be here!
    </p>
  </Layout>
);

export default NotFoundPage;
