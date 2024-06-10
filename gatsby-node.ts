import path from "path";
import { GatsbyNode } from "gatsby";

interface MdxNode {
  id: string;
  frontmatter: {
    slug: string;
  };
  internal: {
    contentFilePath: string;
  };
}

interface CreatePagesResult {
  allMdx: {
    nodes: MdxNode[];
  };
}

export const createPages: GatsbyNode["createPages"] = async ({
  graphql,
  actions,
  reporter,
}) => {
  const { createPage } = actions;

  const result = await graphql<CreatePagesResult>(`
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
        path: node.frontmatter.slug,
        // Provide the path to the MDX content file so webpack can pick it up and transform it into JSX
        component: `${meetingTemplate}?__contentFilePath=${node.internal.contentFilePath}`,
        // component: node.internal.contentFilePath,
        context: { id: node.id },
      });
    });
  }
};

export const createSchemaCustomization: GatsbyNode["createSchemaCustomization"] =
  ({ actions }) => {
    actions.createTypes(`
    type Site {
      siteMetadata: SiteMetadata!
    }

    type SiteMetadata {
      title: String!
    }
  `);
  };
