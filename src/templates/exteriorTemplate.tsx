import React from "react"
import { graphql } from "gatsby"

import ProjectPage from "../components/ProjectPage"

export default function Template({ data }) {
  const {
    datoCmsProject: { name, description, photos },
  } = data

  const EXTERIOR_PAGE_PATH = "/architektura"

  return (
    <ProjectPage
      name={name}
      description={description}
      photos={photos}
      path={EXTERIOR_PAGE_PATH}
    />
  )
}

export const pageQuery = graphql`
  query($projectID: String!) {
    datoCmsProject(id: { eq: $projectID }) {
      id
      name
      description
      cover {
        fluid(forceBlurhash: false, imgixParams: { fm: "jpg", q: 100 }) {
          ...GatsbyDatoCmsFluid
        }
      }
      photos {
        originalId
        fluid(forceBlurhash: false, imgixParams: { fm: "jpg", q: 100 }) {
          ...GatsbyDatoCmsFluid
        }
      }
    }
  }
`
