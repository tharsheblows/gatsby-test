export const gradients = {
  primary: {
    backgroundImage: t =>
      `linear-gradient(45deg, ${t.colors.primary}, ${t.colors.purple[7]})`,
  },
  secondary: {
    backgroundImage: t =>
      `linear-gradient(45deg, ${t.colors.secondary}, ${t.colors.purple[6]})`,
  },
}
