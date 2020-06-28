/** @jsx jsx */
import { Container, Footer as StyledFooter, jsx } from 'theme-ui'
import FooterContent from './FooterContent'

const Footer = () => (
  <StyledFooter sx={{ bg: `background`, color: `white`, fontFamily: `body` }}>
    <Container
      sx={{
        maxWidth: `l`,
        textAlign: 'center',
        fontSize: 1,
        color: `text`,
        a: {
          color: t => t.colors.primary,
          textDecoration: 'underline',
          '&:hover': {
            color: 'primary',
          },
        },
      }}
    >
      <FooterContent />
    </Container>
  </StyledFooter>
)

export default Footer
