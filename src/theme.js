export const tokens = {


  orange: {
      100: "#fdeded",
      200: "#fbdbdb",
      300: "#f8caca",
      400: "#f6b8b8",
      500: "#f4a6a6",
      600: "#c38585",
      700: "#926464",
      800: "#624242",
      900: "#312121"
},

    grey: {
        100: "#cfd3d9",
        200: "#9ea8b4",
        300: "#6e7c8e",
        400: "#3d5169",
        500: "#0d2543",
        600: "#0a1e36",
        700: "#081628",
        800: "#050f1b",
        900: "#03070d"
    },


    primary: {
        // Blue black
          100: "#cdced0",
          200: "#9b9ea2",
          300: "#686d73",
          400: "#363d45",
          500: "#040c16",
          600: "#030a12",
          700: "#02070d",
          800: "#020509",
          900: "#010204"
      },
    secondary: {
      // red
      100: "#ffcccc",
      200: "#ff9999",
      300: "#ff6666",
      400: "#ff3333",
      500: "#ff0000",
      600: "#cc0000",
      700: "#990000",
      800: "#660000",
      900: "#330000"
    },
    tertiary: {
      // purple
      500: "#8884d8",
    },
    background: {
      light: "#2d2d34",
      main: "#1f2026",
    },
  };
  
  // mui theme settings
  export const themeSettings = {
    palette: {
      primary: {
        ...tokens.primary,
        main: tokens.primary[500],
        light: tokens.primary[400],
      },
      secondary: {
        ...tokens.secondary,
        main: tokens.secondary[600],
      },
      tertiary: {
        ...tokens.tertiary,
      },
      grey: {
        ...tokens.grey,
        main: tokens.grey[500],
      },
      orange: {
        ...tokens.orange,
        main: tokens.orange[500],
      },
      background: {
        default: tokens.background.main,
        light: tokens.background.light,
      },
    },
    typography: {
      fontFamily: ["Inter", "sans-serif"].join(","),
      fontSize: 12,
      h1: {
        fontFamily: ["Inter", "sans-serif"].join(","),
        fontSize: 32,
      },
      h2: {
        fontFamily: ["Inter", "sans-serif"].join(","),
        fontSize: 24,
      },
      h3: {
        fontFamily: ["Inter", "sans-serif"].join(","),
        fontSize: 20,
        fontWeight: 800,
        color: tokens.grey[200],
      },
      h4: {
        fontFamily: ["Inter", "sans-serif"].join(","),
        fontSize: 14,
        fontWeight: 600,
        color: tokens.grey[300],
      },
      h5: {
        fontFamily: ["Inter", "sans-serif"].join(","),
        fontSize: 12,
        fontWeight: 400,
        color: tokens.grey[500],
      },
      h6: {
        fontFamily: ["Inter", "sans-serif"].join(","),
        fontSize: 10,
        color: tokens.grey[600],
      },
      p: {
        fontFamily: ["Inter", "sans-serif"].join(","),
        fontSize: 12,
        color: tokens.grey[700],
      },
    },
  };