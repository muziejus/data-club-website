import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const Header = ({ siteTitle, menuLinks }) => {
  console.log(siteTitle);
  console.log(menuLinks);
  
  
  return (
  <header
    className="text-white p-10"
    style={{
      background: `green`,
      marginBottom: `1.45rem`,
    }}
  >
    <div>
      <h1 className="text-4xl">
        <Link
          to="/"
          style={{
            color: `white`,
            textDecoration: `none`,
          }}
        >
          {siteTitle}
        </Link>
      </h1>
    </div>
    <nav>
      <ul>
        {menuLinks.map(({name, link}: Record<string, string>) => (
            <li>
              <Link to={link}>{name}</Link>
            </li>
          )
        )}
      </ul>
    </nav>
  </header>
)}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
