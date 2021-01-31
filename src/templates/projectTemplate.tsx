import React, { useEffect, useRef, useState } from "react"

import styled, { keyframes } from "styled-components"

import Img from "gatsby-image"
import { graphql } from "gatsby"

import Logo from "../components/Logo"
import NavigationBack from "../components/NavigationBack"

import useWidth from "../hooks/useWidth"

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
  const { markdownRemark, allFile } = data
  const { frontmatter } = markdownRemark
  const { isMobile } = useWidth()
  const descriptionRef = useRef(null)
  const [desc, setDesc] = useState(0)

  useEffect(() => {
    if (descriptionRef?.current?.clientHeight)
      setDesc(descriptionRef.current.clientHeight)
  }, [descriptionRef])

  const testTitle = desc ? (
    <Title desc={desc + 64}>
      <h2 className="uppercase text-2xl">{frontmatter.title}</h2>
    </Title>
  ) : (
    <h2 className="uppercase text-2xl">{frontmatter.title}</h2>
  )

  const projectDescription = (
    <React.Fragment>
      <p className="mb-4 text-xs">{frontmatter.description}</p>
      <span className="flex">
        <p className="pr-4 text-xs">Autor:</p>
        <p className="text-xs">{frontmatter.author}</p>
      </span>
      <span className="flex">
        <p className="pr-4 text-xs">Lokalizacja:</p>
        <p className="text-xs">{frontmatter.location}</p>
      </span>
      <p className="text-xs">{frontmatter.footer}</p>
    </React.Fragment>
  )

  const projectGallerySection = (
    <section className={isMobile ? "" : `h-screen overflow-y-scroll px-8 pt-8`}>
      {allFile.edges.map(edge => {
        return (
          <div className={isMobile ? "px-8 pb-8" : "pb-8"}>
            <Img fluid={edge.node.childImageSharp.fluid} />
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
        <article className="flex text-justify max-w-65p">
          <div>
            {testTitle}
            <div
              className="absolute max-w-65p bottom-8 left-8 invisible animate-show-content"
              ref={descriptionRef}
            >
              {projectDescription}
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
        <h2 className="uppercase text-2xl">{frontmatter.title}</h2>
      </section>
      <section>
        <article className="">
          {projectGallerySection}
          <div className="p-8 pt-0">{projectDescription}</div>
        </article>
      </section>
    </main>
  )

  return isMobile ? mobileLayout : desktopLayout
}
export const pageQuery = graphql`
  query($slug: String!, $imagesSlug: String!) {
    markdownRemark(frontmatter: { slug: { eq: $slug } }) {
      html
      frontmatter {
        slug
        title
        description
        author
        location
        footer
        projectCover {
          childImageSharp {
            fluid(maxWidth: 500) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
    allFile(
      filter: {
        relativeDirectory: { eq: $imagesSlug }
        extension: { regex: "/(jpg)/" }
      }
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
