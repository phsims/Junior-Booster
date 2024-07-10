import React from 'react';
import { fireEvent, render } from '@testing-library/react';
import { FadeMenu as Menu } from './Menu'; // Adjust path as necessary
import { menuItemsMock } from '../../testData/menu'; // Adjust path as necessary
import { screen } from '@testing-library/dom';

describe('Menu', () => {
  const { menuItems, color } = menuItemsMock;
  it('renders correctly', () => {
    const { baseElement } = render(
      <Menu menuItems={menuItems} color={color} />
    );
    expect(baseElement).toBeTruthy();
  });
  it('matches snapshot', () => {
    render(<Menu menuItems={menuItems} color={color} />);
    const button = screen.getByText('Button');
    fireEvent.click(button);
    expect(document.body).toMatchSnapshot();
  });
});
