import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import Header from './Header';

const mockData = {
  title: 'Plan My Plate',
};

describe('Header', () => {
  it('should render successfully', () => {
    const { getByText } = render(<Header title={mockData.title} />);
    const headingElement = getByText('Plan My Plate');
    expect(headingElement).toBeInTheDocument();
  });

  it('snapshot', () => {
    const { baseElement } = render(<Header title={mockData.title} />);
    expect(baseElement).toMatchSnapshot();
  })
});

