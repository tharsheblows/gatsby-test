const sharedCardStyles = {
  border: `1px solid black`,
  borderRadius: 10,
  fontFamily: `body`,
  '.entry-title': {
    mt: 0,
  },
  '.content': {
    p: [2, 5],
  },
}

export const cards = {
  white: {
    ...sharedCardStyles,
    bg: `white`,
  },
  dark: {
	  ...sharedCardStyles,
	  bg: `dark`,
  },
  primary: {
    ...sharedCardStyles,
    bg: `primary`,
  },
  secondary: {
    ...sharedCardStyles,
    bg: `secondary`,
  },
  muted: {
    ...sharedCardStyles,
	bg: `grayDark`,
	borderColor: `backgroundLight`,
  },
}
