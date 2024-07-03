import { withThemeFromJSXProvider } from '@storybook/addon-themes';
import { CssBaseline, ThemeProvider } from '@mui/material';
import theme from '../src/theme';
export const decorators = [
    withThemeFromJSXProvider({
    themes: {
      theme
    },
    defaultTheme: 'theme',
    Provider: ThemeProvider,
    GlobalStyles: CssBaseline,
  })];