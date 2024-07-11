import type { Meta, StoryObj } from '@storybook/react';
import { Hero2 } from './Hero2';
import { mockData } from '../../testData/mock-data';
import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

const meta: Meta<typeof Hero2> = {
  component: Hero2,
  title: 'Hero2',
};
export default meta;
type Story = StoryObj<typeof Hero2>;

export const Heading: Story = {
  args: {...mockData},
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText(/Welcome to Header!/gi)).toBeTruthy();
  },
};
