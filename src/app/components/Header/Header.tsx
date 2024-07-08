import { Typography } from '@mui/material';
import styles from './Header.module.scss';
import LocalDiningIcon from '@mui/icons-material/LocalDining';
import Box from '@mui/material/Box';


export function Header() {
  return (
    <div className={styles['container']}>
      <Box display="flex" justifyContent="center" alignItems="center">
        <LocalDiningIcon sx={{ color: '#DF6751', width: '50.99px', height: '47.33px' }} />
        <Typography variant="h1" component="h1" style={{ marginRight: '8px' }}>
        Plan My Plate
        </Typography>
      </Box>
    </div>
  );
};


export default Header;