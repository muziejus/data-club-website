import React from "react"
import { graphql } from "gatsby";
import { MDXProvider } from "@mdx-js/react";
import { StaticImage, GatsbyImage, getImage, IGatsbyImageData, ImageDataLike } from 'gatsby-plugin-image'
import Layout from "../components/layout";
import Video from "../components/video";

type MeetingProps = {
  data: Queries.MeetingQuery;
  children: React.ReactNode
}

const Meeting = ({ data, children }: MeetingProps) => {
  if(data.mdx?.frontmatter){
    const image = getImage(data.mdx.frontmatter.header_image as ImageDataLike)

    return (
      <Layout>
        <article>
          <header className="block w-full py-5">
            <GatsbyImage
              image={image as IGatsbyImageData}
              alt={data.mdx.frontmatter.title as string}
            />
            <h1 className="font-title text-3xl font-bold">{data.mdx.frontmatter.title}</h1>
            <p>{data.mdx.frontmatter.author}<br />
              {data.mdx.frontmatter.date}</p>
          </header>

          {data.mdx.frontmatter.notebook &&
            <p className="text-xl">Meeting notebook: <a href={`https://colab.research.google.com/github/columbia-data-club/meetings/blob/main/${data.mdx.frontmatter.notebook}`}>
              <StaticImage src="../mages/open-in-colab.svg" alt="Open in Colab" />
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

  return false
}

export const query = graphql`
  query Meeting ($id: String!) {
    mdx(id: { eq: $id }) {
      frontmatter {
        title
        author
        date(formatString: "MMMM DD, YYYY")
        notebook
        youtube
        header_image{
          childImageSharp{
            gatsbyImageData
          }
        }
      }
    }
  }
`

export default Meeting;
