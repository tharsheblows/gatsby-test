const sharedCardStyles = {
  boxShadow: `lg`,
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
    bg: `muted`,
  },
}
