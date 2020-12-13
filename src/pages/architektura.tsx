import React from "react"
import { Link, graphql } from "gatsby"
import Img, { FluidObject } from "gatsby-image"
import Logo from "../components/Logo"
import Navigation from "../components/Navigation"
import NavigationItem from "../components/NavigationItem"
import Layout from "../components/Layout"

type ProjectLinkProps = {
  path: string
  image: FluidObject
}

const ProjectLink = (props: ProjectLinkProps) => {
  const { path, image } = props

  console.log(props)
  return (
    <Link to={path}>
      <Img fluid={image} />
    </Link>
  )
}

const IndexPage = props => {
  const {
    data: {
      allMarkdownRemark: { edges },
    },
  } = props

  console.log(props)

  const Posts = edges
    .filter(edge => !!edge.node.frontmatter.date) // You can filter your posts based on some criteria
    .map(edge => <PostLink key={edge.node.id} post={edge.node} />)

  return <div>{Posts}</div>
}

export default IndexPage

export const pageQuery = graphql`
  query getCovers {
    allMarkdownRemark {
      edges {
        node {
          id
          frontmatter {
            title
            slug
            projectCover {
              childImageSharp {
                fluid(maxHeight: 500, quality: 100) {
                  ...GatsbyImageSharpFluid
                  ...GatsbyImageSharpFluidLimitPresentationSize
                }
              }
            }
          }
        }
      }
    }
  }
`
