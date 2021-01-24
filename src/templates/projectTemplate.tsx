import React from "react"

import Img from "gatsby-image"
import { graphql } from "gatsby"

import Logo from "../components/Logo"
import NavigationBack from "../components/NavigationBack"

import useWidth from "../hooks/useWidth"

export default function Template({ data }) {
  const { markdownRemark, allFile } = data
  const { frontmatter } = markdownRemark
  const { isMobile } = useWidth()

  const projectDescription = (
    <React.Fragment>
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
    </React.Fragment>
  )

  const projectGallerySection = (
    <section className={isMobile ? "" : `h-screen overflow-y-scroll`}>
      {allFile.edges.map(edge => {
        return (
          <div className="pb-8">
            <Img fluid={edge.node.childImageSharp.fluid} />
          </div>
        )
      })}
    </section>
  )

  const desktopLayout = (
    <main className="grid md:grid-cols-2">
      <section className="flex flex-col justify-between p-8 h-screen relative">
        <header>
          <Logo />
          <NavigationBack navigateTo="/architektura" />
        </header>
        <article className="flex text-justify	max-w-65p absolute -bottom-2/4 left-8 animate-slide-content">
          <div>
            <h2 className="uppercase text-2xl mb-4">{frontmatter.title}</h2>
            {projectDescription}
          </div>
        </article>
      </section>
      {projectGallerySection}
    </main>
  )

  const mobileLayout = (
    <main>
      <section className="p-8">
        <header className="pb-8">
          <Logo />
          <NavigationBack navigateTo="/architektura" />
        </header>
        <h2 className="uppercase text-2xl font-bold">{frontmatter.title}</h2>
      </section>
      <section>
        <article className="">
          {projectGallerySection}
          <div className="p-8 pt-0">{projectDescription}</div>
        </article>
      </section>
    </main>
  )

  return isMobile ? mobileLayout : desktopLayout
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
