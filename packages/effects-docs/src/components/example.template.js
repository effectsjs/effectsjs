import { graphql, useStaticQuery, Link } from "gatsby"
import React from "react"
import Layout from "./layout"
import Logo from "./logo"
import SEO from "./seo"
import Editor from "./editor"

export default function ExampleTemplate ({ data }) {
  return (
    <Layout>
      <SEO title="Editor - Effects Example" />
      <Editor defaultSource={data.file.fields.exampleSourceCode} />
      <div className='node funsies' children={<Logo />} />
    </Layout>
  )
}

export const pageQuery = graphql`
  query($slug: String!) {
    file(fields: { slug: { eq: $slug } }) {
      fields {
        exampleSourceCode
      }
    }
  }
`
