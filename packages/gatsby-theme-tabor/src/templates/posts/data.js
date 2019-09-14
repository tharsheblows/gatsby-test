const PostTemplateFragment = `
  fragment PostTemplateFragment on WPGraphQL_Post {
    id
    postId
    title
    content
    link
    featuredImage {
      sourceUrl
      title
    }
    categories {
      nodes {
        name
        slug
        id
      }
    }
    tags {
      nodes {
        slug
        name
        id
      }
    }
    author {
      name
      avatar(size:50) {
        url
      }
      slug
    }
  }
`;

const BlogPreviewFragment = `
  fragment BlogPreviewFragment on WPGraphQL_Post {
    id
    postId
    title
    uri
    date
    slug
    excerpt
    content
    featuredImage {
      sourceUrl
      title
    }
    author {
      name
      avatar(size:50) {
        url
      }
      slug
    }
  }
`;

module.exports.PostTemplateFragment = PostTemplateFragment;
module.exports.BlogPreviewFragment = BlogPreviewFragment;
