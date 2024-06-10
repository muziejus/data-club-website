import type { GatsbyConfig } from "gatsby";
import { dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));

const config: GatsbyConfig = {
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
  // More easily incorporate content into your pages through automatic TypeScript type generation and better GraphQL IntelliSense.
  // If you use VSCode you can also use the GraphQL plugin
  // Learn more at: https://gatsby.dev/graphql-typegen
  graphqlTypegen: true,
  plugins: [
    "gatsby-plugin-pnpm",
    "gatsby-plugin-postcss",
    "gatsby-plugin-image",
    "gatsby-plugin-sitemap",
    "gatsby-plugin-mdx",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: "./src/images/",
      },
      __key: "images",
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "posts",
        path: `./src/posts/`,
      },
    },
  ],
  trailingSlash: `always`, // default is always.
};

export default config;
