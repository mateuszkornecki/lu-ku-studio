import React, { useEffect, useRef, useState } from "react"

import styled, { keyframes } from "styled-components"

import Img from "gatsby-image"
import { graphql } from "gatsby"

import Logo from "../components/Logo"
import NavigationBack from "../components/NavigationBack"

import useWidth from "../hooks/useWidth"
import getParagraphsFromDescription from "../utils/getParagraphsFromDescription"

const createTitleKeyframes = desc => keyframes`
  100% {
    bottom: ${desc}px;
  }
`

const Title = styled.div`
  position: absolute;
  animation: ${props => createTitleKeyframes(props.desc)} 1s forwards 250ms;
  bottom: 2rem;
  left: 2rem;
`

export default function Template({ data }) {
  const {
    datoCmsInterior: { name, description, photos },
  } = data

  const { isMobile } = useWidth()
  const descriptionRef = useRef(null)
  const [desc, setDesc] = useState(0)

  useEffect(() => {
    if (descriptionRef?.current?.clientHeight)
      setDesc(descriptionRef.current.clientHeight)
  }, [descriptionRef])

  const testTitle = desc ? (
    <Title desc={desc + 64}>
      <h2 className="uppercase text-2xl max-w-65p">{name}</h2>
    </Title>
  ) : (
    <h2 className="uppercase text-2xl max-w-65p">{name}</h2>
  )

  const projectDescription = getParagraphsFromDescription(description)

  const projectGallerySection = (
    <section className={isMobile ? "" : `h-screen overflow-y-scroll px-8 pt-8`}>
      {photos.map(photo => {
        return (
          <div
            key={photo.originalId}
            className={isMobile ? "px-8 pb-8" : "pb-8"}
          >
            <Img fluid={photo.fluid} />
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
        <article className="flex max-w-65p">
          <div>
            {testTitle}
            <div
              className="absolute max-w-65p bottom-8 left-8 invisible animate-show-content"
              ref={descriptionRef}
            >
              <p className="text-xs text-justify">{projectDescription}</p>
            </div>
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
        <h2 className="uppercase text-2xl">{name}</h2>
      </section>
      <section>
        <article className="text-justify">
          {projectGallerySection}
          <div className="p-8 pt-0">
            <p className="text-xs">{projectDescription}</p>
          </div>
        </article>
      </section>
    </main>
  )

  return isMobile ? mobileLayout : desktopLayout
}
export const pageQuery = graphql`
  query($projectID: String!) {
    datoCmsInterior(id: { eq: $projectID }) {
      id
      name
      description
      cover {
        fluid(
          maxWidth: 400
          forceBlurhash: false
          imgixParams: { fm: "jpg", q: 100 }
        ) {
          ...GatsbyDatoCmsFluid
        }
      }
      photos {
        originalId
        fluid(
          maxWidth: 400
          forceBlurhash: false
          imgixParams: { fm: "jpg", q: 100 }
        ) {
          ...GatsbyDatoCmsFluid
        }
      }
    }
  }
`
