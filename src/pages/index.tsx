import React from "react"
import { graphql } from "gatsby"
import Img from "gatsby-image"
import Slideshow from "../components/Slideshow"

const LandingPage = props => {
  const {
    data: {
      datoCmsLandingPage: { slideshowPhotos },
    },
  } = props

  return (
    <Slideshow duration={10000}>
      {slideshowPhotos.map(photo => (
        <Img
          fluid={photo.fluid}
          imgStyle={{ objectFit: "cover" }}
          className={"h-screen animate-slide-show"}
        />
      ))}
    </Slideshow>
  )
}

export default LandingPage

export const pageQuery = graphql`
  query {
    datoCmsLandingPage {
      slideshowPhotos {
        fluid(
          maxWidth: 3080
          forceBlurhash: false
          imgixParams: { fm: "jpg", q: 100 }
        ) {
          ...GatsbyDatoCmsFluid
        }
      }
    }
  }
`
