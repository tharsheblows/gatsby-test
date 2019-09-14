/** @jsx jsx */
import { Container, Footer as StyledFooter, jsx } from 'theme-ui'
import FooterContent from './FooterContent'

const Footer = () => (
  <StyledFooter sx={{ bg: `secondary`, color: 'white' }}>
    <Container
      sx={{
        maxWidth: `l`,
        textAlign: 'center',
        fontSize: 1,
        a: {
          color: 'muted',
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
