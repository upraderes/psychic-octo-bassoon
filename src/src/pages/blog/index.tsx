import * as React from 'react';
import { Link, graphql } from 'gatsby';
import Layout from '../../components/layout';
import Seo from '../../components/seo';


const BlogPage = ({ data }) => {
  return (
    <div>
      <Layout pageTitle="My Blog Posts">
        <p>My cool posts will go in here</p>
        {
        data.allMdx.nodes.map((node) => (
          <article key={node.id}>
            <h2><Link to={`/blog/${node.frontmatter.slug}`}>{node.frontmatter.title}</Link></h2>
            <p>Posted: {node.frontmatter.date}</p>
            <p>{node.excerpt}</p>
          </article>
        ))
      }
      </Layout>
    </div>
  );
};
export const query = graphql`
query MyQuery {
    allMdx(sort: { frontmatter: { date: DESC } }) {
      nodes {
        frontmatter {
          date(formatString: "MMMM D, YYYY")
          title
          slug
        }
        id
        excerpt
      }
    }
  }
  `;

export const Head: React.FC = () => <Seo title="My Blog Posts" />;
export default BlogPage;