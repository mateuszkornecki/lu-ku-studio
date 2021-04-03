import React from "react"
import { graphql } from "gatsby"

import ProjectCoverLink from "../components/ProjectCoverLink"
import useWidth from "../hooks/useWidth"
import getProjectSlug from "../utils/getProjectSlug"

const InteriorPage = props => {
  const {
    data: {
      allDatoCmsInterior: { nodes },
    },
  } = props

  const { isMobile } = useWidth()

  const Posts = nodes.map((node, index, posts) => {
    const projectSlug = `/wnetrza/${getProjectSlug(node.slug)}/`
    const isLast = index === posts.length - 1
    return (
      <ProjectCoverLink
        key={node.id}
        path={projectSlug}
        image={node.cover.fluid}
        projectName={node.name.toUpperCase()}
        isLast={isLast}
      />
    )
  })

  return (
    <div
      className={`p-8 grid auto-rows-min grid-cols-1 sm:grid-cols-2 gap-8 ${
        isMobile ? "" : "h-screen overflow-y-scroll"
      }`}
    >
      {Posts}
    </div>
  )
}

export default InteriorPage

export const pageQuery = graphql`
  query {
    allDatoCmsInterior(sort: { order: ASC, fields: [position] }) {
      nodes {
        id
        name
        slug
        cover {
          fluid(
            maxWidth: 400
            forceBlurhash: false
            imgixParams: { fm: "jpg", auto: "compress" }
          ) {
            ...GatsbyDatoCmsFluid
          }
        }
      }
    }
  }
`
