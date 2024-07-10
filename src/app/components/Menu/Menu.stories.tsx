import type { Meta, StoryObj } from '@storybook/react';
import { FadeMenu as Menu, MenuProps } from './Menu'; // Assuming `FadeMenu` is aliased as `Menu`
import { menuItemsMock } from '../../testData/menu';

interface Args {
  menuItems: MenuProps['menuItems'];
  color: string;
}

const meta: Meta<typeof Menu> = {
  title: 'Menu',
  component: Menu,
  tags: ['autodocs'],
};

export default meta;

type Story = StoryObj<Args>;

export const Primary: Story = {
  args: {
    menuItems: menuItemsMock.menuItems,
    color: menuItemsMock.color,
  },
  
};
