import React from "react"
import Layout from "../components/Layout"
import Img from "gatsby-image"
import { graphql } from "gatsby"
import { resumeImage, resumeBody } from "../styles/resume.module.css"
import resumePDF from "../../static/JamesBathoResume.pdf"

export default function Resume({ data }) {
  return (
    <Layout>
      <div className={resumeBody}>
        <Img
          className={resumeImage}
          fluid={data.file.childrenImageSharp[0].fluid}
        />
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
      childrenImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`
