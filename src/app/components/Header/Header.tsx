import { Typography } from '@mui/material';
import styles from './Header.module.scss';

export function Header() {
  return (
    <div className={styles['container']}>
      <Typography variant="h1">Welcome to Header!</Typography>
    </div>
  );
}

export default Header;
