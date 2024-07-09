import { MenuProps } from '../components/Menu/Menu';

export const menuItemsMock: MenuProps = {
  menuItems: [
    { id: '1', label: 'Home', url: '/', icon: 'Home' },
    { id: '2', label: 'About', url: '/about', icon: 'Info' },
    { id: '3', label: 'Contact', url: '/contact', icon: 'ContactMail' },
  ],
  color: 'grey',
};
