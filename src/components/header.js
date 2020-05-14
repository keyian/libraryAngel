import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import styles from './header.module.css'

const Header = ({ siteTitle }) => (
  <header
    className={styles.header}
  >
      <h1 className={styles.h1}>
        <Link
          to="/"
          className={styles.link}
        >
          {siteTitle}
        </Link>
      </h1>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
