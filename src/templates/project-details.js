import React from "react"
import Layout from "../components/Layout"
import Img from "gatsby-image"
import { details, htmls, featured } from "../styles/project-details.module.css"
import { graphql } from "gatsby"

export default function ProjectDetails({ data }) {
  const { html } = data.markdownRemark

  const { title, stack, featuredImage } = data.markdownRemark.frontmatter

  return (
    <Layout>
      <div className={details}>
        <h2> {title} </h2>
        <h3> {stack} </h3>
        <div className={featured}>
          <Img fluid={featuredImage.childImageSharp.fluid} />
        </div>
        <div className={htmls} dangerouslySetInnerHTML={{ __html: html }} />
      </div>
    </Layout>
  )
}

export const query = graphql`
  query ProjectDetails($slug: String) {
    markdownRemark(frontmatter: { slug: { eq: $slug } }) {
      id
      html
      frontmatter {
        stack
        title
        featuredImage {
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
