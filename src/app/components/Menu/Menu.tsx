import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Fade from '@mui/material/Fade';
import { useState } from 'react';
import { Box, Link, ListItemIcon } from '@mui/material';
import * as Icons from '@mui/icons-material';
import { SvgIconComponent } from '@mui/icons-material';

export interface MenuItemProps {
  id: string;
  label: string;
  url: string;
  icon: string;
}
export interface MenuProps {
  /**
   * MenuItems should contain an object: <br/>
   * id: string;<br/>
   * label: string;<br/>
   * url: string;<br/>
   * icon: string; from MUI icons https://mui.com/material-ui/material-icons/;
   */
  menuItems: MenuItemProps[];
  color: string;
}

/** Menu */
/**
 * FadeMenu Component
 *
 * The `FadeMenu` component is a versatile and dynamic menu that uses Material-UI components to provide a smooth fade transition.
 * It accepts an array of menu items, each with an identifier, label, URL, and an icon from the Material-UI icon set.
 * This component is designed to enhance the user interface by offering a dropdown menu with customizable options and icons.
*/
export const FadeMenu = ({ menuItems, color }: MenuProps) => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      {/* \/ replace to new button \/ */}
      <Button
        id="fade-button"
        aria-controls={open ? 'fade-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
      >
        Button
      </Button>
      {/* /\ replace to new button /\ */}

      <Menu
        id="fade-menu"
        MenuListProps={{
          'aria-labelledby': 'fade-button',
        }}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        TransitionComponent={Fade}
      >
        {menuItems.map((item) => (
          <MenuItem key={item.id} onClick={handleClose}>
            <Link href={item.url} sx={{ textDecoration: 'none' }}>
              <Box sx={{ display: 'flex', color: { color } }}>
                {IconMenu(item.icon)}
                {item.label}
              </Box>
            </Link>
          </MenuItem>
        ))}
      </Menu>
    </>
  );
};

function IconMenu(icon: string) {
  const getIconComponent = (iconName: string): SvgIconComponent | null => {
    const IconComponent = Icons[iconName as keyof typeof Icons];
    if (IconComponent) {
      return IconComponent;
    }
    return null;
  };
  const IconComponent = getIconComponent(icon);

  return (
    <>
      {IconComponent ? (
        <ListItemIcon>
          <IconComponent />
        </ListItemIcon>
      ) : null}
    </>
  );
}
