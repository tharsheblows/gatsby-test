/** @jsx jsx */
import { jsx } from 'theme-ui'
import { Link } from 'gatsby'

const Tags = ({ post }) => {
  const tags = post.tags.nodes
  return (
    <div>
      {tags.length > 0 && (
        <span
          sx={{
            color: 'muted',
            fontSize: 1,
            fontFamily: `heading`,
            letterSpacing: 1,
            mr: 1,
          }}
        >
          {tags.length > 1 ? 'Tags: ' : 'Tag: '}
        </span>
      )}
      {tags.map(tag => (
        <button
          small
          secondary
          sx={{ variant: `buttons.primary`, mr: 1, mb: 2 }}
        >
          <Link
            aria-label={`visit tag ${tag.name} page`}
            sx={{ color: '#fff' }}
            to={`/tag/${tag.slug}`}
            key={tag.id}
          >
            {tag.name}
          </Link>
        </button>
      ))}
    </div>
  )
}

export default Tags
