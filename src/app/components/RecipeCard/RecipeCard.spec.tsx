import { render } from '@testing-library/react';

import RecipeCard from './RecipeCard';

describe('RecipeCard', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<RecipeCard />);
    expect(baseElement).toBeTruthy();
  });
});
