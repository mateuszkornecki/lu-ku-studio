import React from "react"
import { graphql } from "gatsby"
import Img from "gatsby-image"

export default function Template({
  data, // this prop will be injected by the GraphQL query below.
}) {
  const { markdownRemark } = data // data.markdownRemark holds your post data
  const { frontmatter, html } = markdownRemark

  console.log(data)
  let post = data.markdownRemark
  let featuredImgFluid = post.frontmatter.featuredImage.childImageSharp.fluid

  console.log("HTML", html)

  console.log("img", featuredImgFluid)
  return (
    <main>
      <article style={{ display: "flex", padding: "1rem" }}>
        <div style={{ flex: 1, width: "0.5vw" }}>
          <h2>{frontmatter.title}</h2>
          <p>{frontmatter.description}</p>
          <p>Autor: {frontmatter.author}</p>
          <p>Lokalizacja: {frontmatter.location}</p>
          <p>{frontmatter.footer}</p>
        </div>
        <img style={{ width: "500px" }} src={featuredImgFluid.src} />
        {/*<Img src={featuredImgFluid} />*/}
      </article>
    </main>
  )
}
export const pageQuery = graphql`
  query($slug: String!) {
    markdownRemark(frontmatter: { slug: { eq: $slug } }) {
      html
      frontmatter {
        #        date(formatString: "MMMM DD, YYYY")
        slug
        title
        description
        author
        location
        footer
        featuredImage {
          childImageSharp {
            fluid(maxWidth: 800) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`
