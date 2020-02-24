/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */
const { createFilePath } = require(`gatsby-source-filesystem`)
const { toExamples, withoutExampleSuffix } = require('./src/util/examples.js')
const fs = require('fs')
const path = require('path')
const examplesGql = `
{
  examples: allFile(filter: {
    relativePath: {
      regex: "/examples\/.*.example$/"
    }
  }) {
    edges {
      node {
        fields {
          slug
          exampleSourceCode
        }
        absolutePath
        relativePath
      }
    }
  }
}`

function withTry (fn) {
  return (...args) => {
    try {
      const res = fn(...args)
      return res
    } catch (err) {
      debugger
      throw err
    }
  }
}
function withAsyncTry (fn) {
  return async (...args) => {
    try {
      const res = await fn(...args)
      return res
    } catch (err) {
      debugger
      throw err
    }
  }
}

exports.onCreateNode = withTry(({ node, getNode, actions }) => {
  const { createNodeField } = actions
  if (node.internal.type === 'File') {
    let slug = createFilePath({ node, getNode, basePath: `examples` })
    if (slug.match(/\.js\//)) {
      // @info friggin gatsby.
      slug = slug.replace(/\.js\//, '')
    }
    createNodeField({
      node,
      name: `slug`,
      value: slug,
    })
    createNodeField({
      node,
      name: `exampleSourceCode`,
      value: node.relativePath.endsWith('.example') ? fs.readFileSync(node.absolutePath, 'utf8') : '',
    })
  }
})

exports.createPages = withAsyncTry(async ({ graphql, actions }) => {
  const { createPage } = actions
  const result = await graphql(examplesGql)
  const examples = toExamples(result.data.examples.edges)
  result.data.examples.edges.map(({ node }, i) => {
    const pagePath = withoutExampleSuffix(node.fields.slug).replace('pages/', '')
    createPage({
      path: pagePath,
      component: path.resolve(__dirname, `src/components/example.template.js`),
      context: {
        slug: node.fields.slug,
      },
    })
  })
})
