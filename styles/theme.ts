import { createTheme, responsiveFontSizes } from "@mui/material/styles";
import { deepPurple, amber } from "@mui/material/colors";

// Create a theme instance.
const theme = createTheme({
    palette: {
        primary: {
            light: "#8b72e5",
            main: "#593fb5",
            dark: "#210084",
            contrastText: "#fff"
        },
        secondary: {
            light: "#ff7961",
            main: "#f44336",
            dark: "#ba000d",
            contrastText: "#000"
        }
    },
    typography: {
        h1: {
            fontSize: 48
        },
        h2: {
            fontSize: 32
        },
        h3: {
            fontSize: 28
        },
        h4: {
            fontSize: 21
        },
        h5: {
            fontSize: 18
        },
        h6: {
            fontSize: 16
        },
        h1: {
            fontSize: 48
        },
        body1: {
            fontSize: 16
        },
        body2: {
            fontSize: 16
        },
        allVariants: {
            color: "#282828"
        }
    }
});

const responsiveTheme = responsiveFontSizes(theme, {
    factor: 2
});

export default responsiveTheme;
