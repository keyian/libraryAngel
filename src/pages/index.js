import React from "react"
import { Link, graphql } from "gatsby"
import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import styles from "./index.module.css"

export default function IndexPage ({data}) {
  return (
  <Layout>
    <SEO title="Library Angel" />
    <h1 className={styles.h1Repo}>Repository for dilettante history</h1>
    <p>Welcome to Library Angel</p>
    <p>Find. *<b>Your</b>* Creative Space.</p>
    <div>
      <Image />
    </div>
     <h4>{data.allMarkdownRemark.totalCount} Posts</h4>
     <hr />
    {data.allMarkdownRemark.edges.map(({ node }) => (
          <div key={node.id}>
            <Link
                to={node.fields.slug}
                className={styles.blogPost}
              >
              <h3>
                {node.frontmatter.title}{" "}
                <span>
                  — {node.frontmatter.date}
                </span>
              </h3>
              <p>{node.excerpt}</p>
            </Link>
          </div>
        ))}
  </Layout>
)
}

export const query = graphql`
  query {
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      totalCount
      edges {
        node {
          id
          frontmatter {
            title
            date(formatString: "DD MMMM, YYYY")
          }
          fields {
            slug
          }
          excerpt
        }
      }
    }
  }
`
