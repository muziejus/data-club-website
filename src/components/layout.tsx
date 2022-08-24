/**
 * Layout component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/static-query/
 */

import React from "react"
import PropTypes, { InferProps } from "prop-types"
import { StaticQuery, graphql } from "gatsby"

import Header from "./header"

const LayoutPropTypes = {
  children: PropTypes.node.isRequired,
}

type LayoutProps = InferProps<typeof LayoutPropTypes>;

const Layout = ({ children }: LayoutProps) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
            menuLinks {
              name
              link
            }
          }
        }
      }
    `}
    render={data => (
        <>
        <Header 
          menuLinks={data.site.siteMetadata.menuLinks} 
          siteTitle={data.site.siteMetadata.title} 
        />
        <div
          style={{
            margin: `0 auto`,
            maxWidth: 960,
            padding: `0px 1.0875rem 1.45rem`,
            paddingTop: 0,
          }}
        >
          <main>{children}</main>
          <footer>
            © {new Date().getFullYear()}, Built with
            {` `}
            <a href="https://www.gatsbyjs.com">Gatsby</a>
          </footer>
        </div>
      </>
    )}
  />
)

Layout.propTypes = LayoutPropTypes;

export default Layout
