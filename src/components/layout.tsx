/**
 * Layout component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/static-query/
 */

import * as React from "react"
import PropTypes, { InferProps } from "prop-types"

import Header from "./header"

const LayoutPropTypes = {
  children: PropTypes.node.isRequired,
}

type LayoutProps = InferProps<typeof LayoutPropTypes>;

const Layout: React.FC<LayoutProps> = ({ children }) =>
(
  <>
    <Header />
    <main className="py-5 px-10 prose">{children}</main>
    <footer className="bg-gray text-white p-5">
      © {new Date().getFullYear()}, Built with
      {` `}
      <a href="https://www.gatsbyjs.com">Gatsby</a>
    </footer>
  </>
)

Layout.propTypes = LayoutPropTypes;

export default Layout
