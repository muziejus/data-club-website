import React from "react"
import { graphql, Link } from "gatsby"

import Layout from "../components/layout"

type UpcomingMeetingProps = {
  data: Queries.UpcomingMeetingsQuery;
}

const currentSemester = "Fall 2024";

export const query = graphql`
  query UpcomingMeetings {
    allMdx(
      sort: {frontmatter: {date: ASC}}
      filter: {frontmatter: {date: {gt: "2024-09-01"}}}
    ) {
      nodes {
        frontmatter {
          title
          slug
          date(formatString: "MMMM D, YYYY")
        }
      }
    }
  }
`

const IndexPage = ({ data }: UpcomingMeetingProps) => 
(
  <Layout>
    <h1 className="font-title">Hi, Data Friends,</h1>

    <p>
      Data Club, provided by <a href="https://library.columbia.edu/services/research-data-services/">Research Data Services</a>,
      offers a series of strategic lessons and a supportive meeting space for members of the
      Columbia community of all levels to learn, share, and implement the
      philosophies, tools, and methodologies for a data-driven project of their
      choosing.
    </p>

    <p>
      In bi-monthly meetings, the Data Club provides a short
      instructive session, free-work time, and a collaborative and exploratory
      environment for researchers to pursue a personal project with the
      assistance of Columbia University librarians and their data-minded peers.
    </p>

    <h2 className="font-title">{currentSemester} Calendar:</h2>

    <ul>
      {data.allMdx.nodes.map(({ frontmatter }) => {
        const { slug, title, date } = frontmatter
        const url = `meetings/${slug}`;
        return (
          <li key={slug}>
            <Link to={url}>{title}</Link> ({date})
          </li>
        )
      })}
    </ul>

    <h2 className="font-title">Stay Informed:</h2>

    <p>
      Join the Data Club Mailing List:
      https://tinyurl.com/cul-data-club-mailing-list
    </p>

    <p>
      Follow the Club’s Progress on GitHub:
      https://github.com/columbia-data-club
    </p>

    <p>
      Join the Studio Mailing List to hack at emerging
      practices in pedagogy and digital scholarship:
      https://tinyurl.com/cul-studio-mailing-list
    </p>

  </Layout >
)

export default IndexPage
