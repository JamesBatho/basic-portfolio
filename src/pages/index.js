import { graphql, Link } from "gatsby"
import React from "react"
import Layout from "../components/Layout"
import { header, btn } from "../styles/home.module.css"
import Img from "gatsby-image"

export default function Home({ data }) {
  return (
    <Layout>
      <section className={header}>
        <div>
          <h2>Design!!!! </h2>
          <h3>Develop & Deploy</h3>
          <p> UX designer & web developer based in Fort Lauderdale </p>
          <Link to="/projects" className={btn}>
            My Portfolio Projects
          </Link>
        </div>
        <Img fluid={data.file.childrenImageSharp[0].fluid} />
      </section>
    </Layout>
  )
}

export const query = graphql`
  query Gungeon {
    file(relativePath: { eq: "gungeon.png" }) {
      id
      childrenImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`
