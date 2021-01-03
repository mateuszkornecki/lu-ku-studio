import React from "react"
import Img from "gatsby-image"
import { graphql } from "gatsby"

import Logo from "../components/Logo"
import NavigationBack from "../components/NavigationBack"

export default function Template({ data }) {
  const { markdownRemark } = data
  const { frontmatter } = markdownRemark

  const post = data.markdownRemark
  const projectCoverFluid = post.frontmatter.projectCover.childImageSharp.fluid

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
      <Img fluid={projectCoverFluid} />
    </main>
  )
}
export const pageQuery = graphql`
  query($slug: String!) {
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
  }
`
