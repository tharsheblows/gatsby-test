/** @jsx jsx */
import { Container, Footer as StyledFooter, jsx } from 'theme-ui'
import FooterContent from './FooterContent'

const Footer = () => (
  <StyledFooter
    sx={{
      bg: t => t.colors.primaryLight,
      color: `white`,
      fontFamily: `body`,
    }}
  >
    <Container
      sx={{
        maxWidth: `l`,
        textAlign: 'center',
		fontSize: 1,
		bg: "transparent",
        color: `white`,
        a: {
          color: t => t.colors.shadeBlue,
          textDecoration: 'underline',
          '&:hover': {
            color: t => t.colors.shadePink,
          },
        },
      }}
    >
      <FooterContent />
    </Container>
  </StyledFooter>
)

export default Footer
