import { ReactNode } from 'react';

import styles from './Header.module.scss';

import Button from '@mui/material/Button';

export interface MainButtonProps {link: string; buttonText: string; icon?: ReactNode}

export function MainButton({link, buttonText, icon}:MainButtonProps) {
  return (<Button href={link} variant="text">{buttonText}{icon}</Button>);
}