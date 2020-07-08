export const gradients = {
  primary: {
    backgroundImage: t =>
      `linear-gradient(45deg, ${t.colors.primary}, ${t.colors.secondary})`,
  },
  secondary: {
    backgroundImage: t =>
      `linear-gradient(45deg, ${t.colors.shadeBlue}, ${t.colors.shadePink})`,
  },
  links: {
    backgroundImage: t =>
      `linear-gradient(45deg, ${t.colors.shadeBlue}, ${t.colors.shadePink})`,
  },
  headings: {
    background: t =>
      `radial-gradient(ellipse at top left, ${t.colors.primaryLight} 0%,${t.colors.primary} 20%, ${t.colors.primaryLight} 99%)`,
    WebkitBackgroundClip: `text`,
    backgroundClip: `text`,
    WebkitTextFillColor: `transparent`,
    borderImageSlice: `1`,
  },
}
