import React from "react"
import Img from "gatsby-image"
import { graphql } from "gatsby"

import Logo from "../components/Logo"
import NavigationBack from "../components/NavigationBack"

export default function Template({ data }) {
  const { markdownRemark, allFile } = data
  const { frontmatter } = markdownRemark

  return (
    <main className="grid grid-cols-2">
      <section className="flex flex-col justify-between p-8 h-screen">
        <header>
          <Logo />
          <NavigationBack navigateTo="/architektura" />
        </header>
        <article className="flex max-w-65p text-justify	">
          <div>
            <h2 className="uppercase text-2xl font-bold mb-4">
              {frontmatter.title}
            </h2>
            <p className="mb-4 text-xs">{frontmatter.description}</p>
            <span className="flex">
              <p className="pr-4 text-xs">Autor:</p>
              <p className="text-xs">{frontmatter.author}</p>
            </span>
            <span className="flex">
              <p className="pr-4 text-xs">Lokalizacja:</p>
              <p className="text-xs">{frontmatter.location}</p>
            </span>
            <p className="text-xs">{frontmatter.footer}</p>
          </div>
        </article>
      </section>
      <section className="h-screen overflow-y-scroll">
        {allFile.edges.map(edge => {
          return <Img fluid={edge.node.childImageSharp.fluid} />
        })}
      </section>
    </main>
  )
}
export const pageQuery = graphql`
  query($slug: String!, $imagesSlug: String!) {
    markdownRemark(frontmatter: { slug: { eq: $slug } }) {
      html
      frontmatter {
        slug
        title
        description
        author
        location
        footer
        projectCover {
          childImageSharp {
            fluid(maxWidth: 500) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
    allFile(
      filter: {
        relativeDirectory: { eq: $imagesSlug }
        extension: { regex: "/(jpg)/" }
      }
    ) {
      edges {
        node {
          absolutePath
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`
