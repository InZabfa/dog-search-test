import { createTheme } from "@mui/material/styles";

//Custom colors
const colors = {
  blackPearl: "#1C1C1E",
  argentinianBlue: "#63ADF2",
  lightBlue: "#85C1F8",
  white: "#FFFFFF",
  hoverBlue: "#4a92cf",
  selectedBlue: "#1e6bb8",
};

const theme = createTheme({
  palette: {
    primary: {
      main: colors.argentinianBlue,
      contrastText: colors.white,
    },
    secondary: {
      main: colors.lightBlue,
      contrastText: colors.white,
    },
    background: {
      default: colors.blackPearl,
      paper: "#2C2C2E",
    },
    text: {
      primary: colors.white,
      secondary: colors.argentinianBlue,
    },
    action: {
      hover: colors.hoverBlue,
      selected: colors.selectedBlue,
      active: colors.lightBlue,
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        containedPrimary: {
          backgroundColor: colors.argentinianBlue,
          "&:hover": {
            backgroundColor: colors.hoverBlue,
          },
          "&.Mui-selected": {
            backgroundColor: colors.selectedBlue,
            boxShadow: "0 0 8px rgba(30, 107, 184, 0.8)",
          },
        },
      },
    },
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          "&:hover .MuiOutlinedInput-notchedOutline": {
            borderColor: colors.argentinianBlue,
          },
          "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
            borderColor: colors.lightBlue,
          },
          backgroundColor: "#2C2C2E",
        },
        notchedOutline: {
          borderColor: "#565656",
        },
      },
    },
    MuiAutocomplete: {
      styleOverrides: {
        popupIndicator: {
          color: colors.argentinianBlue,
        },
        option: {
          "&:hover": {
            backgroundColor: colors.hoverBlue,
          },
          '&[aria-selected="true"]': {
            backgroundColor: colors.selectedBlue,
          },
        },
      },
    },
    MuiTypography: {
      styleOverrides: {
        root: {
          color: colors.white,
        },
        h5: {
          color: colors.argentinianBlue,
          fontWeight: 500,
        },
      },
    },
  },
});

export default theme;
