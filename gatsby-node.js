exports.createPages = async ({ actions, graphql, reporter }) => {
  const { createPage } = actions

  const exteriorTemplate = require.resolve(
    `./src/templates/exteriorTemplate.tsx`
  )
  const interiorTemplate = require.resolve(
    `./src/templates/interiorTemplate.tsx`
  )
  const infoTemplate = require.resolve(`./src/templates/infoTemplate.tsx`)

  const projects = await graphql(`
    {
      allDatoCmsProject {
        nodes {
          id
          name
          slug
        }
      }
    }
  `)

  const interiors = await graphql(`
    {
      allDatoCmsInterior {
        nodes {
          id
          name
          slug
        }
      }
    }
  `)

  // Handle errors
  if (projects.errors) {
    reporter.panicOnBuild(`Projects - Error while running GraphQL query.`)
    return
  }
  projects.data.allDatoCmsProject.nodes.forEach(({ name, id, slug }) => {
    const projectSlug =
      `/architektura/` + slug.toLowerCase().split(" ").join("_")
    createPage({
      path: projectSlug,
      component: exteriorTemplate,
      context: {
        // additional data can be passed via context
        projectSlug,
        projectID: id,
      },
    })
  })

  if (interiors.errors) {
    reporter.panicOnBuild(`Interiors - Error while running GraphQL query.`)
    return
  }
  interiors.data.allDatoCmsInterior.nodes.forEach(({ name, id, slug }) => {
    const projectSlug = `/wnetrza/` + slug.toLowerCase().split(" ").join("_")
    createPage({
      path: projectSlug,
      component: interiorTemplate,
      context: {
        // additional data can be passed via context
        projectSlug,
        projectID: id,
      },
    })
  })

  const infoSlug = "/info/"
  createPage({
    path: infoSlug,
    component: infoTemplate,
    context: {
      slug: infoSlug,
    },
  })
}
