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

  const Posts = edges.map(edge => {
    const project = edge.node.frontmatter
    const projectCoverFluid = project.projectCover.childImageSharp.fluid
    return (
      <ProjectLink
        key={edge.id}
        path={project.slug}
        image={projectCoverFluid}
      />
    )
  })

  return (
    <Layout>
      <div className="flex flex-col justify-between h-full">
        <header>
          <Logo />
          <Navigation>
            <NavigationItem redirectTo="/architektura">
              Architektura
            </NavigationItem>
            <NavigationItem redirectTo="/wnetrza">Wnętrza</NavigationItem>
            <NavigationItem redirectTo="/info">Info</NavigationItem>
          </Navigation>
        </header>
        <main>
          <div className="grid grid-cols-3 gap-8">{Posts}</div>
        </main>
      </div>
    </Layout>
  )
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
