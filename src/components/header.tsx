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

  const { title } = data.site?.siteMetadata ?? { title: "Data Club Static Title"};

  return (
    <header
      className="text-white bg-primary p-5"
    >
      <div>
        <h1 className="text-4xl font-title font-bold">
          <Link
            to="/"
          >
            {title}
          </Link>
        </h1>
      </div>
    </header>
  )
}

export default Header
