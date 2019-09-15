/** @jsx jsx */
import { jsx } from "theme-ui"
import Categories from "./Categories"
import Tags from "./Tags"

const PostEntryMeta = ({ post }) => {
  return (
    <div className="entry-meta" sx={{ fontSize: 1, mb: 1 }}>
      <Categories post={post} />
      <Tags post={post} />
    </div>
  )
}

export default PostEntryMeta
