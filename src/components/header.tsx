import { Link, useStaticQuery, graphql } from "gatsby"
import React from "react"
import ColumbiaDataClubHeader from "./assets/columbia-data-club.inline.svg"

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
      className="text-white bg-darkBlue p-5"
    >
      <div className="bg-columbiaBlue p-4 pt-5">
          <Link
            to="/"
          >
            <h1 className="sr-only">{ title }</h1>
            <ColumbiaDataClubHeader />
          </Link>
      </div>
    </header>
  )
}

export default Header
