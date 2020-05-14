/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import favicon from '../images/favicon.ico'
import {Helmet} from 'react-helmet'

import Header from "./header"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>

      <Header siteTitle={data.site.siteMetadata.title} />
      <Helmet>
        <link rel="icon" href={favicon} />
      </Helmet>
        <main>{children}</main>
        <br />
        <hr />
        <footer>
          © {new Date().getFullYear()}, all rights forfeited.
        </footer>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
