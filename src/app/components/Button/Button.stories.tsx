import type { Meta, StoryObj } from '@storybook/react';
import { MainButton } from './Button';
import ArrowCircleUpIcon from '@mui/icons-material/ArrowCircleUp';


import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

const meta: Meta<typeof MainButton> = {
  component: MainButton,
  title: 'MainButton',
};
export default meta;
type Story = StoryObj<typeof MainButton>;

export const Button: Story = {
  args: {link: "www.google.com", buttonText: "click here", icon: <ArrowCircleUpIcon/>},
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText(/Welcome to MainButton!/gi)).toBeTruthy();
  },
};