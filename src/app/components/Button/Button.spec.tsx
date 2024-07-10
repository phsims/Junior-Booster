import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import ArrowCircleUpIcon from '@mui/icons-material/ArrowCircleUp';

import { MainButton } from './Button';

const mockData = {link: "www.google.com", buttonText: "click here", icon: <ArrowCircleUpIcon/>}

describe('Button', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<MainButton {...mockData} />);
    expect(baseElement).toBeTruthy();
  });
  it('should have the correct text', () => {
    const { getByText } = render(<MainButton {...mockData} />);
    expect(getByText("click here")).toBeInTheDocument();
  });

});