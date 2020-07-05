/** @jsx jsx */
import { jsx } from 'theme-ui'
import { Link } from 'gatsby'

const Categories = ({ post }) => {
  const categories = post.categories.nodes
  return (
    <div sx={{ mb: 1 }}>
      {categories.length > 0 && (
        <span
          sx={{
            fontSize: 1,
            mr: 1,
          }}
        >
          {categories.length > 1 ? 'Categories: ' : 'Category: '}
        </span>
      )}
      {categories.map(cat => (

          <Link
            sx={{variant: `links.decoratedSpaced`}}
            to={`/category/${cat.slug}`}
            key={cat.id}
            aria-label={`visit category ${cat.name} page`}
          >
            {cat.name}
          </Link>

      ))}
    </div>
  )
}

export default Categories
