import React from "react"
import Layout from "../components/Layout"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { graphql } from "gatsby"
import { resumeImage, resumeBody } from "../styles/resume.module.css"
import resumePDF from "../../static/JamesBathoResume.pdf"

export default function Resume({ data }) {
  const image = getImage(data.file)
  return (
    <Layout>
      <div className={resumeBody}>
        <GatsbyImage image={image} className={resumeImage} />
      </div>
      <p>
        To download a PDF version of my resume please click
        <a href={resumePDF}> here. </a>
      </p>
    </Layout>
  )
}

export const query = graphql`
  query ResumeImage {
    file(relativePath: { eq: "JamesBathoResume2.jpg" }) {
      id
      childImageSharp {
        gatsbyImageData
      }
    }
  }
`
