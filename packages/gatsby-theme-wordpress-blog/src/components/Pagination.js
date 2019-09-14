/** @jsx jsx */
import { jsx } from 'theme-ui'
import { Link } from 'gatsby'

const Pagination = ({
  pageNumber,
  hasNextPage,
  allPosts,
  itemsPerPage,
  postsPath,
  paginationPrefix,
}) => {
  const isLast = pageNumber === allPosts / itemsPerPage
  return (
    <div sx={{ variant: `pagination` }}>
      {pageNumber > 1 && (
        <div sx={{ variant: `paginationLinks` }}>
          {pageNumber !== 1 ? (
            <Link
              to={
                pageNumber > 2
                  ? `${postsPath}${paginationPrefix}/${pageNumber - 1}`
                  : `/`
              }
            >
              ← Prev
            </Link>
          ) : (
            <>
              <div sx={{ color: 'muted' }}> ← Prev</div>
            </>
          )}
        </div>
      )}
      <div sx={{ variant: `pageNumbers` }}>
        <nav role="navigation" aria-label="Pagination Navigation">
          <ul>
            {Array.from({ length: allPosts.length / itemsPerPage }, (_, i) => (
              <li>
                <Link
                  key={`pagination-number${i + 1}`}
                  to={
                    i === 0
                      ? `${postsPath}/`
                      : `${postsPath}/${paginationPrefix}/${i + 1}`
                  }
                >
                  {i + 1}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
      {hasNextPage && (
        <div sx={{ variant: `paginationLinks` }}>
          {!isLast ? (
            <Link to={`${postsPath}/${paginationPrefix}/${pageNumber + 1}`}>
              Next →
            </Link>
          ) : (
            <div sx={{ color: 'muted' }}> Next →</div>
          )}
        </div>
      )}
    </div>
  )
}

export default Pagination
