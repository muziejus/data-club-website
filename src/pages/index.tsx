import * as React from "react"

import { Link } from "gatsby"

import Layout from "../components/layout"

const IndexPage = () => (
  <Layout>
    <h1 className="font-title">Hi, Data Friends,</h1>

    <p>
      Data Club, provided by <a href="https://library.columbia.edu/services/research-data-services/">Research Data Services</a>,
      offers a series of strategic lessons and a supportive meeting space for members of the
      Columbia community of all levels to learn, share, and implement the
      philosophies, tools, and methodologies for a data-driven project of their
      choosing.
      In bi-monthly meetings, the Data Club provides a short
      instructive session, free-work time, and a collaborative and exploratory
      environment for researchers to pursue a personal project with the
      assistance of Columbia University librarians and their data-minded peers.
    </p>

    <h2 className="font-title">Fall 2022 Calendar:</h2>

    <ul>
      <li>Sep 15, <Link to="meetings/2022/september-15-xarray">Introduction to Xarray</Link></li>
      <li>
        Sep 29, <Link to="meetings/2022/september-29-holoviz-1">
          Introduction to HoloViz, Part 1
        </Link>
      </li>
      <li>
        Oct 13, <Link to="meetings/2022/october-13-holoviz-2">Introduction to HoloViz, Part 2</Link>
      </li>
      <li>Oct 27, <Link to="meetings/2022/october-27-databases">Introduction to Relational Databases</Link>
      </li>
      <li>
        Nov 10, <Link to="meetings/2022/november-10-eda-in-observable">Exploratory Data Analysis with JavaScript in Observable</Link>
      </li>
      <li>
        Dec 8, <Link to="meetings/2022/december-08-pymc">Introduction to PyMC</Link>
      </li>
    </ul>

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
