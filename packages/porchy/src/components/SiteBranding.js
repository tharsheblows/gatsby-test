/** @jsx jsx */
import { jsx, Styled } from 'theme-ui'
import { Link } from 'gatsby'

const SiteBranding = ({ title }) => {
  return (
    <Styled.h1 sx={{ m: 0, textTransform: 'uppercase', fontSize: [3, 5] }}>
      <Styled.a as={Link} to="/" rel="home">
        {title}
      </Styled.a>
    </Styled.h1>
  )
}

export default SiteBranding
