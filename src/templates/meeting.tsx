import React from "react"
import { graphql } from "gatsby";
import { MDXProvider } from "@mdx-js/react";
import { StaticImage } from "gatsby-plugin-image";
import Layout from "../components/layout";
import Video from "../components/video";

const Meeting: React.FC = ({ data, children }) => {
  const date = new Date(data.mdx.frontmatter.date)
  const dateFormatter = new Intl.DateTimeFormat("en-US", {
    year: "numeric",
    month: "long",
    weekday: "long",
    day: "numeric"
  });

  return (
    <Layout>
      <article>
        <header className="block w-full py-5">
          <h1 className="font-title text-3xl font-bold">{data.mdx.frontmatter.title}</h1>
          <p>{data.mdx.frontmatter.author}<br />
            {dateFormatter.format(date)}</p>
        </header>

        {data.mdx.frontmatter.notebook &&
          <p className="text-xl">Meeting notebook: <a href={`https://colab.research.google.com/github/columbia-data-club/meetings/blob/main/${data.mdx.frontmatter.notebook}`}>
            <StaticImage src="../images/open-in-colab.svg" alt="Open in Colab" />
          </a></p>
        }

        {data.mdx.frontmatter.youtube &&
          <Video videoTitle="YouTube video player" videoSrcURL={`https://www.youtube.com/embed/${data.mdx.frontmatter.youtube.split("=")[1]}`} />
        }


        <MDXProvider>
          {children}
        </MDXProvider>
      </article>
    </Layout>
  )
}

export const query = graphql`
  query($id: String!) {
    mdx(id: { eq: $id }) {
      frontmatter {
        title
        author
        date
        notebook
        youtube
      }
    }
  }
`

export default Meeting;
