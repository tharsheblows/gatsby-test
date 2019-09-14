import { tailwind } from '@theme-ui/presets'

export const fonts = {
  body: 'Inconsolata, monospace',
  heading: 'Oswald, sans-serif',
}
const transition = {
  transition: 'all .4s ease-in-out',
}

export const fontWeights = {
  body: 400,
  heading: 300,
  bold: 700,
}

export const fontSizes = [
  '1.2rem',
  '1.6rem',
  '1.8rem',
  '2.4rem',
  '3rem',
  '3.6rem',
  '4.8rem',
  '6.4rem',
  '7.2rem',
]

export const baseLineHeights = {
  none: '1',
  tight: '1.25',
  relaxed: '1.625',
  loose: '2',
}

export const lineHeights = {
  ...baseLineHeights,
  body: baseLineHeights.relaxed,
  heading: baseLineHeights.tight,
}

const heading = {
  fontFamily: 'heading',
  lineHeight: 'heading',
  fontWeight: 'heading',
  color: 'text',
  letterSpacing: 1,
  a: {
    borderBottom: 'none',
  },
}

export const a = {
  ...transition,
  color: 'text',
  textDecoration: 'none',
  '&:hover': {
    color: 'primary',
  },
}

export const p = {
  fontSize: [1, 2],
  letterSpacing: `-0.003em`,
  lineHeight: `body`,
}

export const h1 = {
  ...heading,
  fontSize: [5, 6],
  mt: 2,
}
export const h2 = {
  ...heading,
  fontSize: [4, 5],
  mt: 2,
}

export const h3 = {
  ...heading,
  fontSize: [3, 4],
  mt: 3,
}
export const h4 = {
  ...heading,
  fontSize: [2, 3],
}

export const h5 = {
  ...heading,
  fontSize: [1, 2],
}
export const h6 = {
  ...heading,
  color: 'muted',
  fontSize: 1,
  mb: 2,
}

export const base = {
  ...tailwind.styles.root,
  fontSize: [1, 2],
  color: `text`,
  a,
  p,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
}
