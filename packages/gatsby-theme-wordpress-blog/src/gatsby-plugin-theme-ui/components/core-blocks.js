import { borderRadius } from '../sharedStyles'
// Core blocks overrides

export const coreBlocks = {
  article: {
    'div.wp-block-column': {
      border: t => `1px solid ${t.colors.backgroundLight}`,
      padding: `0 1em`,
      borderRadius: borderRadius,
    },
  },
}
