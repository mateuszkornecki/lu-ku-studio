import React, { useState } from "react"
import { Link, graphql } from "gatsby"
import Img, { FluidObject } from "gatsby-image"
import Logo from "../components/Logo"
import Navigation from "../components/Navigation"
import NavigationItem from "../components/NavigationItem"
import Layout from "../components/Layout"

type ProjectLinkProps = {
  path: string
  image: FluidObject
  projectName: string
}

const ProjectLink = (props: ProjectLinkProps) => {
  const { path, image, projectName } = props
  const [isHover, setIsHover] = useState(false)

  return (
    <Link
      to={path}
      className=" relative"
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
    >
      <Img
        fluid={{ ...image, aspectRatio: 1.75 }}
        className="duration-500 ease-in-out hover:opacity-0"
      />
      <p
        className={`${
          isHover ? "opacity-1" : "opacity-0"
        } absolute duration-500 ease-in-out top-4 left-4 text-xl`}
      >
        {projectName}
      </p>
    </Link>
  )
}

const InteriorPage = props => {
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
        projectName={project.title.toUpperCase()}
      />
    )
  })

  return (
    <div className="flex flex-col justify-between h-screen">
      <header className="pt-8 px-8">
        <Logo />
        <Navigation>
          <NavigationItem redirectTo="/architektura">
            Architektura
          </NavigationItem>
          <NavigationItem redirectTo="/wnetrza">Wnętrza</NavigationItem>
          <NavigationItem redirectTo="/info">Info</NavigationItem>
        </Navigation>
      </header>
      <main className="pt-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {Posts}
        </div>
      </main>
    </div>
  )
}

export default InteriorPage

export const pageQuery = graphql`
  query {
    allMarkdownRemark {
      edges {
        node {
          id
          frontmatter {
            title
            slug
            projectCover {
              childImageSharp {
                fluid(maxHeight: 400, quality: 100) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
    }
  }
`
