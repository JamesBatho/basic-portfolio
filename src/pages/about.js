import React from "react"
import Layout from "../components/Layout"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { graphql } from "gatsby"
import {
  about,
  profileImage,
  header,
  aboutMe,
} from "../styles/about.module.css"

export default function About({ data }) {
  const image = getImage(data.file)

  return (
    <Layout>
      <h4 className={header}>
        UX Designer / React Developer / Software Engineer
      </h4>
      <div className={about}>
        <p className={aboutMe}>
          I am a Web Developer with a strong engineering background who has
          recently graduated from Springboard in June. Currently I am working as
          a freelancer on Upwork, developing a project with Code for Baltimore
          and looking for a full time position.
          <br />
          <br />
          Over the course of the bootcamp and several years of coding experience
          through coursework and projects I have become proficient in:
          Javascript, Python, CSS, HTML, React, Node, Express, Jasmine, Jest.
          and other front and backend technologies.
          <br />
          <br />
          I'm looking for a full time position where I will be able to continue
          growing as a developer by designing interactive web applications in an
          environment where asking questions and having a growth mindset are
          encouraged.
          <br />
          <br />
          When I'm not focused on honing my skills as a software engineer you
          can often find me hiking on some part of the Appalachian Trail or in
          the kitchen making dinner for my girlfriend.
          <br />
          <br />
          If you're looking for someone with these skills and a strong
          motivation to succeed please don't hesitate to get in touch.
          <br />
          <br />
          You can contact me at: j.batho325@gmail.com My resume can be found
          <a href="https://resume.creddle.io/resume/3r1mq0vbt0"> here. </a>
        </p>
        <GatsbyImage
          image={image}
          alt="Profile Image"
          className={profileImage}
        />
      </div>
    </Layout>
  )
}

export const query = graphql`
  query AboutImage {
    file(relativePath: { eq: "about-pic.jpg" }) {
      id
      childImageSharp {
        gatsbyImageData
      }
    }
  }
`
