import { deep } from '@theme-ui/presets'

import colors from './colors'
import { fonts, fontSizes, fontWeights, lineHeights, base } from './typo'
import { space } from './space'
import { sizes } from './sizes'
import {
  buttons,
  links,
  menus,
  cards,
  pagination,
  paginationLinks,
  pageNumbers,
  gradients,
} from './components'

export default {
  ...deep,
  colors,
  fonts,
  fontSizes,
  fontWeights,
  lineHeights,
  space,
  sizes,
  shadows: {
    ...deep.shadows,
    default: `0px 1px 10px rgba(0,0,0,0.05)`,
    hover: `0px 10px 20px rgba(0,0,0,0.25)`,
  },

  breakpoints: [`600px`, `900px`, `1200px`],
  radii: {
    ...deep.radii,
    xl: `1rem`,
  },
  styles: {
    ...deep.styles,
    ...base,
    root: base,
    Footer: {
      textAlign: `center`,
      display: `block`,
      color: `textMuted`,
      p: 0,
    },
    Container: {
      maxWidth: `1200px`,
    },
  },

  links,
  buttons,
  menus,
  cards,
  pagination,
  paginationLinks,
  pageNumbers,
  gradients,
}
