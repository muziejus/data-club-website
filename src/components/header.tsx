import { Link, useStaticQuery, graphql } from "gatsby"
import React from "react"



const Header: React.FC = () => {
  const data: Queries.SiteTitleAndMenuLinksQuery = useStaticQuery(graphql`
    query SiteTitleAndMenuLinks {
      site {
        siteMetadata {
          title
          menuLinks {
            name
            link
          }
        }
      }
    }
  `)

  const { title, menuLinks } = data.site.siteMetadata;

  return (
    <header
      className="text-white p-10"
      style={{
        background: `green`,
        marginBottom: `1.45rem`,
      }}
    >
      <div>
        <h1 className="text-4xl">
          <Link
            to="/"
            style={{
              color: `white`,
              textDecoration: `none`,
            }}
          >
            {title}
          </Link>
        </h1>
      </div>
      <nav>
        <ul>
          {menuLinks.map(({ name, link }) => (
            <li>
              <Link to={link}>{name}</Link>
            </li>
          )
          )}
        </ul>
      </nav>
    </header>
  )
}

export default Header
