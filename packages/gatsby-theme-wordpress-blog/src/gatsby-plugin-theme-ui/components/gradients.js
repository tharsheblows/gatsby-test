export const gradients = {
         primary: {
           backgroundImage: t =>
             `linear-gradient(45deg, ${t.colors.primary}, ${t.colors.secondary})`,
         },
         secondary: {
           backgroundImage: t =>
             `linear-gradient(45deg, ${t.colors.highlight}, ${t.colors.secondary})`,
         },
         links: {
           backgroundImage: t =>
             `linear-gradient(45deg, ${t.colors.shadeBlue}, ${t.colors.shadePink})`,
         },
       }
