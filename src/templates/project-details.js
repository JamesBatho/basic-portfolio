import React from "react"
import Layout from "../components/Layout"
import { GatsbyImage } from "gatsby-plugin-image"
import { details, htmls, featured } from "../styles/project-details.module.css"
import { graphql } from "gatsby"

export default function ProjectDetails({ data }) {
  console.log(data)
  const { html } = data.markdownRemark

  const { title, stack, test, link } = data.markdownRemark.frontmatter

  return (
    <Layout>
      <div className={details}>
        <h2> {title} </h2>
        <h3> {stack} </h3>
        <div className={featured}>
          <a href={link}>
            <GatsbyImage
              alt="project banner"
              image={test.childImageSharp.gatsbyImageData}
            />
          </a>
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
        title
        stack
        link
        test {
          childImageSharp {
            gatsbyImageData
          }
        }
      }
    }
  }
`
