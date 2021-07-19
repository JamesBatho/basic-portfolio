import { Link, graphql, useStaticQuery } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import React from "react"

export default function Navbar() {
  const data = useStaticQuery(graphql`
    query SiteInfo {
      site {
        siteMetadata {
          copyright
          description
          title
        }
      }
    }
  `)

  const { title } = data.site.siteMetadata
  return (
    <nav>
      <div className="navbar__right">
        <h1>{title}</h1>
        <a href="http://github.com/JamesBatho">
          <StaticImage
            className="icon"
            alt="github icon"
            src="../images/icons/github-icon.png"
          />
        </a>
        <a href="https://www.linkedin.com/in/jamesbatho/">
          <StaticImage
            alt="linkedIn Icon"
            className="icon"
            src="../images/icons/linkedIn-icon.png"
          />
        </a>
        <a href="mailto: j.batho325@gmail.com?subject = Portfolio">
          <StaticImage
            alt="email icon"
            className="icon"
            src="../images/icons/email-icon.png"
          />
        </a>
      </div>

      <div className="links">
        <Link to="/"> Home </Link>
        <Link to="/about"> About </Link>
        <Link to="/projects"> Portfolio Projects </Link>
        <Link to="/resume"> Resume </Link>
      </div>
    </nav>
  )
}
