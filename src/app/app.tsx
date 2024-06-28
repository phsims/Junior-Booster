import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { AppBar, Typography } from '@mui/material';

import theme from '../theme/theme';
import Home from './pages/Home/Home';
import styles from './app.module.scss';


export function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <AppBar
        position="static"
        color="transparent"
        sx={{ p: ' 1rem 0', flexGrow: 1 }}
      >
        <Typography variant="h1" component="h2" gutterBottom>
          Welcome to My MUI App
        </Typography>
      </AppBar>
      <Home />
    </ThemeProvider>
  );
}

export default App;
