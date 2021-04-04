import React from "react"
import { graphql } from "gatsby"

import ProjectPage from "../components/ProjectPage"

export default function Template({ data }) {
  const {
    datoCmsInterior: { name, description, photos },
  } = data

  const INTERIOR_PAGE_PATH = "/wnetrza"

  return (
    <ProjectPage
      name={name}
      description={description}
      photos={photos}
      path={INTERIOR_PAGE_PATH}
    />
  )
}

export const pageQuery = graphql`
  query($projectID: String!) {
    datoCmsInterior(id: { eq: $projectID }) {
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
