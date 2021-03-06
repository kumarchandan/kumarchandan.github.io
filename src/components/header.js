import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const Header = ({ siteTitle }) => (
  <header
    style={{
      marginBottom: `1.45rem`,
    }}
  >
    <div
      style={{
        margin: `0 auto`,
        maxWidth: 960,
        padding: `1.45rem 1.0875rem`,
        display: 'flex',
        justifyContent: 'flex-end'
      }}
    >
      <div>
        <h4 style={{ margin: 10 }}>
          <Link
            to="/"
            style={{
              color: `#007acc`,
              textDecoration: `none`,
            }}
          >
            Home
          </Link>
        </h4>
      </div>
      <div>
        <h4 style={{ margin: 10 }}>
          <Link to="/blog/"  style={{ color: `#007acc`, textDecoration: `none`, }} >
            Blog
          </Link>
        </h4>
      </div>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: `Chandan Kumar's Website`,
}

export default Header
