/** @jsx jsx */
import { jsx, Styled } from 'theme-ui'
import { Link } from 'gatsby'

const Author = ({ post }) => {
  const { name, slug } = post.author
  return (
    <Styled.a
      as={Link}
      sx={{
        variant: `links.decorated`,
      }}
      aria-label={`visit ${name} page`}
      to={`/author/${slug}`}
    >
      {name}
    </Styled.a>
  )
}

export default Author
