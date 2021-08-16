import { graphql, Link } from "gatsby"
import React from "react"
import Layout from "../components/Layout"
import { header, btn, banner } from "../styles/home.module.css"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { Helmet } from "react-helmet"

export default function Home({ data }) {
  const image = getImage(data.file)

  return (
    <Layout>
      <Helmet>
        <html lang="en" />
        <title> James Batho Web Developer Portfolio</title>
        <meta
          name="google-site-verification"
          content="eb98KeFHnXsdxwADobJapT8F7xgpI7jLThd_qHUzeeo"
        />
      </Helmet>
      <section className={header}>
        <div>
          <h2>Design </h2>
          <h3>Develop & Deploy</h3>
          <p> UX designer & web developer based in Fort Lauderdale </p>
          <Link to="/projects" className={btn}>
            My Portfolio Projects
          </Link>
        </div>
        <GatsbyImage alt="banner image" image={image} className={banner} />
      </section>
    </Layout>
  )
}

export const query = graphql`
  query HomeImage {
    file(relativePath: { eq: "banner2.jpg" }) {
      id
      childImageSharp {
        gatsbyImageData
      }
    }
  }
`
