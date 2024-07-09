import { render } from '@testing-library/react';

import Hero2 from './Hero2';

describe('Hero2', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Hero2 />);
    expect(baseElement).toBeTruthy();
  });
});
