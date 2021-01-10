exports.createPages = async ({ actions, graphql, reporter }) => {
  const { createPage } = actions

  const projectTemplate = require.resolve(`./src/templates/projectTemplate.tsx`)
  const infoTemplate = require.resolve(`./src/templates/infoTemplate.tsx`)

  const projects = await graphql(`
    {
      allMarkdownRemark(
        # exclude /info
        filter: {
          frontmatter: { slug: { regex: "/^((?!info)[\\\\s\\\\S])*$/" } }
        }
        sort: { order: DESC, fields: [frontmatter___date] }
        limit: 1000
      ) {
        edges {
          node {
            frontmatter {
              slug
            }
          }
        }
      }
    }
  `)

  const info = await graphql(`
    {
      markdownRemark(frontmatter: { slug: { regex: "/info/" } }) {
        frontmatter {
          slug
        }
      }
    }
  `)

  // Handle errors
  if (projects.errors) {
    reporter.panicOnBuild(`Error while running GraphQL query.`)
    return
  }
  projects.data.allMarkdownRemark.edges.forEach(({ node }) => {
    const slug = node.frontmatter.slug
    const imagesSlug = node.frontmatter.slug.split("/")[2] + "-images"
    createPage({
      path: node.frontmatter.slug,
      component: projectTemplate,
      context: {
        // additional data can be passed via context
        slug,
        imagesSlug,
      },
    })
  })

  if (info.errors) {
    reporter.panicOnBuild(`Error while running GraphQL query.`)
    return
  }
  const infoSlug = info.data.markdownRemark.frontmatter.slug
  createPage({
    path: infoSlug,
    component: infoTemplate,
    context: {
      slug: infoSlug,
    },
  })
}
