import { GatsbyNode } from "gatsby";
import path from "path";

const meetingTemplate = path.resolve(`./src/templates/meeting.tsx`);

export const createPages = async ({ graphql, actions, reporter }) => {
  const { createPage } = actions;

  const result = await graphql(`
    {
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

  const posts = result.data.allMdx.nodes;

  posts.forEach((node) => {
    const path = `meetings/${node.frontmatter.slug.replace(/^\//, "")}`;

    createPage({
      path,
      component: `${meetingTemplate}?__contentFilePath=${node.internal.contentFilePath}`,
      context: { id: node.id },
    });
  });
};

// export const createSchemaCustomization: GatsbyNode["createSchemaCustomization"] =
//   ({ actions }) => {
//     actions.createTypes(`
//     type Site {
//       siteMetadata: SiteMetadata!
//     }
//
//     type SiteMetadata {
//       title: String!
//     }
//   `);
//   };
