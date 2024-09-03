// @ts-check

/**
 * @type {import('gatsby').GatsbyConfig}
 */

import { dirname } from "path";
import { fileURLToPath } from "url";
// import remarkGfm from "remark-gfm";

const __dirname = dirname(fileURLToPath(import.meta.url));

const config = {
  siteMetadata: {
    title: `Columbia Data Club`,
    description: `Data Club, provided by Research Data Services, offers a series of strategic lessons and a supportive meeting space for members of the Columbia community of all levels to learn, share, and implement the philosophies, tools, and methodologies for a data-driven project of their choosing.`,
    author: `Moacir P. de Sá Pereira`,
    siteUrl: `https://columbia-data-club.github.io/`,
    menuLinks: [
      {
        name: "home",
        link: "/",
      },
      {
        name: `Page 1`,
        link: `/page-1`,
      },
    ],
  },
  // Learn more at: https://gatsby.dev/graphql-typegen
  graphqlTypegen: true,
  plugins: [
    "gatsby-plugin-pnpm",
    "gatsby-plugin-postcss",
    "gatsby-plugin-image",
    "gatsby-plugin-sitemap",
    {
      resolve: "gatsby-plugin-mdx",
      options: {
        // mdxOptions: {
        //   remarkPlugins: [remarkGfm]
        // }
        // extensions: [`.mdx`, `.md`],
        gatsbyRemarkPlugins: [
          {
            resolve: "gatsby-remark-images",
            options: {
              maxWidth: 590,
            },
          },
        ],
      },
    },
    "gatsby-plugin-sharp",
    // {
    //   resolve: "gatsby-transformer-remark",
    //   options: {
    //     plugins: [
    //       {
    //         resolve: "gatsby-remark-images",
    //         options: {
    //           maxWidth: 590,
    //         },
    //       },
    //       // "gatsby-remark-copy-linked-files",
    //       // "gatsby-remark-smartypants",
    //     ],
    //   },
    // },
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: `${__dirname}/src/images/`,
      },
      __key: "images",
    },
    // {
    //   resolve: "gatsby-source-filesystem",
    //   options: {
    //     name: "pages",
    //     path: `${__dirname}/src/pages/`,
    //   },
    // },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "posts",
        path: `${__dirname}/src/posts/`,
      },
    },
    {
      resolve: "gatsby-plugin-react-svg",
      options: {
        rule: {
          include: /\.inline\.svg$/,
        },
      },
    },
  ],
  trailingSlash: `always`, // default is always.
};

export default config;
