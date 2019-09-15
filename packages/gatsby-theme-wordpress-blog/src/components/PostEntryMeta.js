/** @jsx jsx */
import { jsx } from "theme-ui"
import Categories from "./Categories"
import Tags from "./Tags"
import Comments from "./Comments"

const PostEntryMeta = ({ post, location }) => {
  return (
    <div className="entry-meta" sx={{ fontSize: 1, mb: 1 }}>
      <Categories post={post} />
      <Tags post={post} />
	  <Comments location={location} post={post} />
    </div>
  )
}

export default PostEntryMeta
