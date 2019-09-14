/** @jsx jsx */
import { jsx, Styled } from 'theme-ui'
import { Link } from 'gatsby'

const Categories = ({ post }) => {
  const categories = post.categories.nodes
  return (
    <div sx={{ mb: 2 }}>
      {categories.length > 0 && (
        <span
          sx={{
            color: 'muted',
            fontSize: 1,
            fontFamily: `heading`,
            letterSpacing: 1,
            mr: 1,
          }}
        >
          {categories.length > 1 ? 'Categories: ' : 'Category: '}
        </span>
      )}
      {categories.map(cat => (
        <button sx={{ variant: `buttons.primary`, mr: 1, mb: 2 }}>
          <Link
            sx={{ color: '#fff' }}
            to={`/category/${cat.slug}`}
            key={cat.id}
            aria-label={`visit category ${cat.name} page`}
          >
            {cat.name}
          </Link>
        </button>
      ))}
    </div>
  )
}

export default Categories
