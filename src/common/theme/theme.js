import { createTheme } from "@mui/material/styles";
import palette from "../styles/palette";
import { spacing } from "../styles/spacing";
import { breakpoints } from "../styles/breakpoints";
import { typography } from "../styles/typography";

// console.log(typography.typography, "typo");

export const theme = createTheme({
  palette: palette.palette,
  spacing: spacing.spacing,
  breakpoints: breakpoints.values,
  typography: typography.typography,
});
