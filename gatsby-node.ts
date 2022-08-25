import { GatsbyNode } from "gatsby";

export const createSchemaCustomization: GatsbyNode["createSchemaCustomization"] = ({ actions }) => {
  actions.createTypes(`
    type Site implements Node {
      siteMetadata: SiteMetadata!
    }
    type SiteMetadata {
      title: String!
      menuLinks: [MenuLinks!]!
    }
    type MenuLinks {
      name: String!
      link: String!
    }
  `)
}
