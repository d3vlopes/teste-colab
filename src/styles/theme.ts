export const theme = {
  colors: {
    light: "#fff",
    dark: "#1B2129",
    primary: {
      500: "#811AC0",
    },
    neutral: {
      100: "#FFFFFF",
      200: "#E7E6E6",
      300: "#D6D6D6",
      400: "#C3C3C3",
      500: "#717171",
      600: "#312e2e",
    },
    background: "#171717",
  },
  font: {
    sizes: {
      xs: "1.2rem",
      sm: "1.4rem",
      base: "1.6rem",
      lg: "1.8rem",
      xl: "2.2rem",
      "2xl": "2.4rem",
      "3xl": "2.8rem",
      "4xl": "3.2rem",
      "5xl": "4.8rem",
    },
    weight: {
      regular: 400,
      medium: 500,
      bold: 700,
    },
    family: "Roboto, sans-serif",
  },
  transition: {
    slow: "0.5s ease-in-out",
    default: "0.3s ease-in-out",
    fast: "0.1s ease-in-out",
    ease: {
      slow: "0.5s ease",
      default: "0.25s ease",
      fast: "0.1s ease",
    },
  },
} as const;
