import React from "react"

import { graphql } from "gatsby"
import Img from "gatsby-image"
import useWidth from "../hooks/useWidth"

const InfoPage = ({ data }) => {
  const {
    datoCmsInfo: { description, photo, phone, email },
  } = data

  const { isMobile } = useWidth()
  const profileImage = photo.fluid

  return (
    <main>
      <article className="md:p-8 text-justify text-xs pt-8 md:pt-0 md:h-screen md:overflow-y-scroll">
        <Img className={isMobile ? "mx-8" : "mt-8"} fluid={profileImage} />
        <section className="px-8 md:px-0 2xl:max-w-65p">
          <p className="pt-8" style={{ flexGrow: 1, flexBasis: "" }}>
            {description}
          </p>
          <p className="mt-4">Kontakt E: {email} </p>
          <p className={isMobile ? "pb-8" : ""}>T: {phone}</p>
        </section>
      </article>
    </main>
  )
}

export default InfoPage

export const pageQuery = graphql`
  query {
    datoCmsInfo {
      description
      email
      phone
      photo {
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
`
