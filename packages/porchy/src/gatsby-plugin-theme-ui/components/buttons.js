const sharedButtonStyles = {
  border: `none`,
  color: `white`,
  cursor: `pointer`,
  fontFamily: `heading`,
  transition: `all 0.4s ease-in-out`,
  textTransform: `uppercase`,
  letterSpacing: 1,
  boxShadow: `md`,
  '&:hover': {
    transform: `translateY(-5px)`,
    boxShadow: t => `0 2px 2px 0 ${t.colors.yellow}`,
  },
}

export const buttons = {
  primary: {
    ...sharedButtonStyles,
    borderRadius: 5,
	variant: `gradients.secondary`,
	color: `black`,
    fontSize: 1,
    px: 2,
	py: 1,
	':hover': {
		variant: `gradients.primary`,
		color: `white`
	}
  },
  secondary: {
    ...sharedButtonStyles,
    borderRadius: 5,
    variant: `gradients.primary`,
    color: `white`,
    fontSize: 1,
    px: 2,
    py: 1,
  },
}
