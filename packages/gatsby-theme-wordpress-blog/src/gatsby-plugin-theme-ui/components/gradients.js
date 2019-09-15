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
       }
