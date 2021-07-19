import { graphql, Link } from "gatsby"
import React from "react"
import Layout from "../../components/Layout"
import { portfolio, projectss } from "../../styles/projects.module.css"
import { GatsbyImage } from "gatsby-plugin-image"

export default function Projects({ data }) {
  const projects = data.projects.nodes
  const { contact } = data.contact.siteMetadata
  return (
    <Layout>
      <div className={portfolio}>
        <h2> Portfolio</h2>
        <h3> Projects & Websites I've Created</h3>
        <div className={projectss}>
          {projects.map(project => (
            <Link to={`/projects/${project.frontmatter.slug}`} key={project.id}>
              <div>
                <GatsbyImage
                  alt="banner"
                  image={
                    project.frontmatter.thumb.childImageSharp.gatsbyImageData
                  }
                />
                <h3>{project.frontmatter.title}</h3>
                <p>{project.frontmatter.stack}</p>
              </div>
            </Link>
          ))}
        </div>
        <p>
          Liking what you're seeing? Feel free to email me at {contact} for more
          information.
        </p>
      </div>
    </Layout>
  )
}

// export page query

export const query = graphql`
  query ProjectsPage {
    projects: allMarkdownRemark(
      sort: { fields: frontmatter___date, order: DESC }
    ) {
      nodes {
        frontmatter {
          slug
          stack
          title
          date
          thumb {
            childImageSharp {
              gatsbyImageData(layout: FULL_WIDTH)
            }
          }
        }
        id
      }
    }
    contact: site {
      siteMetadata {
        contact
      }
    }
  }
`
