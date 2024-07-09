import { Typography } from '@mui/material';
import LocalDiningIcon from '@mui/icons-material/LocalDining';
import Box from '@mui/material/Box';

interface HeaderProps {
  title: string;
}


export function Header({ title }: HeaderProps) {
  return (
    <div>
      <Box display="flex" justifyContent="center" alignItems="center">
        <LocalDiningIcon 
          color="primary"
          fontSize="large"
          data-testid="local-dining-icon"
        />
        <Typography variant="h1" component="h1" style={{ marginRight: '8px' }}>
        Plan My Plate
        </Typography>
      </Box>
    </div>
  );
};


export default Header;