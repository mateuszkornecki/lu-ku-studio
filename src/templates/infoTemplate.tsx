import React from "react"

import { graphql } from "gatsby"
import Img from "gatsby-image"

const InfoPage = ({ data: { allFile, markdownRemark } }) => {
  const {
    frontmatter: { description, telephone, email },
  } = markdownRemark

  const profileImage = allFile.edges[0].node.childImageSharp.fluid

  return (
    <main>
      <article className="text-justify text-xs pt-8 md:pt-0 md:h-screen md:overflow-y-scroll">
        <Img fluid={profileImage} />
        <section className="md:max-w-65p px-8 md:px-0">
          <p className="pt-8 ">{description}</p>
          <p className="mt-4">Kontakt E: {email} </p>
          <p className="">T: {telephone}</p>
        </section>
      </article>
    </main>
  )
}

export default InfoPage

export const pageQuery = graphql`
  query($slug: String!) {
    markdownRemark(frontmatter: { slug: { eq: $slug } }) {
      html
      frontmatter {
        slug
        description
        telephone
        email
      }
    }
    allFile(
      filter: { extension: { regex: "/(jpg)/" }, name: { eq: "profile" } }
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
