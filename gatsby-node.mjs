// @ts-check

/**
 * @type {import('gatsby').GatsbyNode['createPages']}
 */

import path from "path";

// interface MdxNode {
//   id: string;
//   frontmatter: {
//     slug: string;
//   };
//   internal: {
//     contentFilePath: string;
//   };
// }
//
// interface CreatePagesResult {
//   allMdx: {
//     nodes: MdxNode[];
//   };
// }

export const createPages = async ({ graphql, actions, reporter }) => {
  const { createPage } = actions;

  const result = await graphql(`
    query GetMdxPages {
      allMdx {
        nodes {
          id
          frontmatter {
            slug
          }
          internal {
            contentFilePath
          }
        }
      }
    }
  `);

  if (result.errors) {
    reporter.panicOnBuild("Error loading MDX result", result.errors);
  }

  // Create blog post pages.
  const meetingTemplate = path.resolve(`./src/templates/meeting.tsx`);
  if (result.data) {
    const posts = result.data.allMdx.nodes;
    posts.forEach((node) => {
      createPage({
        path: `meetings/${node.frontmatter.slug.replace(/^\//, "")}`,
        // Provide the path to the MDX content file so webpack can pick it up and transform it into JSX
        component: `${meetingTemplate}?__contentFilePath=${node.internal.contentFilePath}`,
        // component: node.internal.contentFilePath,
        context: { id: node.id },
      });
    });
  }
};

// export const createSchemaCustomization: GatsbyNode["createSchemaCustomization"] =
export const createSchemaCustomization = ({ actions }) => {
  actions.createTypes(`
    type Site {
      siteMetadata: SiteMetadata!
    }

    type SiteMetadata {
      title: String!
    }

    type Mdx implements Node {
      frontmatter: Frontmatter!
    }

    type Frontmatter {
      title: String!
      date: Date! @dateformat
    }
  `);
};
