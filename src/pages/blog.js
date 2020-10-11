import React from 'react'
import { Link, graphql, useStaticQuery } from 'gatsby'
import Layout from '../components/layout'
import Head from '../components/head'
import blogStyles from './blog.module.scss';

const BlogPage = () => {
    const data = useStaticQuery(graphql`
    query {
      allContentfulBlogPost (
        sort: {
          fields: publishedDate,
          order: DESC
        }
      ) {
        edges {
          node {
            title
            slug
            publishedDate(formatString: "MMMM Do, YYYY")
          }
        }
      }
    }
    `)
    return (
        <Layout>
            <Head title="Blog" />
            <h1>Blog</h1>
            <p>Posts will show up here later on</p>
            <ol className={blogStyles.posts}>
            {data.allContentfulBlogPost.edges.map(({node}) => {
                return (
                    <li key={node.title} className={blogStyles.post}>
                        <h2><Link to={`/blog/${node.slug}`}>{node.title}</Link></h2>
                        <p>{node.publishedDate}</p>    
                    </li>
                )
            })}
            </ol>
        </Layout>
    )
}

export default BlogPage;