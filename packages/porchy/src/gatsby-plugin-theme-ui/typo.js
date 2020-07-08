import { tailwind } from '@theme-ui/presets'
import { borderRadius } from './sharedStyles'
import { gradients } from './components/gradients'

export const fonts = {
  body: 'LeagueSpartanVariable, sans-serif',
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
  '0.8rem',
  '1.0rem',
  '1.2rem',
  '1.4rem',
  '1.6rem',
  '1.8rem',
  '2rem',
  '2.2rem',
  '2.4rem',
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
  color: 'primary',
  textDecoration: 'none',
  '&:hover': {
    color: 'secondary',
  },
}

export const p = {
  fontSize: [2],
  letterSpacing: `-0.003em`,
  lineHeight: `body`,
}

export const h1 = {
  ...heading,
  ...transition,
  fontSize: [6],
  mt: 2,
  variant: `gradients.headings`,
  color: t => `${t.colors.primaryInBetween}`,
  '&:hover': {
    ...transition,
    color: t => `${t.colors.primaryInBetween}`,
    background: `transparent`,
    WebkitBackgroundClip: `unset`,
    backgroundClip: `unset`,
    WebkitTextFillColor: `unset`,
    borderImageSlice: `1`,
  },
  a: {
    color: t => `${t.colors.primaryInBetween}`,
  },
}
export const h2 = {
  ...heading,
  fontSize: [5],
  mt: 2,
}

export const h3 = {
  ...heading,
  fontSize: [4],
  mt: 3,
}
export const h4 = {
  ...heading,
  fontSize: [3],
}

export const h5 = {
  ...heading,
  fontSize: [2],
}
export const h6 = {
  ...heading,
  color: 'muted',
  fontSize: 1,
  mb: 2,
}

export const img = {
  height: 'auto',
}

export const figure = {
  maxWidth: '100%',
  background: tailwind.colors.gray[7],
  padding: `1em`,
  textAlign: `center`,
  color: tailwind.colors.body,
  borderRadius: `5px`,
}

export const figcaption = {
  fontSize: `0.8em`,
  marginTop: `1em`,
  color: `white`,
}

export const blockquote = {
  borderLeft: t => `0.5em solid ${t.colors.primary}`,
  textAlign: `left`,
  padding: `0.75em 2em`,
  borderRadius: borderRadius,
  p: {
    marginTop: `0`,
  },
}

export const code = {
  fontSize: [`1rem`],
  background: tailwind.colors.gray[3],
  fontFamily: 'Monaco, Consolas, "Andale Mono", "DejaVu Sans Mono", monospace',
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
  img,
  figure,
  figcaption,
  blockquote,
  code,
}
